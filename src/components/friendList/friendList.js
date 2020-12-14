import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import css from './friendList.css';
class FriendList extends Component {
  render() {

    const obj = this.props.friends.map((friend, i) => {
      let idName = '';
      if (friend.isOnline === true) {
        idName += 'green';
      }
      else{
        idName += 'red';
      }
      return (

        <li class="item">
        <span class="status" id={idName}></span>
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