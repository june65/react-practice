import React from 'react';
import Article from './Article';

function MiddlePart() {
    const Articles = [
      {
        id: 1,
        image:'./image/Middlepart/2577184451E8D75605.jpeg',
        name: 'velopert',
        Contents: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        image:'./image/Middlepart/20200129221450_frczspke.jpg',
        name: 'tester',
        Contents: 'tester@example.com'
      },
      {
        id: 3,
        image:'./image/Middlepart/falcon-9-rocket-4k-high-definition-wallpaper-preview.jpg',
        name: 'liz',
        Contents: 'liz@example.com'
      }
    ];
  return (

    <div>
      <div class="First_Subtitle">
        Enjoy your Music on iTunes
      </div>
      <div class="Second_Subtitle">
        You can easily quickly search all the songs provided by Apple Music on this site 
        <br/>
        Also you can come back to listen to the song you want. 
      </div>
      <div class="Articles">
        {Articles.map(article => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>

  )
}

export default MiddlePart;