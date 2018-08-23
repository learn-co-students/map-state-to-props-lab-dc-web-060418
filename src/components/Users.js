import React, { Component } from 'react';
import { connect } from "react-redux";

class Users extends Component {

  render() {
    const {users, userCount} = this.props
    return (
      <div>
        {userCount}
        <ul>
          {users.map(user=><li>{user.username} - {user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (reduxState) =>{
  return {
    users: reduxState.users,
    userCount: reduxState.users.length
  }
}

export default connect(mapStateToProps)(Users)
