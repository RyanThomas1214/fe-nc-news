import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import CommentCard from "./CommentCard";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    this.getAllComments();
  }

  componentDidUpdate(prevProps) {
    if (this.props.successfulPost !== prevProps.successfulPost)
      this.getAllComments();
  }

  getAllComments = () => {
    api.fetchAllComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main>
        {comments.map(comment => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </main>
    );
  }
}

export default CommentList;
