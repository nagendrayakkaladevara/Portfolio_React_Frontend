import React, { useEffect } from "react";
import '../../styles/styles.css';

const ArticlesAndresourcess = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
      }, []);
    const data = [
        {
          "name": "Medium",
          "discription": "Medium is a platform where individuals and publications can publish articles on a wide range of topics, including technology. Many tech professionals and companies use Medium to share their insights, tutorials, and experiences.",
          'link': "https://medium.com/"
        },
        {
          "name": "Dev.to",
          "discription": "Dev.to is a community-driven platform specifically tailored for developers. It hosts a plethora of articles, tutorials, and discussions on programming languages, frameworks, tools, and industry trends.",
          'link': "https://dev.to/"
        }, {
          "name": "Smashing Magazine",
          "discription": "Smashing Magazine is known for its high-quality articles, tutorials, and resources on web design and development. It covers topics like CSS, JavaScript, responsive design, UX/UI, and more.",
          'link': "https://www.smashingmagazine.com/"
        }, {
          "name": "CSS-Tricks",
          "discription": "CSS-Tricks is a website dedicated to CSS, offering articles, tutorials, tips, and tricks for web designers and developers. It covers advanced CSS techniques, best practices, and emerging trends.",
          'link': "https://css-tricks.com/"
        }, {
          "name": "SitePoint",
          "discription": "SitePoint provides articles, tutorials, and books on web development and design topics, including HTML, CSS, JavaScript, PHP, and more. It caters to both beginners and experienced developers.",
          'link': "https://www.sitepoint.com/"
        }
      ] 
    
    return (
        <>
            <p className="text-3xl flex justify-center flex-wrap focus-in-contract-bck focus-in-expand" style={{ color: "#99e8cd", fontWeight: "900", margin: "40px 0px" }}>Articals and Resources.</p>
            <div className='m-5 p-2' >
                <p className='p-3 articalandresourcesintro focus-in-contract-bck' style={{ textAlign: "justify", color: "white" }}>In the ever-changing realm of web development, staying ahead of the curve is not just advantageous; its essential. With technology evolving at breakneck speed, developers must continually update their skill sets and stay informed about the latest trends and tools shaping the industry. But with the vast amount of information available, it&apos;s crucial to identify and follow a select few sources that provide reliable and timely insights.<br /> <br />In a competitive market, staying updated gives developers a competitive edge. Clients and employers seek professionals who are well-versed in the latest technologies and methodologies. few of the resources i follow are :</p>
                {data.map((resource, index) => (
                    <div className='m-5 p-5 shadow-pop-brConstent' style={{ background: "#a0ddd4", borderRadius: "15px" }} key={index}>
                        <a className='transparentblur jello-vertical' href={resource.link} target='_blank' rel="noopener noreferrer" style={{ display: "flex", padding: "5px 20px", borderRadius: "30px", margin: "20px 0px", background: "#618264", cursor: "pointer", color: "white" }}>{resource.name}</a>
                        <p className='' style={{ textAlign: "justify" }}>{resource.discription}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ArticlesAndresourcess;