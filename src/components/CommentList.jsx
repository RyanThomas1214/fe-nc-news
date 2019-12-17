import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentCard from "./CommentCard";
import ErrDisplayer from "./ErrDisplayer";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
    successfulDeleteCount: 0,
    err: ""
  };

  componentDidMount() {
    this.getAllComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.successfulPost !== prevProps.successfulPost)
      this.getAllComments();
    else if (
      this.state.successfulDeleteCount !== prevState.successfulDeleteCount
    )
      this.getAllComments();
  }

  getAllComments = () => {
    api
      .fetchAllComments(this.props.article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg });
      });
  };

  deleteComment = comment_id => {
    api
      .removeComment(comment_id)
      .then(() => {
        this.setState(prevState => ({
          successfulDeleteCount: prevState.successfulDeleteCount + 1
        }));
      })
      .catch(err => {
        this.setState({ err: err.response.data.msg });
      });
  };

  render() {
    const { comments, isLoading, err } = this.state;
    if (err) return <ErrDisplayer err={err} />;
    if (isLoading) return <Loader />;

    return (
      <main>
        {comments.map(comment => {
          return (
            <CommentCard
              key={comment.comment_id}
              {...comment}
              username={this.props.username}
              deleteComment={this.deleteComment}
            />
          );
        })}
      </main>
    );
  }
}

export default CommentList;
