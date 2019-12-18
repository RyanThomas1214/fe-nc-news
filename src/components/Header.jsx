import React from "react";
import { Link } from "@reach/router";
import TopicList from "./TopicList";
import styled from "styled-components";

const Button = styled.button`
  color: #7a2aeb;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #7a2aeb;
  border-radius: 3px;
`;

const Header = props => {
  return (
    <div className="Header">
      <Link to="/">
        <Button>Some form of logo/Back to all articles</Button>
      </Link>

      <h1>Welcome to NC-News {props.username}</h1>
      <TopicList />
    </div>
  );
};

export default Header;
