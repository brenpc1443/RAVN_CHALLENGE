import styled from "styled-components";
import { useMutation } from "@apollo/client";
import Icon from "ui/Icon";
import { DELETE_TASK } from "shared/services/characterMutations";
import { Task } from "shared/types/schema";
import DashboardModal from "pages/Dashboard/DashboardModals";
import { useState } from "react";

type TaskViewModalProps = {
  visible: boolean;
  onClose: () => void;
  task: Task;
};

const TaskViewModal = ({ visible, onClose, task }: TaskViewModalProps) => {
  const [visibleEdit, setVisibleEdit] = useState(false);

  const [deleteTask] = useMutation(DELETE_TASK, {
    onCompleted: () => {
      alert("Tarea eliminada con éxito");
      onClose();
    },
    onError: () => {
      alert("Error al eliminar la tarea");
    },
  });

  return (
    <>
      {visible && (
        <StyledContainer>
          <div
            className="option"
            onClick={() => {
              setVisibleEdit(!visibleEdit);
            }}
          >
            <Icon color="#FFFFFF" remixClass="ri-pencil-line" />
            <p>Edit</p>
            {visibleEdit && (
              <DashboardModal
                visible={visibleEdit}
                onClose={() => {
                  setVisibleEdit(false);
                }}
                task={task}
                isEdit
              />
            )}
          </div>
          <div
            className="option"
            onClick={(e) => {
              e.stopPropagation();
              deleteTask({ variables: { input: { id: task.id } } });
            }}
          >
            <Icon color="#FFFFFF" remixClass="ri-delete-bin-6-line" />
            <p>Delete</p>
          </div>
        </StyledContainer>
      )}
    </>
  );
};

export default TaskViewModal;

const StyledContainer = styled.div`
  width: 100px;
  height: 65px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #393d41;
  border: 1px #94979a solid;
  border-radius: 5px;
  position: absolute;
  right: 20px;
  z-index: 10;

  p {
    font-size: 12px;
  }

  .option {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
