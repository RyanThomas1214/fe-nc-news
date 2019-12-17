import React from "react";
import Voter from "./Voter";

const CommentCard = ({
  votes,
  author,
  body,
  username,
  comment_id,
  deleteComment
}) => {
  const handleClick = event => {
    deleteComment(comment_id);
  };

  return (
    <article>
      <h4>{author}</h4>
      <p>{body}</p>
      <Voter votes={votes} />
      {username === author && <button onClick={handleClick}>Delete</button>}
      <br />
    </article>
  );
};

export default CommentCard;
