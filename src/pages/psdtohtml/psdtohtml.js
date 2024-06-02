import React, { useEffect } from "react";
import '../../styles/styles.css';

const Psdtohtml = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
      }, []);
    const Data = [{
        title: 'Wireframe Precision',
        text: 'I work closely with UX designers to understand the intricacies of wireframes and translate them faithfully into functional user interfaces. Every element, from layout to interactions, is meticulously implemented to match the wireframes specifications.'
    },
    {
        title: 'User Interface Design Proficiency',
        text: 'Leveraging my expertise in frontend technologies, I transform wireframes into visually compelling and user-friendly interfaces. Through carefully crafted CSS, HTML, and JavaScript code, I ensure that the final UI not only looks stunning but also provides an intuitive user experience.'
    }, {
        title: 'Attention to Detail',
        text: 'My commitment to detail is reflected in the precision with which I execute UX designs. I pay close attention to spacing, typography, color schemes, and other design elements to maintain consistency and usability across the interface.'
    }
        , {
        title: 'User-Centered Design Focus',
        text: 'I prioritize user needs and preferences throughout the development process. By incorporating UX best practices and conducting usability tests, I refine the interface to enhance user satisfaction and engagement'
    }, {
        title: 'Iterative Design Process',
        text: 'I embrace an iterative approach to UX development, continuously refining designs based on feedback and testing results. This iterative cycle ensures that the final product meets both user expectations and project requirements.'
    }
        , {
        title: 'Technical Competence',
        text: 'Proficient in frontend technologies and frameworks such as React, Vue.js, and Angular, I have the technical prowess to bring complex UX designs to life. I also stay updated with the latest trends and tools in frontend development to deliver cutting-edge interfaces.'
    }, {
        title: 'Communication and Collaboration Skills',
        text: 'Effective communication is key to successful UX development. I collaborate closely with UX designers, product managers, and other team members to align on design objectives and deliverables. By fostering open communication and feedback, I ensure a smooth transition from wireframe to user interface.'
    }]

    return (
        <>
            <div>
                <p className="text-3xl flex justify-center flex-wrap focus-in-contract-bck focus-in-expand" style={{ color: "#99e8cd", fontWeight: "900", margin: "40px 0px" }}>Wireframe to User Interface Development.</p>
                <div className='m-5 p-2' >
                    <p className='p-3 articalandresourcesintro focus-in-contract-bck' style={{ textAlign: "justify", color: "white" }}>As a frontend developer with a focus on delivering seamless user experiences, I excel in translating wireframes into pixel-perfect user interfaces. Here&apos;s how I bring wireframes to life while ensuring exactness in UX development:</p>
                    <br /><br />
                    {Data.map(((item, index) =>
                        <>
                            <p className='subheadingpsdtohtml' style={{ fontSize: '15px', fontWeight: '900', color: '#2d483f' }}>{item.title}</p>
                            <div className='blurcard focus-in-contract-bck '>
                                <p className='' style={{ color: '#B8F1B0' }}>
                                    {item.text}
                                </p>
                            </div>
                            <br />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Psdtohtml;