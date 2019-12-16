import React from "react";

const ArticleCard = ({
  author,
  title,
  topic,
  created_at,
  votes,
  comment_count
}) => {
  return (
    <article>
      <h4>{title}</h4>
    </article>
  );
};

export default ArticleCard;
