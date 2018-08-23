import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <h3>We have {this.props.userCount} awesome Users!</h3>
        <ul>
          {this.props.users.map(user => {
            return (
              <li key={user.username}>{user.username} - {user.hometown}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
