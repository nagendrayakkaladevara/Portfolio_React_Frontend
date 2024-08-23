import React, { useEffect } from "react";
import ProfilePicture from '../../asserts/images/profilepicture.jpg';
import ProdaptLogo from '../../asserts/images/prodaptlgoo.png';
import ReactIcon from '../../asserts/images/reacticon.png';
import NextjsIcon from '../../asserts/images/nextjsIcon.png';
import HtmlIcon from '../../asserts/images/htmlicon.png';
import CssIcon from '../../asserts/images/cssicon.png';
import JavaScriptIcon from '../../asserts/svgs/javascript.svg';
import JavaIcon from '../../asserts/images/javaicon.png';
import MySqlIcon from '../../asserts/images/MySQLicon.png';
import MongodbIcon from '../../asserts/svgs/mongodb.svg';
import ExpressJsIcon from '../../asserts/images/expressjsicon.png';
import VscodeIcon from '../../asserts/images/vscodeicon.png';
import SpringBootIcon from '../../asserts/images/springbooticon.png';
import IntiljIonc from '../../asserts/images/intellijicon.png';
import SVNIcon from '../../asserts/images/svnicon.png';
import GitHubIcon from '../../asserts/images/githubicon.png';
import SpotifyPlayTelugulist from "../../components/spotifyPlayTelugulist";
import SpotifyEmbed from "../../components/spotifyEmbed";
import Typescripticon from '../../asserts/images/typescript-icon.png';
import NodejsIcon from '../../asserts/images/Node.js_logo.png';
import TailwindCssIcon from '../../asserts/images/tailwindicon.png';
import MatrailUi from '../../asserts/images/material-ui-logo-thumbnail-removebg-preview.png';
import dasyiUI from '../../asserts/images/dasisyuiicon.png';
import PrimeReact from '../../asserts/images/primereact-logo.png';
import Bootstrap from '../../asserts/images/bootstrapicon.png';
import GitTea from '../../asserts/images/Gitea_Logo.png';
import GoogleIDX from '../../asserts/images/googleidx.png';
import AWSIcon from '../../asserts/images/awsicon-removebg-preview.png';
import NPMIcon from '../../asserts/images/Npm-logo.png'

import '../../styles/styles.css';

