import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div style={{ height: "200px", marginTop: "20px", padding: "20px", background: "#294B29" }}>
                    <div className='footetSection flex justify-around flex-wrap'>
                        <p><Link to={'/contacts'} >Contact</Link></p>
                        <p><Link to={'/about#section-Technologies'} >Technologies</Link></p>
                        {/* <p><a>Resume</a></p> */}
                        <p><Link to={'/about#section-about'}>Experience</Link></p>
                        <p><Link to={'/projects#section-projects'}>Personal Projects</Link></p>
                        <p><Link to={'/about#section-about'}>Education</Link></p>
                        <p><Link to={'/Blog'}>Blog</Link></p>
                        <p><Link to={'/about#section-Hobbies'}>Hobbies</Link></p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;