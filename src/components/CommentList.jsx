import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentCard from "./CommentCard";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
    successfulDeleteCount: 0
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
    api.fetchAllComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  deleteComment = comment_id => {
    api.removeComment(comment_id).then(() => {
      this.setState(prevState => ({
        successfulDeleteCount: prevState.successfulDeleteCount + 1
      }));
    });
  };

  render() {
    const { comments, isLoading } = this.state;
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
