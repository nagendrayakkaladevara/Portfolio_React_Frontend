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
import { Dialog } from "primereact/dialog";
import CMDImage from '../asserts/images/Windows_Terminal_logo.png';
import MACImage from '../asserts/images/maccmd.png';
import { Button } from "primereact/button";
import Terminal from "../components/terminal";

const Application = () => {
    // const IntroMessage = 'My passion lies in crafting engaging, accessible, and user-centric experiences that leave a lasting impact.';
    // const IntroMessage = '2.5 years of professional experience as a Frontend Engineer, I have honed my skills in both front-end and back-end development. I have a proven track record of leading cross-functional teams to deliver high-quality software solutions.'

    const IntroMessage = (
        <>
            2.5 years of professional experience as a Frontend Engineer, I have honed my skills in both <span className="highlight text-xs sm:text-xl">front-end</span> and <span className="highlight text-xs sm:text-xl">back-end</span> development. I have a proven track record of leading
            cross-functional teams to deliver high-quality software solutions.
        </>
    );

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


              

                <Popup isOpen={isOpen} togglePopup={togglePopup} />
                <p className="m-10 text-xs sm:text-xl  justify-center items-center gap-1 flex-wrap text-justify" style={{ color: "#F0F3FF" }}>{IntroMessage}</p>


                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button className="button-8" role="button" >

                        <img src={CMDIcon} alt="star" className="CMDIcon" onClick={togglePopup} title="Click to view command proment" />

                    </button>
                </div>

                <div className="flex flex-wrap justify-center">

                    <div className="topsectioncustom">
                        <Link to='/articlesAndresources'>
                            <div className="articalBlockCustom rounded-2xl p-3 m-4 overflow-hidden shadow-pop-br">
                                <p className="flex justify-end m-2">Articles and resources I follow.</p>
                                <img src={ArticalscreenImage} alt="" className="articalBlockImageCustom" />
                            </div>
                        </Link>
                        <Link to='/brandingvalues'>
                            <div className="brandingBlockCustom rounded-2xl p-3 m-4 overflow-hidden shadow-pop-br">
                                <p className="flex justify-end m-2">Core priorities I follow for branding values.</p>
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
                            <p className="flex justify-end m-2" >Wireframe to User Interface Development.</p>
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