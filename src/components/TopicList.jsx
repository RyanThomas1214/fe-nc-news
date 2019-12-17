import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";

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
      <main>
        {topics.map(topic => {
          return (
            <Link to={`/articles/${topic.slug}`} key={topic.slug}>
              <button>{topic.slug}</button>
            </Link>
          );
        })}
      </main>
    );
  }
}

export default TopicList;
