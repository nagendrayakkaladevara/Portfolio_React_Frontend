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
                            
                                <a href="https://github.com/nagendrayakkaladevara" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
                                <a href="https://www.linkedin.com/in/sai-nagendra-yakkaladevara-67317419a/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
                                <a href="https://twitter.com/nagendra_s_y" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
                                <a href="https://www.instagram.com/nagendra_yakkaladevara/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
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