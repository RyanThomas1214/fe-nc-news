import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";
import * as api from "../utils/api";
import styled from "styled-components";

const Button = styled.button`
  color: #7a2aeb;
  font-size: 1em;
  margin-bottom: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid #7a2aeb;
  height: 29px;
  border-radius: 10px;
  :hover {
    color: #dddddd;
    background-color: #7a2aeb;
    border: 2px solid #dddddd;
  }
`;

const Select = styled.select`
  font-size: 1em;
  margin-bottom: 0.5em;
  margin-right: 1px;
  padding: 0.25em 1em;
  border: 2px solid #7a2aeb;
  border-radius: 10px;
`;

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    err: ""
  };

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) this.getAllArticles();
  }

  componentDidMount() {
    this.getAllArticles();
  }

  getAllArticles = () => {
    api
      .fetchAllArticles(this.props.slug)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg });
      });
  };

  handleChange = event => {
    this.setState({ sort_by: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .fetchAllArticles(null, this.state.sort_by)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg });
      });
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (err) return <ErrDisplayer err={err} />;
    if (isLoading) return <Loader />;

    return (
      <main className="ArticleList">
        <form onSubmit={this.handleSubmit} className="Sort">
          <Select name="sort" onChange={this.handleChange}>
            <option value="created_at">Newest</option>
            <option value="comment_count">Most Comments</option>
            <option value="votes">Most Votes</option>
          </Select>
          <Button>SORT</Button>
        </form>
        {articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }
}

export default ArticleList;
