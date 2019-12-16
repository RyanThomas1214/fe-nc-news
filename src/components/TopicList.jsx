import React, { Component } from "react";
import TopicCard from "./TopicCard";
import * as api from "../utils/api";
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
          return <TopicCard key={topic.slug} {...topic} />;
        })}
      </main>
    );
  }
}

export default TopicList;
