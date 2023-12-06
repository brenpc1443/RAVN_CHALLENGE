import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useMutation } from "@apollo/client";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { CreateTaskInput, PointEstimate, Status } from "shared/types/schema";
import Tag from "ui/Tag";
import SelectModal from "./SelectModal";
import { CREATE_TASK, UPDATE_TASK } from "shared/services/characterMutations";
import { Task } from "shared/types/schema";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  isEdit?: boolean;
  task?: Task;
};

const DashboardModal = ({
  visible,
  onClose,
  isEdit = false,
  task,
}: ModalProps) => {
  const [createTask] = useMutation(CREATE_TASK, {
    onCompleted: () => {
      alert("Tarea creada con éxito");
      onClose();
    },
    onError: () => {
      alert("Error al crear la tarea");
    },
  });

  const [updateTask] = useMutation(UPDATE_TASK, {
    onCompleted: () => {
      alert("Tarea editada con éxito");
      onClose();
    },
    onError: () => {
      alert("Error al editar la tarea");
    },
  });

  const defaultValuesTasks = {
    assigneeId: "",
    dueDate: "",
    name: "",
    pointEstimate: PointEstimate.ZERO,
    status: Status.BACKLOG,
    tags: [],
  };

  const formMethods = useForm<CreateTaskInput>({
    mode: "all",
    defaultValues: defaultValuesTasks,
  });

  const { getValues, control, setValue } = formMethods;
  const [modalEstimate, setModalEstimate] = useState(false);
  const [modalAssignee, setModalAssigne] = useState(false);
  const [modalTag, setModalTag] = useState(false);
  const [modalCalender, setModalCalender] = useState(false);

  const handleEstimate = () => {
    setModalEstimate(!modalEstimate);
    setModalAssigne(false);
    setModalTag(false);
    setModalCalender(false);
  };

  const handleAssignee = () => {
    setModalAssigne(!modalAssignee);
    setModalEstimate(false);
    setModalTag(false);
    setModalCalender(false);
  };

  const handleTag = () => {
    setModalTag(!modalTag);
    setModalAssigne(false);
    setModalEstimate(false);
    setModalCalender(false);
  };

  const handleCalender = () => {
    setModalCalender(!modalCalender);
    setModalTag(false);
    setModalAssigne(false);
    setModalEstimate(false);
  };

  const handleClickCreate = () => {
    if (isEdit) {
      const values = {
        id: task?.id,
        position: task?.position,
        ...getValues(),
      };
      updateTask({ variables: { input: values } });
    } else {
      if (
        getValues().name !== "" &&
        getValues().pointEstimate !== PointEstimate.ZERO
      ) {
        createTask({ variables: { input: getValues() } });
      }
    }
  };

  useEffect(() => {
    if (task) {
      setValue("assigneeId", task.assignee?.id);
      setValue("dueDate", task.dueDate);
      setValue("name", task.name);
      setValue("pointEstimate", task.pointEstimate);
      setValue("status", task.status);
      setValue("tags", task.tags);
    }
    // eslint-disable-next-line
  }, [isEdit]);

  return (
    <>
      {visible && (
        <FormProvider {...formMethods}>
          <ModalOverly
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <StyledContainer>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput
                    type="text"
                    placeholder="Task Title"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
              <Tags>
                <div className="modal_tag">
                  <div onClick={handleEstimate}>
                    <Tag
                      placeIcon="ri-increase-decrease-fill"
                      title={
                        getValues().pointEstimate === PointEstimate.ZERO
                          ? "Estimate"
                          : getValues().pointEstimate
                      }
                      color="#FFFFFF"
                      size="medium"
                    />
                  </div>
                  {modalEstimate && (
                    <SelectModal title="Estimate" onClose={handleEstimate} />
                  )}
                </div>
                <div className="modal_tag">
                  <div onClick={handleAssignee}>
                    <Tag
                      placeIcon="ri-user-3-fill"
                      title={
                        getValues().assigneeId === "" ? "Assignee" : "Name"
                      }
                      color="#FFFFFF"
                      size="medium"
                    />
                  </div>
                  {modalAssignee && (
                    <SelectModal title="Assignee" onClose={handleAssignee} />
                  )}
                </div>
                <div className="modal_tag">
                  <div onClick={handleTag}>
                    <Tag
                      placeIcon="ri-price-tag-3-fill"
                      title="Label"
                      color="#FFFFFF"
                      size="medium"
                    />
                  </div>
                  {modalTag && <SelectModal title="Tag" onClose={handleTag} />}
                </div>
                <div className="modal_tag">
                  <div
                    onClick={() => {
                      setModalCalender(!modalCalender);
                    }}
                  >
                    <Tag
                      placeIcon="ri-calendar-check-line"
                      title="Due Date"
                      color="#FFFFFF"
                      size="medium"
                    />
                  </div>
                  {modalCalender && (
                    <SelectModal title="Calender" onClose={handleCalender} />
                  )}
                </div>
              </Tags>
              <Buttons $active={true}>
                <div className="modal_btn" onClick={onClose}>
                  Cancel
                </div>
                <div className="modal_btn" onClick={handleClickCreate}>
                  {isEdit ? "Edit" : "Create"}
                </div>
              </Buttons>
            </StyledContainer>
          </ModalOverly>
        </FormProvider>
      )}
    </>
  );
};

export default DashboardModal;

const ModalOverly = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;
`;

const StyledContainer = styled.div`
  width: 500px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border-radius: 8px;
  background-color: #393d41;
`;

const Buttons = styled.div<{
  $active: boolean;
}>`
  height: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .modal_btn {
    width: 60px;
    height: 35px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: white;
    cursor: pointer;
  }

  .modal_btn:nth-child(2) {
    background-color: #eba59e;
    margin-left: 10px;
    ${({ $active }) =>
      !!$active &&
      css`
        background-color: #da584b;
      `}
  }
`;

const StyledInput = styled.input`
  height: 30%;
  background-color: #393d41;
  color: white;
  font-size: 16px;
`;

const Tags = styled.div`
  height: 35%;
  display: flex;
  align-items: center;

  .modal_tag {
    position: relative;
  }

  .UI_TAG {
    cursor: pointer;
  }
`;
