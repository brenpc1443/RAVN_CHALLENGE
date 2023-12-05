import { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import Icon from "ui/Icon";
import Tag from "ui/Tag";
import { Task } from "shared/types/schema";
import { taskTag } from "./utils/taskTag";
import TaskViewModal from "./TaskViewModal";

type TaskViewProps = {
  task: Task;
};

const TaskView = ({ task }: TaskViewProps) => {
  const [clickOptions, setCilckOptions] = useState(false);

  const onClose = () => {
    setCilckOptions(false);
  };

  const currentDate = new Date();
  const dueDate = new Date(task.dueDate.toString());
  const differenceDays =
    Math.floor(
      (dueDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    ) + 1;

  let resultText: string;
  let resultColor: string;

  if (differenceDays > 0) {
    resultText = moment(dueDate).format("DD-MM-YYYY");
    resultColor = "#FFFFFF";
  } else if (differenceDays === 0) {
    resultText = "ON TIME";
    resultColor = "#E5B454";
  } else if (differenceDays === -1) {
    resultText = "YESTERDAY";
    resultColor = "#DA584B";
  } else {
    resultText = "IS OLDER";
    resultColor = "#DA584B";
  }

  return (
    <StyledContainer>
      <section className="info">
        <p>{task.name}</p>
        <div className="info_options">
          <div
            onClick={() => {
              setCilckOptions(!clickOptions);
            }}
          >
            <Icon remixClass="ri-more-line" />
          </div>
          {clickOptions && (
            <TaskViewModal
              visible={clickOptions}
              task={task}
              onClose={() => {
                onClose();
              }}
            />
          )}
        </div>
      </section>
      <section className="timer">
        <p>{`${task.pointEstimate} POINTS`}</p>
        <Tag title={resultText} placeIcon="ri-alarm-line" color={resultColor} />
      </section>
      <section className="labels">
        {task.tags.map((value: string, index) => {
          let backColor = "";
          taskTag.forEach(({ title, color }) => {
            if (title === value) backColor = color;
          });
          return <Tag key={index} title={value} color={backColor} />;
        })}
      </section>
      <section className="reactions">
        <StyledImg $uri={task.assignee?.avatar || ""} />
        <div className="frame">
          <Icon remixClass="ri-attachment-2" />
          <div className="frame-reaction">
            <p>5</p>
            <Icon remixClass="ri-node-tree" />
          </div>
          <div className="frame-reaction">
            <p>3</p>
            <Icon remixClass="ri-chat-3-line" />
          </div>
        </div>
      </section>
    </StyledContainer>
  );
};

export default TaskView;

const StyledContainer = styled.div`
  width: 250px;
  height: 170px;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  border-radius: 10px;
  background-color: #2c2f33;
  margin-bottom: 10px;

  .info {
    i {
      cursor: pointer;
    }
  }
  .info_options {
    position: relative;
  }

  .info,
  .timer,
  .labels,
  .reactions {
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }

  .labels {
    justify-content: flex-start;
    overflow-x: auto;
  }
  .labels::-webkit-scrollbar {
    height: 1px;
  }

  .reactions {
    i {
      font-size: 15px;
      color: white;
    }

    .frame {
      width: 100px;
      display: flex;
      justify-content: space-around;
    }

    .frame-reaction {
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }

  .tag {
    height: 20px;
    max-width: auto;
    min-width: 80px;
    padding: 0 8px;
    margin-right: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    color: white;
    background-color: #94979a1a;
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
