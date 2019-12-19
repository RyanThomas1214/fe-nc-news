import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";
import styled from "styled-components";

const Button = styled.button`
  color: #7a2aeb;
  font-size: 0.9em;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border: 2px solid #7a2aeb;
  border-radius: 10px;
  :hover {
    color: #dddddd;
    background-color: #7a2aeb;
    border: 2px solid #dddddd;
  }
`;

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: "",
    isActive: { coding: false, football: false, cooking: false }
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

  toggleActive = event => {
    event.persist();
    this.setState({
      isActive: {
        [event.target.name]: true
      }
    });
  };

  render() {
    const { topics, isLoading, err, isActive } = this.state;
    if (err) return <ErrDisplayer err={err} />;
    if (isLoading) return <Loader />;
    return (
      <main className="Topics">
        {topics.map(topic => {
          return (
            <Link to={`/articles/${topic.slug}`} key={topic.slug}>
              <Button
                onClick={this.toggleActive}
                className={isActive[topic.slug] ? topic.slug : ""}
                name={topic.slug}
              >
                {topic.slug.toUpperCase()}
              </Button>
            </Link>
          );
        })}
      </main>
    );
  }
}

export default TopicList;
