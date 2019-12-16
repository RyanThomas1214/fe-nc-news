import React from "react";
import { Link } from "@reach/router";

const Homepage = () => {
  return (
    <main>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
    </main>
  );
};

export default Homepage;
