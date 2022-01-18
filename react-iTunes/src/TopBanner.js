import React from 'react';
import img_Menu from './image/TopBanner/menu.png';
import {FaHeart, FaSearch} from 'react-icons/fa';
import './TopBanner.scss';

function TopBanner({ onChange, searchWord }) {
  return (
  <div className="TopBanner_Wrapper">

    <div className="TopBanner_menu">
      <img className="TopBanner_menu_image" src={img_Menu} />
    </div>

    <div className="TopBanner_title">iTunes-Playground</div>

    <div className="TopBanner_search">
      <FaSearch className="TopBanner_search_icon"/>
      <input className="TopBanner_search_textbox" type="text" placeholder="검색"  onChange={onChange} value={searchWord}/>
    </div>

    <div className="TopBanner_heart"> 
      <FaHeart/>
    </div>
    
  </div>
  )
} 

export default TopBanner;