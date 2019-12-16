import React from "react";
import Header from "./components/Header";
import "./App.css";
import Homepage from "./components/Homepage";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <ArticleList />
    </div>
  );
}

export default App;
