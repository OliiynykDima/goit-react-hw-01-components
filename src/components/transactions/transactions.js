import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import css from './transactions.css';
class TransactionHistory extends Component {
  render() {

    const obj = this.props.items.map((item, i) => {
      return (
        <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
      );
    });
    return (

  <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {obj}
  </tbody>
</table>

    );
  }
}

export default TransactionHistory;