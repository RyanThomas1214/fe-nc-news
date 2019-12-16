import React from "react";
import { Link } from "@reach/router";
import TopicList from "./TopicList";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h3>Some form of logo</h3>
      </Link>

      <h1>Welcome to NC-News</h1>
      <TopicList />
    </div>
  );
};

export default Header;
