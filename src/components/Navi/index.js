/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './style.css';
import Sear from '../../searchIcon/searchIcon.png';
import {NavLink} from 'react-router-dom';

function Navi() {

    const[search,setSearch]= useState(false);

    const submitSearch =(e)=>{
      e.preventDefault();
      alert("Searching...");
    }
    const openSearch=()=>{
      setSearch(true);
    }
    const searchClass= search?'searchInput active':'searchInput';

    return (
       <div className="navi">
         <ul className="naviMenu">
             <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/about">About</NavLink></li>
             <li><NavLink to="/post">Posts</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
         </ul>
         <div className="search">
           <form onSubmit={submitSearch}>
           <input type="type" className={searchClass} placeholder="Search" />
           <img onClick={openSearch} className="searchicon" src={Sear} alt="Search icon"/> 
           </form>
         </div>
       </div> 
    )
}

export default Navi
