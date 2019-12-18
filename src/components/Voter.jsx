import React, { Component } from "react";
import * as api from "../utils/api";
import styled from "styled-components";

const Button = styled.button`
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;

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
        <Button onClick={this.handleClick} name="1" disabled={newVotes > 0}>
          ▲
        </Button>
        {this.props.votes + newVotes}
        <Button onClick={this.handleClick} name="-1" disabled={newVotes < 0}>
          ▼
        </Button>
      </div>
    );
  }
}

export default Voter;
