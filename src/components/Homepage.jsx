import React from "react";
import { Link } from "@reach/router";

const Homepage = () => {
  return (
    <main>
      <Link to="/articles">
        <h2>Articles</h2>
      </Link>
      <Link to="/topics">
        <h2>Topics</h2>
      </Link>
    </main>
  );
};

export default Homepage;
