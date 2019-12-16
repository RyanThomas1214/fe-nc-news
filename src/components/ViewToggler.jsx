import React, { Component } from "react";

class ViewToggler extends Component {
  state = {
    isVisible: true
  };

  toggleVisible = event => {
    this.setState(currentState => {
      return { isVisible: !currentState.isVisible };
    });
  };

  render() {
    return (
      <section>
        <button onClick={this.toggleVisible}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
        {this.state.isVisible && this.props.children}
      </section>
    );
  }
}

export default ViewToggler;
