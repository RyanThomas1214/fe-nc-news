import React from "react";
import NavBar from "./NavBar";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h3>Some form of logo</h3>
      </Link>

      <h1>Welcome to NC-News</h1>
      <NavBar />
    </div>
  );
};

export default Header;
