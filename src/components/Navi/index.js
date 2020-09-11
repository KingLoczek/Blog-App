/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './style.css';
import Sear from '../../searchIcon/searchIcon.png';

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
             <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Posts</a></li>
             <li><a href="#">Contact</a></li>
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
