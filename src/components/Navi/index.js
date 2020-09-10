/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';

function Navi() {
    return (
       <div className="navi">
         <ul className="naviMenu">
             <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Posts</a></li>
             <li><a href="#">Contact</a></li>
         </ul>
       </div> 
    )
}

export default Navi
