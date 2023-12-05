import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useFormContext } from "react-hook-form";
import { PointEstimate, TaskTag } from "shared/types/schema";
import Icon from "ui/Icon";
import { useDashContext } from "shared/context/Context";
import { CreateTaskInput } from "shared/types/schema";

type typeMode = "Estimate" | "Assignee" | "Tag" | "Calender";

type SelectModalProps = {
  title: typeMode;
  onClose: () => void;
};

const SelectModal = ({ title, onClose }: SelectModalProps) => {
  const {
    Users: { users },
  } = useDashContext();

  const { control, setValue } = useFormContext<CreateTaskInput>();

  const pointEstimatesArray = Object.values(PointEstimate);
  const elementsPoints = pointEstimatesArray.map((record, index) => {
    return (
      <SectionModal key={index}>
        <Controller
          name="pointEstimate"
          control={control}
          render={({ field }) => (
            <>
              <Icon remixClass="ri-increase-decrease-fill" />
              <h3
                onClick={() => {
                  onClose();
                  field.onChange(record);
                }}
              >
                {record} POINTS
              </h3>
            </>
          )}
        />
      </SectionModal>
    );
  });

  const elementsAssignee = users.map((user, index) => {
    return (
      <SectionModal key={index}>
        <Controller
          name="assigneeId"
          control={control}
          render={({ field }) => (
            <>
              <StyledImg $uri={user.avatar || ""} />
              <h3
                onClick={() => {
                  onClose();
                  field.onChange(user.id);
                }}
              >
                {user.fullName}
              </h3>
            </>
          )}
        />
      </SectionModal>
    );
  });

  title === "Tag" && setValue("tags", []);
  const TaskTagArray = Object.values(TaskTag);
  const elementsTag = TaskTagArray.map((record, index) => {
    return (
      <SectionModal key={index}>
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <>
              <input
                type="checkbox"
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  field.onChange([...field.value, isChecked ? record : null]);
                }}
              />
              <h3>{record}</h3>
            </>
          )}
        />
      </SectionModal>
    );
  });

  const elementCalender = (
    <SectionModal>
      <Controller
        name="dueDate"
        control={control}
        render={({ field }) => (
          <>
            <DatePicker
              onChange={(date: Date | null) => {
                date && field.onChange(date);
              }}
              placeholderText="Selecciona una fecha"
            />
          </>
        )}
      />
    </SectionModal>
  );

  return (
    <StyledContainer>
      <h2>{title}</h2>
      {title === "Estimate" && elementsPoints}
      {title === "Assignee" && elementsAssignee}
      {title === "Tag" && elementsTag}
      {title === "Calender" && elementCalender}
    </StyledContainer>
  );
};

export default SelectModal;

const StyledContainer = styled.div`
  min-width: 150px;
  max-width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px white solid;
  padding: 8px 12px;

  position: absolute;
  left: 5px;
  top: calc(100% + 5px);
  background: #393d41;

  h2 {
    color: #94979a;
    font-size: 15px;
  }
`;

const SectionModal = styled.div`
  width: 100%;
  display: flex;
  margin-top: 7px;
  cursor: pointer;

  h3 {
    margin-left: 5px;
    color: #ffffff;
  }

  i {
    color: #ffffff;
  }
`;

const StyledImg = styled.div<{ $uri: string }>`
  width: 25px;
  height: 25px;
  background-position: center;
  background-size: contain;
  background-image: url("${(props) => props.$uri}");
  border-radius: 50%;
`;
