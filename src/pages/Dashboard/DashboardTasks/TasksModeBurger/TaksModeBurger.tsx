import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import TaskView from "components/TasksView";
import { columns } from "./utils/columns";
import { GET_USERS, GET_TASKS } from "shared/services/characterQueries";
import { User, Task } from "shared/types/schema";

const TaskModeBurger = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const { loading: usersLoading, error: usersError } = useQuery(GET_USERS, {
    onCompleted: (data) => {
      setUsers(data.users ?? []);
    },
  });

  const { loading: tasksLoading, error: tasksError } = useQuery(GET_TASKS, {
    variables: {
      input: {},
    },
    onCompleted: (data) => {
      setTasks(data.tasks ?? []);
    },
  });

  return (
    <StyledContainer>
      <table>
        <thead>
          <tr>
            {columns.map(({ id, title }) => {
              const same = tasks.filter((task) => task.status === title);
              return (
                <th key={id}>
                  <StyledTh>{`${title} (${same.length})`}</StyledTh>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {!!usersLoading && (
            <tr>
              <td colSpan={columns.length}>
                <>Loading skeleton</>
              </td>
            </tr>
          )}
          {!usersError && !usersLoading && (
            <tr>
              {columns.map(({ id, title }) => {
                const same = tasks.filter((task) => task.status === title);
                return (
                  <td key={id}>
                    {same.map((record, index) => {
                      return <TaskView key={`${id}-${index}`} task={record} />;
                    })}
                  </td>
                );
              })}
            </tr>
          )}
          {!!usersError && !usersLoading && (
            <tr>
              <td colSpan={columns.length}>
                <>Error</>
              </td>
            </tr>
          )}
          {users.length === 0 && !usersLoading && (
            <tr>
              <td colSpan={columns.length}>
                <>is Empty</>
              </td>
            </tr>
          )}
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
