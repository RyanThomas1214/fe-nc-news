import React from "react";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import "./App.css";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage path="/" />
        <ArticleList path="/articles" />
        <ArticleList path="/articles/:slug" />
        <SingleArticle path="/article/:article_id" />
      </Router>
    </div>
  );
}

export default App;
