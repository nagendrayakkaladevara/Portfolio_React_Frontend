import React from "react";
import ReactIcon from '../asserts/images/reacticon.png';
import NextjsIcon from '../asserts/images/nextjsIcon.png';
import HtmlIcon from '../asserts/images/htmlicon.png';
import CssIcon from '../asserts/images/cssicon.png';
import JavaScriptIcon from '../asserts/svgs/javascript.svg';
import JavaIcon from '../asserts/images/javaicon.png';
import MySqlIcon from '../asserts/images/MySQLicon.png';
import MongodbIcon from '../asserts/svgs/mongodb.svg';
import ExpressJsIcon from '../asserts/images/expressjsicon.png';
import TypescriptIcon from '../asserts/images/typescript-icon.png';
import SharepointIcon from '../asserts/images/sharepointicon.png';
import Firebase from '../asserts/images/firebaseicon.png';
import GitHubIcon from '../asserts/images/githubicon.png';
import SVNIcon from '../asserts/images/svnicon.png';
import TailwindIcon from '../asserts/images/tailwindicon.png';
import DasiyUI from '../asserts/images/dasisyuiicon.png';

const Technologys = ({ data, titleColor }) => {
    const Tech = [
        {
            "html": {
                icon: HtmlIcon,
                title: "HTML 5",
            },
        },
        {
            "css": {
                icon: CssIcon,
                title: "CSS 3",
            },
        }, {
            "tailwind": {
                icon: TailwindIcon,
                title: "Tailwind CSS",
            },
        }, {
            "daisyui": {
                icon: DasiyUI,
                title: "daisyUI",
            },
        }, {
            "javascript": {
                icon: JavaScriptIcon,
                title: "JavaScript",
            },
        }, {
            "react": {
                icon: ReactIcon,
                title: "React",
            },
        }, {
            "nextjs": {
                icon: NextjsIcon,
                title: "NextJs",
            },
        }, {
            "expressjs": {
                icon: ExpressJsIcon,
                title: "ExpressJs",
            },
        }, {
            "mangodb": {
                icon: MongodbIcon,
                title: "Mongodb",
            },
        }, {
            "java": {
                icon: JavaIcon,
                title: "Java",
            },
        }, {
            'mysql': {
                icon: MySqlIcon,
                title: "My Sql",
            },
        }, {
            'typescript': {
                icon: TypescriptIcon,
                title: "Typescript ",
            },
        }, {
            'sharepoint': {
                icon: SharepointIcon,
                title: "Sharepoint",
            },
        }, {
            "firebase": {
                icon: Firebase,
                title: "firebase",
            },
        }, {
            "svn": {
                icon: SVNIcon,
                title: "SVN",
            },
        }, {
            "github": {
                icon: GitHubIcon,
                title: "Github",
            },
        }
    ];

    const filterTech = (data, tech) => {
        return tech.filter(item => Object.keys(item)[0] && data.includes(Object.keys(item)[0]));
    }

    const FilteredTech = filterTech(data, Tech);
    return (
        <>
            <div className='flex m-5 gap-3 justify-around flex-wrap focus-in-expand'>
                {FilteredTech.map((item, index) => (
                    <div key={index} className='flex gap-3 items-center projectstechblur p-5'>
                        <p style={{ fontSize: "15px", color: titleColor }}>{item[Object.keys(item)[0]].title}</p>
                        <div style={{ width: '30px', height: "30px" }}>
                            <img src={item[Object.keys(item)[0]].icon} alt={`${item[Object.keys(item)[0]].title} icon`} width={30} height={30} />
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}
export default Technologys;