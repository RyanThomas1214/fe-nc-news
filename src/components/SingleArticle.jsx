import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentList from "./CommentList";
import { Link, Router } from "@reach/router";
import Voter from "./Voter";
import ErrDisplayer from "./ErrDisplayer";
import styled from "styled-components";

const StyledInput = styled.input``;

const StyledBox = styled.div`
  ${StyledInput}:focus & {
    border: 5px solid red;
  }
`;

const Button = styled.button`
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;

class SingleArticle extends Component {
  state = {
    article: {},
    comment: { username: "", body: "" },
    isLoading: true,
    successfulPost: {},
    err: "",
    isClicked: false
  };

  componentDidMount() {
    this.getSingleArticle();
  }

  getSingleArticle = () => {
    api
      .fetchSingleArticle(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg });
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isClicked: true });
    api
      .postComment(this.state.comment, this.props.article_id)
      .then(comment => {
        this.setState({
          successfulPost: comment,
          comment: { username: "", body: "" },
          isClicked: false
        });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg });
      });
  };

  handleChange = event => {
    this.setState({
      comment: { username: this.props.username, body: event.target.value }
    });
  };

  render() {
    const { article, isLoading, err, isClicked } = this.state;
    if (err) return <ErrDisplayer err={err} />;
    if (isLoading) return <Loader />;

    return (
      <main className="SingleArticle">
        <h2>{article.title}</h2>
        <h3>Written by: {article.author}</h3>
        <h5>{article.body}</h5>
        <Voter
          section="articles"
          section_id={article.article_id}
          votes={article.votes}
        />
        <form onSubmit={this.handleSubmit}>
          Comment:
          <StyledBox>
            <StyledInput
              size="30"
              type="text"
              value={this.state.comment.body}
              onChange={this.handleChange}
              required
            />
          </StyledBox>
          <Button disabled={isClicked}>Post Comment</Button>
        </form>

        <Link to={`/article/${article.article_id}/comments`}>
          <Button>See All Comments ({article.comment_count})</Button>
        </Link>

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
