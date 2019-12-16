import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at"
  };

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) this.getAllArticles();
  }

  componentDidMount() {
    this.getAllArticles();
  }

  getAllArticles = () => {
    api.fetchAllArticles(this.props.slug).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  handleChange = event => {
    this.setState({ sort_by: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api.fetchAllArticles(null, this.state.sort_by).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <select name="sort" onChange={this.handleChange}>
            <option value="created_at">Newest</option>
            <option value="comment_count">Most Comments</option>
            <option value="votes">Most Votes</option>
          </select>
          <button>SORT!</button>
        </form>

        {articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }
}

export default ArticleList;
