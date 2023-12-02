import styled from "styled-components";
import TaskView from "components/TasksView";

const TaskModeBurger = () => {
  const columns = [
    {
      id: "name.backlog",
      title: "BACKLOG",
    },
    {
      id: "name.todo",
      title: "TODO",
    },
    {
      id: "name.in-progress",
      title: "IN_PROGRESS",
    },
    {
      id: "name.done",
      title: "DONE",
    },
    {
      id: "name.cancelled",
      title: "CANCELLED",
    },
  ];

  return (
    <StyledContainer>
      <table>
        <thead>
          <tr>
            {columns.map(({ id, title }) => {
              return (
                <th key={id}>
                  <StyledTh>{title}</StyledTh>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <TaskView></TaskView>
            <TaskView></TaskView>
          </tr>
          <tr>
            <TaskView></TaskView>
          </tr>
        </tbody>
      </table>
    </StyledContainer>
  );
};

export default TaskModeBurger;

const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;

  table {
    border-collapse: separate;
    border-spacing: 10px;
    table-layout: auto;
  }

  tbody {
    gap: 5px;
  }

  td,
  tr {
    margin-right: 10px;
    margin-bottom: 14px;
  }
`;

const StyledTh = styled.div`
  width: 280px;
  height: 30px;
  text-align: start;
  color: white;
`;
