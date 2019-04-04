const { gql } = require("apollo-server-express");

module.exports = gql`
  type Student {
    _id: ID
    studentId: String
    firstName: String
    lastName: String
    email: String
    password: String
    createdDate: String
  }

  type Admin {
    _id: ID
    professorId: String
    firstName: String
    lastName: String
    email: String
    password: String
    createdDate: String
    studentId: [Student]
  }

  # type Section {
  #   _id: ID
  #   sectionName: String
  #   createdDate: String
  # }

  type Token {
    token: String!
  }

  type Query {
    getStudents: [Student!]
  }

  type Mutation {
    registerStudent(
      studentId: String
      firstName: String
      lastName: String
      email: String
      password: String
    ): Token
    signinStudent(studentId: String, password: String): Token
  }
`;
