import React from "react";

import User from "./User.js";

class GithubInfo extends React.Component {
  render() {
    return (
      <div>
        <h2>Profiles</h2>
        {this.props.users.map(userData => {
          return <User key={userData.id} userData={userData} />;
        })}
      </div>
    );
  }
}

export default GithubInfo;
