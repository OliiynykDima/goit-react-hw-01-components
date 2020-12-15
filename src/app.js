import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import css from './css/index.css';

import statisticalData from './data-bases/statistical-data.json';
import user from './data-bases/user.json';
import friends from './data-bases/friends.json';
import transactions from './data-bases/transactions.json';

import Profile from './components/profile/profile.js';
import Statistics from './components/statistics/statistics.js';
import FriendList from './components/friendList/friendList.js';
import TransactionHistory from './components/transactions/transactions.js';

class App extends Component{
render(){
  return (
  <Statistics title="Upload stats" stats={statisticalData} />
  );
}
}
class App2 extends Component{
  render(){
    return (
    <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    );
  }
  }
class App3 extends Component{
    render(){
      return (
      <FriendList friends={friends} />
      );
  }
}
class App4 extends Component{
  render(){
    return (
    <TransactionHistory items={transactions} />
    );
  }
  }
ReactDOM.render(React.createElement(App), document.getElementById('account'));
ReactDOM.render(React.createElement(App2), document.getElementById('account2'));
ReactDOM.render(React.createElement(App3), document.getElementById('account3'));
ReactDOM.render(React.createElement(App4), document.getElementById('account4'));