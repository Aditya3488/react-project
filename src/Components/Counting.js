import React, { Component } from "react";

class Counting extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }
  reset() {
    this.setState((prevState) => ({
      count: prevState.count * 0
    }));
  }
  render() {
    return (
      <>
        <div>
          <p>count- {this.state.count}</p>
        </div>
        <div>
          <button onClick={() => this.increment()}>increment</button>
          <button onClick={() => this.decrement()}>decrement</button>

          <button onClick={() => this.reset()}>reset</button>
        </div>
      </>
    );
  }
}

export default Counting;
