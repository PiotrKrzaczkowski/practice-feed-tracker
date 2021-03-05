import React, { useState, useEffect } from "react";
import "./App.css";
import Article from "./components/Article";

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("webdev");

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`).then((res) => {
      if (res.status !== 200) {
        console.log("Error");
        return;
      }

      res.json().then((data) => {
        if (data !== null) {
          setArticles(data.data.children);
        }
      });
    });
  }, [subreddit]);

  console.log(articles);
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          className="input"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
          placeholder="REDDIT..."
        />
      </header>
      <div className="article">
        {articles != null
          ? articles.map((article, index) => {
              return <Article key={index} article={article.data} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default App;
