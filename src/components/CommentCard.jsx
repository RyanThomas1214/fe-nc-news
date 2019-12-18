import React from "react";
import Voter from "./Voter";
import styled from "styled-components";

const Button = styled.button`
  color: red;
  font-size: 1em;
  margin-bottom: 0.5em;
  padding: 0.25em;
  border: 2px solid red;
  border-radius: 3px;
`;

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
      <Voter votes={votes} section="comments" section_id={comment_id} />
      {username === author && <Button onClick={handleClick}>Delete</Button>}
      <br />
    </article>
  );
};

export default CommentCard;
