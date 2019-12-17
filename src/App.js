import React, { Component } from "react";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import "./App.css";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import ErrDisplayer from "./components/ErrDisplayer";

class App extends Component {
  state = {
    username: "jessjelly"
  };
  render() {
    return (
      <div className="App">
        <Header username={this.state.username} />
        <Router>
          <Homepage path="/" />
          <ArticleList path="/articles" />
          <ArticleList path="/articles/:slug" />
          <SingleArticle
            path="/article/:article_id/*"
            username={this.state.username}
          />
          <ErrDisplayer default />
        </Router>
      </div>
    );
  }
}

export default App;
