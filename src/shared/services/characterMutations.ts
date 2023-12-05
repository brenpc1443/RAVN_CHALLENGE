import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation crearTareas($input: CreateTaskInput!) {
    createTask(input: $input) {
      assignee {
        id
        avatar
        createdAt
        email
        fullName
        type
        updatedAt
      }
      createdAt
      creator {
        id
        avatar
        createdAt
        email
        fullName
        type
        updatedAt
      }
      dueDate
      id
      name
      pointEstimate
      position
      status
      tags
    }
  }
`;

export const DELETE_TASK = gql`
  mutation eliminarTarea($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      assignee {
        id
        avatar
        createdAt
        email
        fullName
        type
        updatedAt
      }
      createdAt
      creator {
        id
        avatar
        createdAt
        email
        fullName
        type
        updatedAt
      }
      dueDate
      id
      name
      pointEstimate
      position
      status
      tags
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation actualizarTarea($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      assignee {
        id
        avatar
        createdAt
        email
        fullName
        type
        updatedAt
      }
      createdAt
      creator {
        id
        avatar
        createdAt
        email
        fullName
        type
        updatedAt
      }
      dueDate
      id
      name
      pointEstimate
      position
      status
      tags
    }
  }
`;
