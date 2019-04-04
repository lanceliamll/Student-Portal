import React from "react";
import { Mutation } from "react-apollo";
import { SIGNIN_STUDENT } from "../../queries";
import Error from "../Error/Error";

const initialState = {
  studentId: "",
  password: ""
};

export default class Signin extends React.Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  validateForm = () => {
    const { studentId, password } = this.state;
    const isInvalid = !studentId || !password;
    return isInvalid;
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, signinStudent) => {
    event.preventDefault();
    signinStudent().then(({ data }) => {
      console.log(data);
      localStorage.setItem("token", data.signinStudent.token);
      this.clearState();
    });
  };

  render() {
    const { studentId, password } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <div>
          <Mutation
            mutation={SIGNIN_STUDENT}
            variables={{
              studentId,
              password
            }}
          >
            {(signinStudent, { data, loading, error }) => {
              return (
                <form
                  onSubmit={event => this.handleSubmit(event, signinStudent)}
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
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <input
                    type="submit"
                    disabled={loading || this.validateForm()}
                    value="Login"
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
