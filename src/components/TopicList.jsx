import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import Loader from "./Loader";

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  componentDidMount() {
    this.getAllTopics();
  }

  getAllTopics = () => {
    api.fetchAllTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  };

  render() {
    const { topics, isLoading } = this.state;
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
