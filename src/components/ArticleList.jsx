import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
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

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main>
        {articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }
}

export default ArticleList;
