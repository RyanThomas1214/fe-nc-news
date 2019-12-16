import React from "react";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import "./App.css";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/TopicList";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage path="/" />
        <ArticleList path="/articles" />
        <TopicList path="/topics" />
      </Router>
    </div>
  );
}

export default App;
