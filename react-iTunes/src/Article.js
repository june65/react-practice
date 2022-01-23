import React from 'react';
import './Article.scss';

function Article({ article }) {
  return (
    <div className="Article_Wrapper">
      <div className="Article_Image_Wrapper"><img className='Article_Image' src={article.image}/></div>
      <div className="Article_Text_Wrapper">
      <div className="Article_Name">{article.name}</div>
      <div className="Article_Contents">{article.Contents}</div>
      </div>
    </div>
  );
}

export default Article;