import React from "react";
import { Mutation } from "react-apollo";
import { SIGNUP_STUDENT } from "../../queries";
import Error from "../Error/Error";

const initialState = {
  studentId: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

export default class Signup extends React.Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  validateForm = () => {
    const {
      studentId,
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation
    } = this.state;
    const isInvalid =
      !studentId ||
      !firstName ||
      !lastName ||
      !email ||
      password !== passwordConfirmation;
    return isInvalid;
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, registerStudent) => {
    event.preventDefault();
    registerStudent().then(({ data }) => {
      console.log(data);
      localStorage.setItem("token", data.registerStudent.token);
      this.clearState();
    });
  };

  render() {
    const {
      studentId,
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation
    } = this.state;
    return (
      <div>
        <h1>Signup Form</h1>
        <div>
          <Mutation
            mutation={SIGNUP_STUDENT}
            variables={{
              studentId,
              firstName,
              lastName,
              email,
              password
            }}
          >
            {(registerStudent, { data, loading, error }) => {
              return (
                <form
                  onSubmit={event => this.handleSubmit(event, registerStudent)}
                >
                  <div>
                    <input
                      type="text"
                      name="studentId"
                      placeholder="Student ID"
                      value={studentId}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="passwordConfirmation"
                      placeholder="Confirm Password"
                      value={passwordConfirmation}
                      onChange={this.handleChange}
                    />
                  </div>
                  <input
                    type="submit"
                    disabled={loading || this.validateForm()}
                    value="Sign Up"
                  />
                  {error && <Error error={error} />}
                </form>
              );
            }}
          </Mutation>
        </div>
      </div>
    );
  }
}
