import React from 'react'
import "./Header.css"
import Icons from './Social Icons/Icons';
import InfoBox from '../Info Box/InfoBox';
import '../Font/euro_technic_extended_regular.ttf';
import Video from "../Animation Videos/Animation Bubbles.mp4"
import Logo from "../Images/logo.png"
function Header() {
    return (
        <div>

            <div className="header__wrapper">
                <header>
                    <div class="header">
                        <nav class="navigation">
                            <img src={Logo} />
                            <div class="navbar-right">
                                <a href="#">White Paper</a>
                                <a href="#">Protocol</a>
                                <a href="#">Fees</a>
                                <a href="#">Audit</a>
                                <a href="#">Sweepstakes</a>
                                <a href="#">Swap</a>
                                <a href="#">Features</a>
                                <a href="#">Toro Rounds</a>
                                <a href="#">BUY NOW</a>
                            </div>
                        </nav>

                        <div class="video-container">

                            <video id="video-bg" autoPlay={true} muted loop>
                                <source src={Video}>
                                </source>
                            </video>
                        </div>
                    </div>
                </header>
                <div className="logo">

                </div>

                <div className="header_icons">

                    <Icons />

                </div>
                <div>
                    <InfoBox />
                </div>

            </div >


        </div >
    )
}

export default Header
