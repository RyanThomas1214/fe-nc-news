import React from "react";

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
