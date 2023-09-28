import { useState } from "react";

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialValue || 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;

    const counterElement = React.createElement('div', null,
      React.createElement('p', null, 'Value: ', count),
      React.createElement('button', { onClick: this.handleIncrement }, '+ Increment'),
      React.createElement('button', { onClick: this.handleDecrement }, '- Decrement')
    );

    return counterElement;
  }
}

export default Counter;

