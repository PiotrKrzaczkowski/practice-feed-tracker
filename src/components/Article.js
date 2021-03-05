import React from "react";

const Article = ({ article }) => {
  return (
    <article>
      <a href={"https://reddit.com" + article.permalink}>
        <h3>{article.title}</h3>
      </a>
    </article>
  );
};

export default Article;
