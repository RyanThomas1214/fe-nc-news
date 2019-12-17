import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentList from "./CommentList";
import { Link, Router } from "@reach/router";
import Voter from "./Voter";

class SingleArticle extends Component {
  state = {
    article: {},
    comment: { username: "", body: "" },
    isLoading: true,
    successfulPost: {}
  };

  componentDidMount() {
    this.getSingleArticle();
  }

  getSingleArticle = () => {
    api.fetchSingleArticle(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    api.postComment(this.state.comment, this.props.article_id).then(comment => {
      this.setState({
        successfulPost: comment,
        comment: { username: "", body: "" }
      });
    });
  };

  handleChange = event => {
    this.setState({
      comment: { username: this.props.username, body: event.target.value }
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
        <Voter
          section="articles"
          section_id={article.article_id}
          votes={article.votes}
        />

        <Link to={`/article/${article.article_id}/comments`}>
          <p> Comments: {article.comment_count}</p>
        </Link>
        <form onSubmit={this.handleSubmit}>
          Comment:
          <input
            type="text"
            value={this.state.comment.body}
            onChange={this.handleChange}
            required
          />
          <button>Post Comment</button>
        </form>
        <Router>
          <CommentList
            username={this.props.username}
            path="comments"
            successfulPost={this.state.successfulPost}
          />
        </Router>
      </main>
    );
  }
}

export default SingleArticle;
