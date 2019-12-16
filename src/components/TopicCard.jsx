import React from "react";

const TopicCard = ({ slug, description }) => {
  return (
    <main>
      <h2>{slug}</h2>
      <p>{description}</p>
    </main>
  );
};

export default TopicCard;
