import React from 'react';
import img_Menu from './image/TopBanner/menu.png';
import {FaHeart, FaSearch} from 'react-icons/fa';

function TopBanner({ onChange, searchWord }) {
  return (
  <div id="TopBanner_grid">

    <div id="menu">
      <img src={img_Menu} />
    </div>

    <div id="title">iTunes-Playground</div>

    <div id="search">
      <FaSearch/>
      <input type="text" placeholder="검색"  onChange={onChange} value={searchWord}/>
    </div>

    <div id="heart"> 
      <FaHeart/>
    </div>
    
  </div>
  )
} 

export default TopBanner;