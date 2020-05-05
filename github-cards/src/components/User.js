import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="user-card">
        <img src={this.props.userData.avatar_url} alt="user avatar" />
        <div>
          <h2>{this.props.userData.name}</h2>
          <p>{this.props.userData.login}</p>
          <p>{this.props.userData.location}</p>
          <p>
            <a href={this.props.userData.html_url}>
              {this.props.userData.html_url}
            </a>
          </p>
          <p>Followers {this.props.userData.followers}</p>
          <p>Following {this.props.userData.following}</p>
          <p>{this.props.userData.bio}</p>
        </div>
      </div>
    );
  }
}

export default User;
