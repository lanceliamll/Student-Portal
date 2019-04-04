import { gql } from "apollo-boost";

/*  STUDENT QUERIES */
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

/* STUDENT MUTATIONS */
export const SIGNUP_STUDENT = gql`
  mutation(
    $studentId: String
    $firstName: String
    $lastName: String
    $email: String
    $password: String
  ) {
    registerStudent(
      studentId: $studentId
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
    }
  }
`;

export const SIGNIN_STUDENT = gql`
  mutation($studentId: String!, $password: String!) {
    signinStudent(studentId: $studentId, password: $password) {
      token
    }
  }
`;
