import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component {
  render() {
    return(

        <div class="profile">
        <div class="description">
          <img
            src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
            alt="user avatar"
            class="avatar"
          />
          <p class="name">{this.props.name}</p>
          <p class="tag">{this.props.tag}</p>
          <p class="location">{this.props.location}</p>
        </div>

        <ul class="stats">
          <li>
            <span class="label">Followers:</span>
            <span class="quantity"> {this.props.stats.followers}</span>
          </li>
          <li>
            <span class="label">Views:</span>
            <span class="quantity"> {this.props.stats.views}</span>
          </li>
          <li>
            <span class="label">Likes:</span>
            <span class="quantity"> {this.props.stats.likes}</span>
          </li>
        </ul>
      </div>

    )
    }
}

export default Profile;
