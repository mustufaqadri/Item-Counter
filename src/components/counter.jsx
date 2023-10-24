import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  formatCount = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    const { value } = this.state;
    return (classes += value === 0 ? "warning" : "primary");
  };

  render() {
    return (
      <div>
        <h4>Counter #{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary"
          onClick={() => this.handleIncrement("t")}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
