import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import GitHubImage from '../asserts/images/githubicon.png';
import LinkedInImage from '../asserts/images/linkedinicon.png';
import TwitterImage from '../asserts/images/Twittericon.png';
import InstagramImage from '../asserts/images/Instagram_icon.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div style={{ height: "200px", marginTop: "20px", padding: "20px", background: "#294B29" }}>
                    {/* <div className='footetSection flex justify-around flex-wrap'>
                        
                    </div> */}
                    {/* <div class="grid grid-cols-6 gap-4">

                        <div class="col-start-1 col-end-3 ">

                        </div>
                        <div class="col-end-7 col-span-2 ">

                        </div>

                    </div> */}

                    <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 flex justify-end flex-col items-end">
                            <div style={{ color: 'rgb(153, 232, 205)', fontSize:"10px" }}>
                                <p><Link to={'/contacts'} >Contact</Link></p>
                                <p><Link to={'/about#section-Technologies'} >Technologies</Link></p>
                                <p><Link to={'/about#section-about'}>Experience</Link></p>
                                <p><Link to={'/projects#section-projects'}>Personal Projects</Link></p>
                                <p><Link to={'/about#section-about'}>Education</Link></p>
                                <p><Link to={'/Blog'}>Blog</Link></p>
                                <p><Link to={'/about#section-Hobbies'}>Hobbies</Link></p>
                            </div>

                        </div>
                        <div class="col-span-4 ">
                            <div className="flex justify-center gap-5">
                                <a href="https://github.com/nagendrayakkaladevara" target="_blank"><img src={GitHubImage} style={{ width: "30px" }} /></a>
                                <a href="https://www.linkedin.com/in/sai-nagendra-yakkaladevara-67317419a/" target="_blank"><img src={LinkedInImage} style={{ width: "30px" }} /></a>
                                <a href="https://twitter.com/nagendra_s_y" target="_blank"> <img src={TwitterImage} style={{ width: "30px" }} /></a>
                                <a href="https://www.instagram.com/nagendra_yakkaladevara/" target="_blank"><img src={InstagramImage} style={{ width: "30px" }} /></a>
                            </div>
                        </div>
                        <div class="row-span-2 col-span-2">
                            {/* <div className="flex justify-around" style={{ alignItems: 'center' }}>
                                <picture title="Support LGBTQ+ individuals and reject discrimination against them; all people are equal _ Nagendra">
                                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f308/512.webp" type="image/webp" />
                                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f308/512.gif" alt="🌈" width="52" height="52" />
                                    <p style={{ color: '#E1F0DA', fontSize: '8px' }}>LGBTQ+</p>
                                </picture>

                                <picture title="Please water plants _ Nagendra">
                                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f331/512.webp" type="image/webp" />
                                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f331/512.gif" alt="🌱" width="52" height="52" />

                                </picture>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;