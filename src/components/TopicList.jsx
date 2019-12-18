import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";
import styled from "styled-components";

const Button = styled.button`
  color: red;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: ""
  };
  componentDidMount() {
    this.getAllTopics();
  }

  getAllTopics = () => {
    api
      .fetchAllTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg });
      });
  };

  render() {
    const { topics, isLoading, err } = this.state;
    if (err) return <ErrDisplayer err={err} />;
    if (isLoading) return <Loader />;
    return (
      <main className="Topics">
        {topics.map(topic => {
          return (
            <Link to={`/articles/${topic.slug}`} key={topic.slug}>
              <Button>{topic.slug}</Button>
            </Link>
          );
        })}
      </main>
    );
  }
}

export default TopicList;
