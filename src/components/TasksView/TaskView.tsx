import styled from "styled-components";
import Icon from "ui/Icon";

const TaskView = () => {
  return (
    <td>
      <StyledContainer>
        <div className="info">
          <p>Slack</p>
          <Icon remixClass="ri-more-line" />
        </div>
        <div className="timer">
          <p>4 points</p>
          <div className="tag">
            <Icon remixClass="ri-alarm-line" size={15} />
            <p>TODAY</p>
          </div>
        </div>
        <div className="labels">
          <div className="tag">
            <p>IOS APP</p>
          </div>
          <div className="tag">
            <p>IOS APP</p>
          </div>
        </div>
        <div className="reactions">
          <div className="img" />
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
        </div>
      </StyledContainer>
    </td>
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

  .info {
    i {
      cursor: pointer;
    }
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

    .img {
      width: 25px;
      height: 25px;
      background-image: url("https://picsum.photos/25/25?random");
      border-radius: 50%;
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
