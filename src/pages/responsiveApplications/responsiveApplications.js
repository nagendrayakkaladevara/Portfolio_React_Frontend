import React, { useEffect } from "react";
import '../../styles/styles.css';
import EcorsuAppScreen from '../../asserts/images/ecrosuscreen.png';
import WeatherappScreen from '../../asserts/images/weatherappscreen.png';
import MovieAppScreen from '../../asserts/images/movieappscreen.png';
import AdminAppScreen from '../../asserts/images/adminecorsuscreen.png';
import AdminAppTableScreen from '../../asserts/images/admindatatable.png';
import { Link } from "react-router-dom";


const ResponsiveApplications = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
      }, []);
    const Images = [EcorsuAppScreen, AdminAppScreen, WeatherappScreen, MovieAppScreen, AdminAppTableScreen]

    const Data = [
        {
            route:"ECoRSUApp",
            Img:EcorsuAppScreen
        },
        {
            route:"AdminECoRSU",
            Img:AdminAppScreen
        },  {
            route:"WeatherApp",
            Img:WeatherappScreen
        },  {
            route:"MovieSearchApp",
            Img:MovieAppScreen
        },  {
            route:"AdminECoRSU",
            Img:AdminAppTableScreen
        }
    ]
    return (
        <>
            <p className="text-3xl flex justify-center flex-wrap focus-in-contract-bck focus-in-expand" style={{ color: "#99e8cd", fontWeight: "900", margin: "40px 0px" }}>Responsive applications.</p>
            <div className='m-5 p-2' >
                <p className='p-3 articalandresourcesintro focus-in-contract-bck' style={{ textAlign: "justify", color: "white" }}>In today&apos;s digital age, the significance of mobile responsiveness in application development cannot be overstated. With the majority of internet users accessing content through mobile devices, the demand for seamless and optimized experiences across various screen sizes is paramount. As an experienced developer in mobile responsive design, your expertise not only underscores the importance of this practice but also positions you at the forefront of modern development practices.</p>
                <p className='TechnologiesHeading'>My Work</p>
                <div className='flex justify-center flex-wrap gap-10' >
                    {Data.map(((item, index) =>
                        <>
                            <Link to={`/project/${item.route}`} >
                                <div key={index} className='mobilescreenimagesSection shadow-pop-brConstent ' style={{ cursor: "pointer" }}>

                                    <img src={item.Img} alt='' className='mobilescreenimages' />
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ResponsiveApplications;