import React from 'react';
import img_Menu from './image/TopHeader/menu.png';
import {FaHeart, FaSearch} from 'react-icons/fa';
import './TopHeader.scss';

function TopHeader({ onChange, searchWord }) {
  return (
    <div className="TopHeader_Wrapper">

      <div className="TopHeader_menu">
        <img className="TopHeader_menu_image" src={img_Menu} />
      </div>

      <div className="TopHeader_title">iTunes-Playground</div>

      <div className="TopHeader_search">
        <FaSearch className="TopHeader_search_icon"/>
        <input className="TopHeader_search_textbox" type="text" placeholder="검색"  onChange={onChange} value={searchWord}/>
      </div>

      <div className="TopHeader_heart"> 
        <FaHeart/>
      </div>
      
    </div>
  )
} 

export default TopHeader;