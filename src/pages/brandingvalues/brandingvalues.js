import React, { useEffect } from "react";
import BrandingImage from '../../asserts/images/brandingimagess.jpg'
import Brandingcolor from '../../asserts/images/branindingImagecolor.png';
import BrandingStandars from '../../asserts/images/braningbuttons.jpg';

const Brandingvalues = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
      }, []);
    return (
        <>
            <p className="text-3xl flex justify-center flex-wrap focus-in-contract-bck focus-in-expand" style={{ color: "#99e8cd", fontWeight: "900", margin: "40px 0px" }}>Branding values</p>
            <div className='m-5 p-2' >
                <p className='p-3 articalandresourcesintro focus-in-contract-bck' style={{ textAlign: "justify", color: "white" }}>With two years of experience in a multinational corporation, I&apos;ve gained a deep understanding of the importance of consistency in branding and adherence to standards throughout the application development process. This entails maintaining uniformity in design elements, user interface components, and coding practices to ensure a cohesive and professional user experience across all touchpoints.</p>
                <div className='flex justify-center' style={{ margin: "20px 0px" }}>
                    <img src={BrandingImage} alt='' className='BrandingImageImagess shadow-pop-brConstent' />
                </div>
                <p className='p-3 articalandresourcesintro focus-in-contract-bck' style={{ textAlign: "justify", color: "white" }}>The importance of color throughout an application cannot be overstated. Colors play a vital role in shaping users perceptions, emotions, and interactions with the interface. Consistent and thoughtful use of color enhances brand recognition, establishes visual hierarchy, guides users attention, and reinforces the overall user experience. Whether it&apos;s conveying meaning through color-coded elements, fostering visual harmony, or creating a memorable impression, the strategic application of color is integral to crafting engaging and effective user interfaces.</p>
                <div className='flex justify-center' style={{ margin: "20px 0px" }}>
                    <img src={Brandingcolor} alt='' className='BrandingImageImagess shadow-pop-brConstent' />
                </div>
                <p className='p-3 articalandresourcesintro focus-in-contract-bck' style={{ textAlign: "justify", color: "white" }}>
                    Maintaining consistency in components throughout an application is paramount. Consistency ensures a seamless user experience, fostering familiarity and reducing cognitive load. When users encounter familiar elements such as buttons, menus, and forms consistently across different screens, they can navigate the application more intuitively. Consistent components also contribute to brand identity, reinforcing the visual language and conveying professionalism. Additionally, uniformity simplifies development and maintenance processes, as developers can reuse existing components and styles efficiently. Overall, maintaining consistency in components throughout the application is essential for usability, branding, and efficient development practices.</p>
                <div className='flex justify-center' style={{ margin: "20px 0px" }}>
                    <img src={BrandingStandars} alt='' className='BrandingImageImagess shadow-pop-brConstent' />
                </div>
            </div>
        </>
    )
}
export default Brandingvalues;