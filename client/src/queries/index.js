import { gql } from "apollo-boost";

export const GET_ALL_STUDENTS = gql`
  {
    getStudents {
      studentId
      firstName
      lastName
      email
    }
  }
`;
