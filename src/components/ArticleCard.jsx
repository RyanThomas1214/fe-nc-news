import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

const ArticleCard = ({
  author,
  title,
  topic,
  votes,
  comment_count,
  article_id
}) => {
  return (
    <article>
      <Link to={`/article/${article_id}`}>
        <h3>{title}</h3>
      </Link>

      <p>Topic: {topic}</p>
      <p>User: {author}</p>
      <Voter votes={votes} />
      <p>Comments: {comment_count}</p>

      <br />
    </article>
  );
};

export default ArticleCard;
