/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';
import Logo from 'C:/Users/Admin/my-app/src/pictures/logo.jpg';
import Fb from 'C:/Users/Admin/my-app/src/pictures/fb.png';
import Yt from 'C:/Users/Admin/my-app/src/pictures/youtube.png';
import Ig from 'C:/Users/Admin/my-app/src/pictures/ig.png';
import Pt from 'C:/Users/Admin/my-app/src/pictures/pin.png';
import Tt from 'C:/Users/Admin/my-app/src/pictures/twit.png';
import Tw from 'C:/Users/Admin/my-app/src/pictures/twitch.png';

function Header(_props) {
    return (
        <header className="header">
            <img src={Logo} alt="A logo" />
            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
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
