import React, { Component } from "react";
import { loadUsers } from "./store/users";
import { connect } from "react-redux";

class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
    console.log(this.props.users);
  }

  render() {
    return (
      <ul>
        {this.props.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.entities.users,
});
const mapDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(loadUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
