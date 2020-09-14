/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';
import Logo from '../../pictures/logo.jpg';
import Fb from '../../pictures/fb.png';
import Yt from '../../pictures/youtube.png';
import Ig from '../../pictures/ig.png';
import Pt from '../../pictures/pin.png';
import Tt from '../../pictures/twit.png';
import Tw from '../../pictures/twitch.png';
import { NavLink } from 'react-router-dom';

function Header(_props) {
    return (
        <header className="header">
            <img src={Logo} alt="A logo" />
            <nav className="headerMenu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact </NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            <div>
                <nav>
                    <a href="https://www.facebook.com/profile.php?id=100011443804211">
                        <img src={Fb} alt="FB icon" className="foto" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCj9iMyvC2wc2UCLTyfZ3Zig?view_as=subscriber">
                        <img src={Yt} alt="YT icon" className="foto" />
                    </a>
                    <a href="https://www.instagram.com/konrad_zarzecki/">
                        <img src={Ig} alt="IG icon" className="foto" />
                    </a>
                    <a href="https://pl.pinterest.com/konradzarzecki72/boards/">
                        <img src={Pt} alt="PT icon" className="foto" />
                    </a>
                    <a href="https://twitter.com/KingLoczek">
                        <img src={Tt} alt="Tt icon" className="foto" />
                    </a>
                    <a href="https://www.twitch.tv/king_loczek">
                        <img src={Tw} alt="Tw icon" className="foto" />
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
