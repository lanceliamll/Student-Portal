import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_STUDENTS } from "../queries/index";

const App = () => (
  <div>
    <p>Students</p>
    <Query query={GET_ALL_STUDENTS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading....</div>;
        if (error) return <div>Something's wrong. Please try again!</div>;
        console.log(data);
        return <p>Students</p>;
      }}
    </Query>
  </div>
);

export default App;
