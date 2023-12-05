import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query ObtenerUsuarios {
    users {
      avatar
      createdAt
      email
      fullName
      id
      type
      updatedAt
    }
  }
`;

export const GET_PROFILE = gql`
  query ObtenerPerfil {
    profile {
      avatar
      createdAt
      email
      fullName
      id
      type
      updatedAt
    }
  }
`;

export const GET_TASKS = gql`
  query ObtenerTareas($input: FilterTaskInput!) {
    tasks(input: $input) {
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
