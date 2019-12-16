import React from "react";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import "./App.css";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage path="/" />
        <ArticleList path="/articles" />
        <ArticleList path="/articles/:slug" />
      </Router>
    </div>
  );
}

export default App;
