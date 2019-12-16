import React from "react";

const ArticleCard = ({ author, title, topic, votes, comment_count }) => {
  return (
    <article>
      <h4>{title}</h4>
      <p>Topic: {topic}</p>
      <p>User: {author}</p>
      <p>Votes: {votes}</p>
      <p>Comments: {comment_count}</p>
      <br />
    </article>
  );
};

export default ArticleCard;
