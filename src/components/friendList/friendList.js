import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FriendList extends Component {
  render() {

    const obj = this.props.friends.map((friend, i) => {
      if(friend.isOnline === false){
        friend.isOnline = 'red';
      }
      else{
        friend.isOnline = 'green';
      }
      return (
        <li class="item">
        <span class="status">{friend.isOnline}</span>
        <img class="avatar" src={friend.avatar} alt="" width="48" />
        <p class="name">{friend.name}</p>
      </li>
      );
    });
    return (
      <ul class="friend-list">
        {obj}
      </ul>
    );
  }
}

export default FriendList;