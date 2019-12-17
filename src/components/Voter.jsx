import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    newVotes: 0
  };

  handleClick = event => {
    const { name } = event.target;
    this.setState(currentState => ({
      newVotes: currentState.newVotes + +name
    }));
    api.updateVotes(this.props.section, this.props.section_id, +name);
  };

  render() {
    const { newVotes } = this.state;
    return (
      <div>
        <button onClick={this.handleClick} name="1" disabled={newVotes > 0}>
          ▲
        </button>
        {this.props.votes + newVotes}
        <button onClick={this.handleClick} name="-1" disabled={newVotes < 0}>
          ▼
        </button>
      </div>
    );
  }
}

export default Voter;
