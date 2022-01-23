import React from 'react';

function Article({ article }) {
  return (
    <div>
      <span>{article.id}</span>
      <img src={article.image}/>
      <span>({article.Contents})</span>
      <span>{article.name}</span>
    </div>
  );
}

export default Article;