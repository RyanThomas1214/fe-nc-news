import React from "react";

const CommentCard = ({ votes, created_at, author, body }) => {
  return (
    <article>
      <h4>{author}</h4>
      <p>{body}</p>
      <p>
        Votes: {votes} <button>Upvote</button>
        <button>Downvote</button>
      </p>
      <br />
    </article>
  );
};

export default CommentCard;
