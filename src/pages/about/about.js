import React, { useEffect, useState } from "react";
import ProfilePicture from '../../asserts/images/profilepicture.jpg';
import ProdaptLogo from '../../asserts/images/prodaptlgoo.png';
import ReactIcon from '../../asserts/images/reacticon.png';
import NextjsIcon from '../../asserts/images/nextjswhitelogo-removebg-preview.png';
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
import NPMIcon from '../../asserts/images/Npm-logo.png';
import GitHubWhiteLogo from '../../asserts/images/githubwhitelogo-removebg-preview.png';
import blogpostimage from '../../asserts/images/blogimage.jpg';
import websocketsIcon from '../../asserts/images/websocketlogo.jpg';

import '../../styles/styles.css';
import { getBlogCatlog } from "../../services/service";
import { formatDate } from "../blog/blogPost";
import { DataPersonal } from "../projects/project";
import { Link } from "react-router-dom";
import { IntroMessage } from "../applocation";

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
        }, {
            "icon": websocketsIcon,
            "title": "Websocket"
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
            "title": GitHubWhiteLogo,
            "name": "Github",
        },
        {
            "title": GitTea,
            "name": "Gitea",
        }
    ]


    const [gitData, setGitData] = useState(null);
    console.log("🚀 ~ About ~ gitData:", gitData)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [blogdata, setBlogData] = useState(null);

    useEffect(() => {

        const apiUrl = 'https://api.github.com/users/nagendrayakkaladevara';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setGitData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);


    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const fetchedData = await getBlogCatlog();
                setBlogData(fetchedData);
            } catch (error) {
                console.log('Error fetching data');
            } finally {

            }
        };

        getData();
    }, []);

    const LatestBlogDate = blogdata && formatDate(blogdata[blogdata.length - 1].date);
    const TotalProjects = DataPersonal.length;

    return (
        <>
            <div className="h-[400px] w-full p-10 text-white flex justify-center flex-col gap-5 items-center border text-lg">
                <p>I am excited to share that I have recently redesigned my portfolio! Click below to explore.</p>
                <a href="https://newnagendra.netlify.app/" target="_blank">
                    <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                        Click here
                    </button>
                </a>
            </div>
            <p className='text-3xl font-bold sm:text-6xl flex justify-center m-10 p-10 ' style={{ color: "#BFD8AF" }}>I&apos;m Nagendra.</p>
            <div className='flex justify-around'>
                <div className='flex justify-around flex-row' style={{ width: "50%" }}>
                    <img src={ProfilePicture} alt='Profile picture' className='profilepicturecustom shadow-drop-bl' />
                </div>
                <div className='flex justify-around flex-col' style={{ width: "50%" }}>
                    <p className='flex justify-start items-center myIntoText ' style={{ color: "#BFD8AF" }}>I&apos;m a web developer working remotely from the City of Destiny, India.</p>

                </div>

            </div>
            <div className='introsectioncustom text-justify '>
                <p className="m-10 text-xs sm:text-xl  justify-center items-center gap-1 flex-wrap text-justify" style={{ color: "#F0F3FF" }}>{IntroMessage}</p>

                {/* <p>I have an insatiable curiosity that drives me to constantly seek knowledge and growth. Whether it&apos;s staying ahead of industry trends, mastering new technologies, or exploring innovative solutions, what makes coding truly special is its power to bring ideas to life. It&apos;s a creative outlet where innovation knows no bounds. It&apos;s where I get to turn imagination into reality.</p> */}
                <br />
                {/* <p>Over the past two years, I have immersed myself in the web development industry, eagerly embracing new technologies and methodologies. I pride myself on being the kind of person who upholds loyalty and honesty, values that contribute to fostering a healthy and positive environment within the organization.</p> */}
            </div>

            <div className='flex justify-evenly flex-wrap' >
                <section id="section-about">
                    <div className='m-5 p-5 workexperiencesection shadow-pop-brConstent' style={{ background: "linear-gradient(90deg,#294b29,#50623a,#789461)", borderRadius: "15px" }}>
                        <p className='workexprenceheading'>Corporate Work Experience</p>
                        <div className=' items-center'>
                            <img src={ProdaptLogo} alt='prodapt logo' className='m-2 companylogo' />
                            <p className='companytitle'>Prodapt Solutions Private Limited.</p>
                        </div>
                        <div className='detailsSections'>
                            <p className='disignationname' style={{ fontSize: '10px' }}>Associate Software Developer</p>
                            <br />
                            <div style={{ fontSize: "12px" }}>
                                <p>14/Mar/2022 - Till date </p>
                                <p>Responsibility : Web Developer</p>
                                <p>Tech Used : TypeScript, React, ExpressJs, MongoDB, Microsoft Sharepoint.</p>
                                <p>No of Applications Developed: 05</p>

                            </div>
                        </div>
                    </div>
                </section>
                {/* <section id="" className="hidden md:block">
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
                </section> */}
            </div>



            <div className="my-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-300  before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-[''] text-white">More</div>



            <div className="p-4">

                <div className="mx-auto max-w-md overflow-hidden rounded-lg shadow" style={{ color: "white" }}>
                    <ul className="divide-y divide-gray-100 py-2 px-4">
                        <Link to='/projects'>
                            <li className="flex p-3 hover:bg-slate-800 rounded-lg">
                                <div className="mr-4 flex-1">
                                    <h4 className="text-lg font-medium text-white">Projects</h4>
                                    <div className="mt-1 text-sm text-gray-400"><span>No of Projects</span> • <time>{TotalProjects}</time></div>
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1587614380862-0294308ae58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="h-20 w-20 rounded-lg object-cover" alt="" />
                                </div>
                            </li>
                        </Link>
                        <Link to='/blog'>
                            <li className="flex p-3 hover:bg-slate-800 rounded-lg">
                                <div className="mr-4 flex-1">
                                    <h4 className="text-lg font-medium text-white">Blog</h4>
                                    <div className="mt-1 text-sm text-gray-400"><span>Latest</span> • <time>{LatestBlogDate}</time></div>
                                </div>

                                <div>
                                    <img src={blogpostimage} className="h-20 w-20 rounded-lg object-cover" alt="" />
                                </div>
                            </li>
                        </Link>
                        <Link to='/contacts'>
                            <li className="flex p-3 hover:bg-slate-800 rounded-lg">
                                <div className="mr-4 flex-1">
                                    <h4 className="text-lg font-medium text-white">Contact</h4>
                                    <div className="mt-1 text-sm text-gray-400"><span>Phone</span> • <span>Gmail</span> • <span>LinkedIn</span> • <span>X</span> • <span>Outlook</span></div>
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" className="h-20 w-20 rounded-lg object-cover" alt="" />

                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>
            <section id="section-Technologies">
                <p className='TechnologiesHeading flex justify-center'>Technologies</p>
                <div className='flex gap-5 flex-wrap justify-evenly' style={{ padding: "0px 10px" }}>
                    {data.map((item, index) => (
                        <div key={index} className='flex gap-3 items-center techblur p-5'>
                            <p style={{ fontSize: "20px", color: 'white' }}>{item.title}</p>
                            <img src={item.icon} alt={`${item.title} icon`} style={{ width: '50px', height: "auto" }} />
                        </div>
                    ))}
                </div>
            </section>
            <p className='TechnologiesHeading flex justify-center'>IDE&apos;s</p>
            <div className='flex gap-5 flex-wrap justify-evenly'>
                {IDEData.map((item, index) => (
                    <div key={index} className='flex gap-3 items-center techblur p-5'>
                        <p style={{ fontSize: "20px", color: 'white' }}>{item.title}</p>
                        <img src={item.icon} alt={`${item.title} icon`} style={{ width: '50px', height: "auto" }} />
                    </div>
                ))}
            </div>
            <p className='TechnologiesHeading flex justify-center'>Version controls</p>
            <div className='flex gap-5 flex-wrap justify-evenly'>
                {VersionControls.map((item, index) => (
                    <div key={index} className='flex gap-3 items-center techblur p-5'>
                        <p style={{ fontSize: "20px", color: 'white' }}>{item.name}</p>
                        <img src={item.title} alt={`${item.title} icon`} style={{ width: '50px', height: "auto" }} />
                    </div>
                ))}
            </div>
            <p className='TechnologiesHeading flex justify-center'>GitHub Profile</p>

            {/* <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </a> */}
            <div className="techblur p-2 m-5 text-white">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <img src={gitData?.avatar_url} style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
                    <div>
                        <div className="block p-2">
                            <p>GitHub Id: {gitData?.login}</p>
                            <p>No of Public Repo's: {gitData?.public_repos}</p>
                            <p>No of Public Gists: {gitData?.public_gists}</p>
                        </div>

                        <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                            <a href="https://github.com/nagendrayakkaladevara" target="_black">Profile</a>
                        </button>
                        {/* <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                            <a href="https://api.github.com/users/nagendrayakkaladevara/repos" target="_blank">Repo's</a>
                        </button> */}
                    </div>
                </div>
            </div>
            <section id="section-Hobbies">
                <p className='TechnologiesHeading flex justify-center'>Hobbies</p>
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

            <p className='TechnologiesHeading flex justify-center items-end'>My Suggestions <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16" style={{ display: "inline", marginTop: "-5px", marginLeft: "5px" }}>
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