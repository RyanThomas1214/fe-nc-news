import React from "react";
import { Link } from "@reach/router";
import TopicList from "./TopicList";

const Header = props => {
  return (
    <div>
      <Link to="/">
        <h3>Some form of logo/Back to all articles</h3>
      </Link>

      <h1>Welcome to NC-News {props.username}</h1>
      <TopicList />
    </div>
  );
};

export default Header;
