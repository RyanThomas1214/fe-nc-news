import React from "react";
import * as api from "../utils/api";

const CommentCard = ({ votes, author, body, comment_id, username }) => {
  const handleClick = event => {
    api.removeComment(comment_id);
  };

  return (
    <article>
      <h4>{author}</h4>
      <p>{body}</p>
      <p>
        Votes: {votes} <button>Upvote</button>
        <button>Downvote</button>
      </p>
      {username === author && <button onClick={handleClick}>Delete</button>}
      <br />
    </article>
  );
};

export default CommentCard;