const StarIcon = ({ width = "16", height = "16", fill = "#FCDC2A" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 16 16" className='bi bi-star-fill'>
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
);

const StarIconEmpty = ({ width = "16", height = "16", fill = "#FCDC2A" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} className="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
    </svg>
);



const Rupee = ({ width = "16", height = "16", fill = "white" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} className="bi bi-currency-rupee" viewBox="0 0 16 16" style={{ display: "inline", marginTop: "-4px" }}>
        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
    </svg>
);

const About = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0); // Scrolls to the top when component mounts
    // }, []);
    const data = [
        {
            "icon": HtmlIcon,
            "title": "HTML 5"
        },
        {
            "icon": CssIcon,
            "title": "CSS 3"
        },
        {
            "icon": JavaScriptIcon,
            "title": "JavaScript"
        },
        {
            "icon": ReactIcon,
            "title": "React"
        },
        {
            "icon": Typescripticon,
            "title": "TypeScript"
        },
        {
            "icon": TailwindCssIcon,
            "title": "Tailwind CSS"
        },
        {
            "icon": MatrailUi,
            "title": "Material UI"
        },
        {
            "icon": dasyiUI,
            "title": "dasyi UI"
        }, ,
        {
            "icon": PrimeReact,
            "title": "PrimeReact"
        }, ,
        {
            "icon": Bootstrap,
            "title": "Bootstrap"
        },
        {
            "icon": NextjsIcon,
            "title": "NextJs"
        },
        {
            "icon": NodejsIcon,
            "title": "NodeJs"
        },
        {
            "icon": ExpressJsIcon,
            "title": "ExpressJs"
        }, {
            "icon": MongodbIcon,
            "title": "Mongodb"
        }, {
            "icon": AWSIcon,
            "title": "AWS"
        }, {
            "icon": NPMIcon,
            "title": "NPM Packages"
        }
    ]

    const IDEData = [

        {
            "icon": VscodeIcon,
            "title": "VS Code"
        },
        // {
        //     "icon": SpringBootIcon,
        //     "title": "Spring Tool Suite"
        // },
        // {
        //     "icon": IntiljIonc,
        //     "title": "intellij"
        // },
        {
            "icon": GoogleIDX,
            "title": "Google IDX"
        }
    ]

    const HobbiesData = [
        {
            "title": "Coding",
            "rating": 4,
            "unrated": 1
        },
        {
            "title": "Workout",
            "rating": 4,
            "unrated": 1
        },
        {
            "title": "Music",
            "rating": 3,
            "unrated": 2
        },
        {
            "title": "Cricket viewing",
            "rating": 3,
            "unrated": 2
        }, {
            "title": "Newscast watching",
            "rating": 3,
            "unrated": 2
        }, {
            "title": "Photography",
            "rating": 3,
            "unrated": 2
        },
        // {
        //     "title": "Reading Books",
        //     "rating": 2,
        //     "unrated": 3
        // }
    ]

    const VersionControls = [
        {
            "title": SVNIcon,
            "name": 'SVN',
        },
        {
            "title": GitHubIcon,
            "name": "Github",
        },
        {
            "title": GitTea,
            "name": "Gitea",
        }
    ]

    return (
        <>
            <p className='text-3xl font-bold sm:text-6xl flex justify-center m-10 p-10 ' style={{ color: "#BFD8AF" }}>I&apos;m Nagendra.</p>
            <div className='flex justify-around'>
                <div className='flex justify-around flex-row' style={{ width: "50%" }}>
                    <img src={ProfilePicture} alt='Profile picture' className='profilepicturecustom shadow-drop-bl' />
                </div>
                <div className='flex justify-around flex-col' style={{ width: "50%" }}>
                    <p className='flex justify-start items-center myIntoText ' style={{ color: "#BFD8AF" }}>I&apos;m a web developer working remotely from the City of Destiny, India.</p>

                </div>

            </div>
            <div className='introsectioncustom m-10 text-justify '>
                <p>I have an insatiable curiosity that drives me to constantly seek knowledge and growth. Whether it&apos;s staying ahead of industry trends, mastering new technologies, or exploring innovative solutions, what makes coding truly special is its power to bring ideas to life. It&apos;s a creative outlet where innovation knows no bounds. It&apos;s where I get to turn imagination into reality.</p>
                <br />
                <p>Over the past two years, I have immersed myself in the web development industry, eagerly embracing new technologies and methodologies. I pride myself on being the kind of person who upholds loyalty and honesty, values that contribute to fostering a healthy and positive environment within the organization.</p>
            </div>

            <div className='flex justify-evenly flex-wrap '>
                <section id="section-about">
                    <div className='m-5 p-5 workexperiencesection shadow-pop-brConstent' style={{ background: "#2d483f", borderRadius: "15px" }}>
                        <p className='workexprenceheading'>Corporate Work Experience</p>
                        <div className='flex items-center'>
                            <img src={ProdaptLogo} alt='prodapt logo' className='m-2 companylogo' />
                            <p className='companytitle'>Prodapt Solutions Private Limited.</p>
                        </div>
                        <div className='detailsSections'>
                            <p className='disignationname'>Associate Software Engineer</p>
                            <br />
                            <p>14/Mar/2022 - Till date </p>
                            <p>Responsibility : Web Developer</p>
                            <p>Tech Used : React,Java,Mysql,Microsoft Sharepoint.</p>
                            <p>No of Applications Developed: 04</p>
                        </div>
                    </div>
                </section>
                <section id="">
                    <div className='m-5 p-5 educationsection shadow-pop-brConstent' style={{ background: "#2d483f", borderRadius: "15px" }}>
                        <p className='workexprenceheading'>Education</p>
                        <p className='areatitle'>Graduation</p>
                        <p className='institute'>Gayatri Vidya Parishad(A) - Vizag</p>
                        <p className='year'>2017-2021</p>
                        <br />
                        <p className='areatitle'>Intermediate</p>
                        <p className='institute'>Sasi Junior College - Velivennu</p>
                        <p className='year'>2015-2017</p>
                        <br />
                        <p className='areatitle'>Secondary School Certificate (SSC)</p>
                        <p className='institute'>Bhashyam Public School - Vizag</p>
                        <p className='year'>2015</p>
                    </div>
                </section>
            </div>
            <section id="section-Technologies">
                <p className='TechnologiesHeading'>Technologies</p>
                <div className='flex gap-5 flex-wrap justify-evenly' style={{ padding: "0px 10px" }}>
                    {data.map((item, index) => (
                        <div key={index} className='flex gap-3 items-center techblur p-5'>
                            <p style={{ fontSize: "20px", color: 'white' }}>{item.title}</p>
                            <img src={item.icon} alt={`${item.title} icon`} style={{ width: '50px', height: "auto" }} />
                        </div>
                    ))}
                </div>
            </section>
            <p className='TechnologiesHeading'>IDE&apos;s</p>
            <div className='flex gap-5 flex-wrap justify-evenly'>
                {IDEData.map((item, index) => (
                    <div key={index} className='flex gap-3 items-center techblur p-5'>
                        <p style={{ fontSize: "20px", color: 'white' }}>{item.title}</p>
                        <img src={item.icon} alt={`${item.title} icon`} style={{ width: '50px', height: "auto" }} />
                    </div>
                ))}
            </div>
            <p className='TechnologiesHeading'>Version controls</p>
            <div className='flex gap-5 flex-wrap justify-evenly'>
                {VersionControls.map((item, index) => (
                    <div key={index} className='flex gap-3 items-center techblur p-5'>
                        <p style={{ fontSize: "20px", color: 'white' }}>{item.name}</p>
                        <img src={item.title} alt={`${item.title} icon`} style={{ width: '50px', height: "auto" }} />
                    </div>
                ))}
            </div>
            <section id="section-Hobbies">
                <p className='TechnologiesHeading'>Hobbies</p>
                <div className='flex justify-center'>
                    <table style={{ width: "80%" }}>
                        {HobbiesData.map(hobby => (
                            <tr key={hobby.title}>
                                <td><p className='hobbieName'>{hobby.title}</p></td>
                                <td><div className='flex'>
                                    {[...Array(hobby.rating)].map((_, index) => (
                                        <StarIcon key={index} />
                                    ))} {[...Array(hobby.unrated)].map((_, index) => (
                                        <StarIconEmpty key={index} />
                                    ))}
                                </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </section>

            <p className='TechnologiesHeading'>My Suggestions <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16" style={{ display: "inline", marginTop: "-5px", marginLeft: "5px" }}>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
            </svg></p>

            <div className='backcolor'>
                <h2 style={{ fontSize: '20px', fontWeight: "900", color: "#BFD8AF" }}>Books</h2>
                <p>The Forest of Enchantments</p>
                <p>The Palace of Illusions</p>
                <p>The Fault in Our Stars</p>
            </div>

            <div style={{ margin: "20px" }}>
                <SpotifyEmbed />
            </div>

            <div style={{ margin: "20px" }}>
                <SpotifyPlayTelugulist />
            </div>

            <div className='backcolor'>
                <h2 style={{ fontSize: '20px', fontWeight: "900", color: "#BFD8AF" }}><p>Work setup</p></h2>
                <a href='https://www.lenovo.com/in/en/p/accessories-and-software/monitors/home/67afkacbin?cid=in:sem:9as30f&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KglvWNZcfixqFdOCPlIYWqt_E2_XdC4kdClN1gDuoaN5yZeStBmSyWhoCB8gQAvD_BwE' target='_blank'>Monitor - Lenovo L22e-40 54.61cms (21.5) Monitor - 6600<Rupee /></a><br />
                <a href='https://arcus-www.amazon.in/dp/B095381Z51?ref_=cm_sw_r_cp_ud_dp_MA8C4X7157M6MZGJK62H' target='_blank'>Monitor - HP 21.5-inches FHD - 8999<Rupee /></a><br />
                <a href='https://arcus-www.amazon.in/dp/B0CHJBNDMG?_encoding=UTF8&psc=1&ref_=cm_sw_r_cp_ud_dp_XNDB0QZS06HSBCWCS103&s=computers' target='_black'>Mechanical Keyboard - Kreo Hive - 2999<Rupee /></a><br />
                <a href='Portronics Toad Ergo Vertical Advanced Wireless Ergonomic Mouse 2.4Ghz'>Mouse - Portronics Ergonomic Mouse- 599<Rupee /></a>
            </div>


        </>
    )
}
export default About;