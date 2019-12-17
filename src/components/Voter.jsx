import React, { Component } from "react";

class Voter extends Component {
  render() {
    return (
      <div>
        <button>▲</button>
        {this.props.votes}
        <button>▼</button>
      </div>
    );
  }
}

export default Voter;
