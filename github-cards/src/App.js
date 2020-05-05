import React from "react";
import axios from "axios";

import "./App.css";

import GithubInfo from "./components/GithubInfo.js";

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getUser("codemannnnnn");
    this.getUserFollowers("codemannnnnn");
  }

  getUser = user => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(res => {
        this.setState({
          users: [...this.state.users, res.data]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getUserFollowers = user => {
    axios
      .get(`https://api.github.com/users/${user}/followers`)
      .then(res => {
        res.data.forEach(user => {
          this.getUser(user.login);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Github</h1>
        <GithubInfo users={this.state.users} />
      </div>
    );
  }
}

export default App;
