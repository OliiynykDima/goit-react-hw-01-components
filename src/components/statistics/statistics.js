import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Statistics extends Component {
  render() {

    const obj = this.props.stats.map((stat, i) => {
      return (
        <li class="item">
        <span class="label">{stat.label}</span>
        <span class="percentage">{stat.percentage}</span>
      </li>
      );
    });
    return (
      <section class="statistics">
          <h2 class="title">{this.props.title}</h2>

          <ul class="stat-list">
            {obj}
          </ul>
      </section>
    );
  }
}

export default Statistics;