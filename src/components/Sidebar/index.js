import React from 'react';
import Card from '../UI/Card';
import "./style.css";
import Fb from '../../pictures/fb.png';
import Yt from '../../pictures/youtube.png';
import Ig from '../../pictures/ig.png';
import Pt from '../../pictures/pin.png';
import Tt from '../../pictures/twit.png';
import Tw from '../../pictures/twitch.png';


function Sidebar() {
    return (
        <div className="sidebarContainer">
            <Card>
                <div className="cardHeader">
                    <span>About Me</span>
                </div>
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Social Media</span>
                    <div className="socialmedia"> 
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
                </div>
            </Card>
        </div>
    )
}

export default Sidebar
