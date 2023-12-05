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
