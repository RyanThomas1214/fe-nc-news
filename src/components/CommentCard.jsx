import React from "react";
import Voter from "./Voter";
import styled from "styled-components";

const Button = styled.button`
  color: #7a2aeb;
  font-size: 1em;
  margin-bottom: 0.5em;
  padding: 0.25em;
  border: 2px solid #7a2aeb;
  border-radius: 3px;
  :hover {
    color: #dddddd;
    background-color: #7a2aeb;
    border: 2px solid #dddddd;
  }
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
    <article className="CommentCard">
      <h4>{author}</h4>
      <p>{body}</p>
      <Voter votes={votes} section="comments" section_id={comment_id} />
      {username === author && <Button onClick={handleClick}>Delete</Button>}
      <br />
    </article>
  );
};

export default CommentCard;
