import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  };
  componentDidMount() {
    this.getSingleArticle();
  }

  getSingleArticle = () => {
    api.fetchSingleArticle(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };

  render() {
    const { article, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main>
        <h2>{article.title}</h2>
        <h3>Written by: {article.author}</h3>
        <h5>{article.body}</h5>
        <p>
          Votes: {article.votes} <button>Upvote</button>
          <button>Downvote</button>
        </p>
        <p> Comments: {article.comment_count}</p>
      </main>
    );
  }
}

export default SingleArticle;
