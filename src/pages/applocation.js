import React, { useState, useEffect } from "react";
import StarSVG from '../asserts/svgs/star-1.svg';
import ArticalscreenImage from '../asserts/images/articalsscreenimage.png';
import mobileScreenImage from '../asserts/images/mobilescreenimage.png';
import brandingScreenImage from '../asserts/images/brandingcolorimage.png';
import UXScreenImage from '../asserts/images/figmascreenimage.png';
import CMDIcon from '../asserts/images/cmd-icon.jpg';
import '../styles/styles.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import MediaInfo from "../components/media";
import { Helmet } from "react-helmet";
import Popup from "../components/cmd";

const Application = () => {
    const IntroMessage = 'My passion lies in crafting engaging, accessible, and user-centric experiences that leave a lasting impact.';
    const [isOpen, setIsOpen] = useState(false); // CMD POPUP State

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <>
            <div>

                <Helmet>
                    <title>Nagendra-Yakkaladevara</title>
                    <meta property="og:title" content='Nagendra-Yakkaladevara' />
                    <meta property="og:description" content='My porfolio | Blog' />
                    <meta property="og:image" content='../src/asserts/images/LaningScreen.png' />
                    <meta property="og:url" content='https://nagendrayakkaladevara.netlify.app/' />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:title" content='Nagendra-Yakkaladevara' />
                    <meta name="twitter:description" content='My porfolio | Blog' />
                    <meta name="twitter:image" content='../src/asserts/images/LaningScreen.png' />
                    <meta name="twitter:card" content='../src/asserts/images/LaningScreen.png' />
                </Helmet>

                <div className="h-1/3 flex justify-center items-center fontFamily relative" style={{ height: "300px" }}>
                    <p className="text-3xl flex justify-center flex-wrap focus-in-contract-bck" style={{ color: "#99e8cd", fontWeight: "900", margin: "0px 30px" }}>HI.I&apos;m Nagendra.A Web Developer.</p>
                    <img src={StarSVG} alt="star" className="startposition1 bounce-top" />
                    <img src={StarSVG} alt="star" className="startposition2 bounce-top" />
                </div>


                <div className="flex justify-around" style={{ alignItems: 'center' }}>
                    <picture title="Support LGBTQ+ individuals and reject discrimination against them; all people are equal _ Nagendra">
                        <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f308/512.webp" type="image/webp" />
                        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f308/512.gif" alt="🌈" width="52" height="52" />
                        <p style={{ color: '#E1F0DA', fontSize: '8px' }}>LGBTQ+</p>
                    </picture>

                    <picture title="Please water plants _ Nagendra">
                        <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f331/512.webp" type="image/webp" />
                        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f331/512.gif" alt="🌱" width="52" height="52" />
                        {/* <p style={{ color: '#E1F0DA', fontSize: '8px' }}>Water Plant</p> */}
                    </picture>
                </div>

                <Popup isOpen={isOpen} togglePopup={togglePopup} />
                <p className="m-10 text-xs sm:text-xl flex justify-center flex-wrap" style={{ color: "#F0F3FF" }}>{IntroMessage}</p>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <p style={{ fontSize: '12px', color: 'white' }}>Check out my command proment - </p>
                    <img src={CMDIcon} alt="star" className="CMDIcon" onClick={togglePopup} title="Click to view command proment" />

                </div>
                <div className="flex flex-wrap justify-center">

                    <div className="topsectioncustom">
                        <Link to='/articlesAndresources'>
                            <div className="articalBlockCustom rounded-2xl p-3 m-4 overflow-hidden shadow-pop-br">
                                <p className="flex justify-end m-2">Articles & resources</p>
                                <img src={ArticalscreenImage} alt="" className="articalBlockImageCustom" />
                            </div>
                        </Link>
                        <Link to='/brandingvalues'>
                            <div className="brandingBlockCustom rounded-2xl p-3 m-4 overflow-hidden shadow-pop-br">
                                <p className="flex justify-end m-2">Branding values</p>
                                <div className="flex justify-center">
                                    <img src={brandingScreenImage} alt="" className="brandingBlockImageCustom " />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="mobileBlockCustom rounded-2xl p-3 m-4 overflow-hidden shadow-pop-br">
                        <Link to='/responsiveApplications'>
                            <p className="flex justify-end m-2">Responsive applications</p>
                            <img src={mobileScreenImage} alt="" className="mobileBlockImageCustom" />
                        </Link>

                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="UXBlockCustom rounded-2xl p-3 m-4 overflow-hidden shadow-pop-br">
                        <Link to='/psdtohtml'>
                            <p className="flex justify-end m-2" style={{ fontSize: "25px" }}>Wireframe to User Interface</p>
                            <div className="flex justify-center">
                                <img src={UXScreenImage} alt="" className="UXBlockImageCustom" />
                            </div>
                        </Link>
                    </div>
                </div>


                <MediaInfo />


            </div>
        </>
    )
}

export default Application;