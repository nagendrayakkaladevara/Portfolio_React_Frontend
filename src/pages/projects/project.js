import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../../styles/styles.css';
import Technologys from "../../components/technologys";

export const DataPersonal = [
    {
        title: "ReUseReact UI (under development)",
        techUsed: ["typescript", 'tailwind', "nextjs", 'github'],
        description: "The ReUseReact UI Snippet Library is designed to streamline the development process for React developers by providing ready-to-use code snippets for common reusable components. This project addresses the frequent need to create components like buttons and input fields from scratch, allowing developers to focus on building their applications rather than reinventing the wheel.",
        active: "yes",
        demolink: "https://reusablereactui.netlify.app/",
        github: 'https://github.com/nagendrayakkaladevara/ReUsableReact-UI-NextJs',
        projects: 'ReUseReactUI',
        keypoints: [
            { "sideHeading": "No Additional Dependencies", "keypoint": "Users can integrate these snippets without the hassle of installing extra libraries, ensuring a lightweight and efficient development experience." },
            { "sideHeading": "Reusable Code Snippets", "keypoint": "The library offers a comprehensive collection of code snippets for essential React components, enabling developers to quickly copy and paste code directly into their projects." },
            { "sideHeading": "Customization Flexibility", "keypoint": "While the snippets are ready to use, developers have the flexibility to modify components according to their project requirements, promoting creativity and adaptability." },
            { "sideHeading": "Tailwind CSS Integration", "keypoint": "The project includes snippets that utilize Tailwind CSS, allowing developers to leverage utility-first styling for their components effortlessly." },
            { "sideHeading": "Benefits", "keypoint": "This project significantly reduces the time and effort required for component development in React, making it an invaluable resource for developers of all skill levels. By providing a straightforward way to access and customize reusable components, the ReUseReact UI Library empowers developers to enhance their productivity and focus on delivering high-quality applications." }
        ],
        conclusion: 'This project is aimed at React developers looking for a quick and efficient way to implement common components in their projects, whether they are beginners seeking guidance or experienced developers looking to save time.'
    },
    {
        title: "Railway Welfare Fund Tracker Application",
        techUsed: ["html","css", "typescript", 'primeReact', "react", "PrimeReact", "expressjs", 'mangodb', 'github'],
        description: "The Railway Welfare Fund Tracker is a application to keep track of the welfare funds i have developed backend application designed to efficiently manage and monitor the railway welfare fund and associated payments for each year. Built with Express and MongoDB, this application ensures secure and reliable handling of data related to welfare initiatives.",
        active: "yes",
        demolink: "https://railwaypaymentstrackingapp.netlify.app/",
        github: 'https://github.com/nagendrayakkaladevara/payment-details-railwayapplication-backend',
        projects: 'RailwayWelfareFundTrackerApplicationBackend',
        keypoints: [
            { "sideHeading": "Express Framework", "keypoint": "Leveraging the robust capabilities of Express.js, the application provides a RESTful API for seamless interactions and data retrieval." },
            { "sideHeading": "Zod Validation", "keypoint": "Implements Zod for data validation, ensuring that incoming data is thoroughly checked and meets specified criteria before processing. This enhances the application's reliability and security." },
            { "sideHeading": "Authentication Middleware", "keypoint": " Incorporates middleware for user authentication, safeguarding sensitive data and ensuring that only authorized personnel can access specific functionalities." },
            { "sideHeading": "Efficient Application Structure", "keypoint": "The project is organized using a clear architecture, with distinct layers for controllers, routers, and models. This modular approach promotes maintainability and scalability." },
            { "sideHeading": "Database Configuration", "keypoint": "Includes a configuration module for database connections, simplifying the setup process and enabling easy adjustments as needed" }
        ],
        conclusion: 'The Railway Welfare Fund Tracker is intended for railway administration and financial departments seeking an effective way to manage welfare funds and streamline payment processes. It can also serve as a valuable resource for developers interested in best practices for building secure and maintainable backend applications.'
    },
    {
        title: "React Reusable Button Package",
        techUsed: ["typescript"],
        description: "The React Reusable Button Package is a versatile npm package developed to simplify UI development in React applications. This package provides a customizable button component that enhances code reusability and streamlines the implementation of button elements across various projects.",
        active: "yes",
        demolink: "https://www.npmjs.com/package/@nagendrayakkaladevara/react-button-component",
        github: 'https://github.com/nagendrayakkaladevara/NPM-React-Button',
        projects: 'ReactReusableButtonPackage',
        keypoints: [
            { "sideHeading": "Customizable Styles", "keypoint": "The button component supports multiple styles, including primary, secondary, danger, and success, allowing developers to easily match their design preferences and branding requirements." },
            { "sideHeading": "Flexible Sizing Options:", "keypoint": "With support for different sizes (small, medium, large), the button can be adjusted to fit various use cases and UI designs." },
            { "sideHeading": "Robust Event Handling", "keypoint": "The component includes an onClick prop, enabling developers to implement custom event handling seamlessly." },
            { "sideHeading": "CSS Customization", "keypoint": "Developers can easily apply custom CSS styles to the button, providing flexibility for tailored appearances without compromising functionality." },
            { "sideHeading": "Integration with Icon Libraries", "keypoint": "The package allows for easy integration with popular icon libraries, enabling the addition of icons to buttons for improved visual appeal and user interaction." }
        ],
        conclusion: 'This npm package promotes efficient UI development by providing a reusable button component that minimizes redundancy and maximizes flexibility. By incorporating various styles, sizes, and customization options, developers can implement buttons that align perfectly with their application’s design and functionality.'
    },
    {
        title: "ECoRSU App",
        techUsed: ["html", "css", "javascript", "react", "expressjs", 'mangodb', 'firebase', 'github'],
        description: "The Indian Railway Shramik Union (ECoRSU) Digital Phone Diary project is a comprehensive solution tailored for mobile users, designed to enhance communication and organization within the Indian Railway waltair division. Leveraging modern web technologies, this project seamlessly integrates React, Express.js, MongoDB, Vercel for backend deployment, and Netlify for frontend deployment, ensuring a smooth and efficient user experience.",
        active: "yes",
        demolink: "https://ecorsuapp.netlify.app/",
        github: 'https://github.com/nagendrayakkaladevara/ecorsuAdmin-react-app-frontend',
        projects: 'ECoRSUApp',
        keypoints: [
            { "sideHeading": "Chatbot Integration", "keypoint": "Users can engage with a chatbot feature, providing assistance and answering queries related to various aspects of the Indian Railway Shramik Union." },
            { "sideHeading": "Dark & Light Mode Toggle", "keypoint": "Enhancing user experience, this project offers the flexibility to switch between dark and light modes, catering to different preferences and environments." },
            { "sideHeading": "Excel Download Functionality", "keypoint": "Users can conveniently download data in Excel format, facilitating easy access and management of information." },
            { "sideHeading": "Calling Feature", "keypoint": "Seamlessly integrated with the user's device, the calling feature enables direct phone calls, promoting efficient communication within the community." },
            { "sideHeading": "News Updates Section", "keypoint": "Stay informed with the latest news, announcements, and updates relevant to the Indian Railway Shramik Union community, ensuring members are always up-to-date with relevant information." }
        ],
        conclusion: 'This project serves as a digital hub for members of the Indian Railway Shramik Union, offering a centralized platform for communication, organization, and access to essential resources. With its user-friendly interface and innovative features, it aims to streamline processes and enhance connectivity within the community.'
    }, {
        title: "Admin ECoRSU",
        techUsed: ["html", "css", "javascript", "react", "expressjs", 'mangodb', 'firebase', 'github'],
        description: "The ECoRSU Management Application is a dynamic web-based solution developed using React, Express.js, MongoDB, and Firebase OTP authentication, deployed with Vercel for backend and Netlify for frontend. This application is designed to streamline the management of the ECoRSU (Indian Railway Shramik Union) app, catering to a select group of users who are authenticated via OTP for secure access.",
        active: "yes",
        demolink: "https://admin-ecorsuapp.netlify.app/",
        github: 'https://github.com/nagendrayakkaladevara/ecorsuAdmin-react-app-frontend',
        projects: 'AdminECoRSU',
        keypoints: [
            { "sideHeading": "Firebase OTP Authentication", "keypoint": "Ensuring secure access, users are authenticated via OTP (One-Time Password) provided by Firebase authentication, guaranteeing a seamless and safe login experience." },
            { "sideHeading": "News Management", "keypoint": "Users can upload, delete, and edit news updates relevant to the ECoRSU community, ensuring timely dissemination of information." },
            { "sideHeading": "Document Upload", "keypoint": "Administrators have the capability to upload important documents, which are instantly reflected in the client application, facilitating easy access to essential resources for users." },
            { "sideHeading": "Interactive Charts with Recharts", "keypoint": " Leveraging the power of Recharts, the application offers visually appealing and informative charts for better representation of data such as membership statistics, funds collected, and other relevant metrics." },
            { "sideHeading": "User-Friendly Interface", "keypoint": "Designed with a focus on usability, the application provides an intuitive interface that simplifies navigation and enhances user experience." }
        ],
        conclusion: "The ECoRSU Management Application serves as a centralized platform for managing news updates, documents, and visualizing key data points relevant to the ECoRSU community. By integrating authentication, content management, and data visualization functionalities, it empowers administrators to efficiently oversee and enhance communication within the organization"
    },
    {
        title: "Movie Search App (Revamp)",
        techUsed: ["nextjs", "tailwind", "typescript", "github"],
        description: "Movie Search is a user-friendly web application built using NextJs and deployed on Netlify. This application enables users to search for movie details by entering the movie's title, providing them with comprehensive information about their desired films.This is a revamp of my old application build 2 years ago.",
        active: "yes",
        demolink: "https://moviesearchappnext.netlify.app/",
        github: 'https://github.com/nagendrayakkaladevara/Revamp-MovieApp-NextJs-TypeScipt',
        projects: 'MovieSearchApp',
        keypoints: [
            { "sideHeading": "Movie Search Functionality", "keypoint": "Users can easily search for movies by entering the movie's title into the search bar. The application then retrieves relevant movie details based on the user's input." },
            { "sideHeading": "Comprehensive Movie Details", "keypoint": "Movie Searcher provides users with comprehensive information about the searched movies, including title, release year, genre, cast, synopsis, ratings, and more." },
            { "sideHeading": "Responsive Design", "keypoint": "With a responsive design, Movie Searcher ensures that users can access and utilize the application seamlessly across various devices, including desktops, tablets, and smartphones." },
            { "sideHeading": "User-Friendly Interface", "keypoint": " Movie Searcher boasts a clean and intuitive interface, making it easy for users to navigate and interact with the application. The search functionality is straightforward, allowing users to find the desired movie details quickly." },
            { "sideHeading": "Instant Results", "keypoint": "Upon entering the movie's title into the search bar, Movie Searcher instantly retrieves and displays the relevant movie details, providing users with timely information." },
        ],
        conclusion: "Movie Searcher simplifies the process of finding movie details, offering users a convenient and efficient way to access information about their favorite films. Whether users are looking for movie synopses, cast members, or ratings, Movie Searcher provides a comprehensive solution for all their movie-related queries."
    }, {
        title: "Weather Finder (Revamp)",
        techUsed: ["nextjs", "tailwind", "typescript", "github"],
        description: "Weather Finder is an innovative web application built using NextJs and deployed on Netlify. Leveraging the power of Google Maps APIs for location services and search functionality, as well as weather APIs for real-time weather updates, Weather Finder provides users with accurate weather information based on their current location or specified search queries.This is a revamp of my old application build 2 years ago.",
        active: "yes",
        demolink: "https://weatherapp-skytrack.netlify.app/",
        github: 'https://github.com/nagendrayakkaladevara/Revamp-Weather-NextJs-TypeScipt',
        projects: 'WeatherApp',
        keypoints: [
            { "sideHeading": "Automatic Location Detection", "keypoint": "Upon opening the application, Weather Finder fetches the user's current location using the device's location services. Utilizing Google Maps APIs, it retrieves the latitude and longitude coordinates, which are then passed to the weather API to fetch the current weather conditions." },
            { "sideHeading": "Real-Time Weather Updates", "keypoint": "Weather Finder utilizes weather APIs to provide users with up-to-date weather information based on their current location. Users can instantly view temperature, humidity, wind speed, and other relevant weather data at a glance." },
            { "sideHeading": "Location-Based Search", "keypoint": "In addition to automatic location detection, Weather Finder allows users to search for weather information in specific locations. By entering a place name or address, users can retrieve weather forecasts for any desired location worldwide." },
            { "sideHeading": "User-Friendly Interface", "keypoint": "With a clean and intuitive interface, Weather Finder offers a seamless user experience. Users can easily navigate between different features and view weather information effortlessly." },
            { "sideHeading": "Responsive Design", "keypoint": "Weather Finder is designed to be responsive across various devices and screen sizes, ensuring optimal usability and accessibility for users on desktops, tablets, and smartphones." },
        ],
        conclusion: 'Weather Finder simplifies the process of accessing accurate weather information by combining location-based services with real-time weather data. Whether users want to check the weather in their current location or plan ahead for a trip, Weather Finder provides a convenient and reliable solution.'
    }, {
        title: "Document Closet",
        techUsed: ["html", "tailwind", "daisyui", "javascript", "react", "expressjs", 'mangodb', 'firebase', 'github'],
        description: "Document Closet is a versatile web application developed using React, Express.js, MongoDB, and Firebase OTP authentication, deployed on Vercel for backend and Netlify for frontend. As its name suggests, Document Closet serves as a centralized repository for users to securely store and manage all their documents in one place.",
        active: "yes",
        demolink: "https://documentcloset.netlify.app/",
        github: 'https://github.com/nagendrayakkaladevara/DocumentClosetReactFrontend',
        projects: 'DocumentCloset',
        keypoints: [
            { "sideHeading": "User Authentication", "keypoint": "Users can create an account and securely log in using Firebase OTP authentication, ensuring their documents are accessed only by authorized individuals." },
            { "sideHeading": "Document Management", "keypoint": "Once logged in, users can effortlessly upload, organize, and manage their documents within the Document Closet. The application supports various file formats, including PDFs, Word documents, images, and more." },
            { "sideHeading": "Centralized Storage", "keypoint": "Document Closet offers users the convenience of storing all their documents in one centralized location, eliminating the need for multiple storage solutions and reducing clutter." },
            { "sideHeading": "Secure Access", "keypoint": "With Firebase OTP authentication, users can rest assured that their documents are safe and accessible only to them. The application employs robust security measures to protect sensitive information." },
            { "sideHeading": "User-Friendly Interface", "keypoint": "The application boasts an intuitive and user-friendly interface, making it easy for users to navigate, upload, and manage their documents with ease." },
        ],
        conclusion: "Document Closet simplifies document management by providing users with a secure, centralized platform to store and organize all their documents. Whether it's personal files, work documents, or important records, users can trust Document Closet to keep their information safe and easily accessible whenever they need it."
    },  {
        title: "Crypto Price App",
        techUsed: ["html","tailwind", "typescript", "react", 'github'],
        description: "",
        active: "yes",
        demolink: "https://cryptopriceapplication.netlify.app/",
        github: 'https://github.com/nagendrayakkaladevara/payment-details-railwayapplication-backend',
        projects: 'RailwayWelfareFundTrackerApplicationBackend',
        keypoints: [
            { "sideHeading": "Express Framework", "keypoint": "Leveraging the robust capabilities of Express.js, the application provides a RESTful API for seamless interactions and data retrieval." },
            { "sideHeading": "Zod Validation", "keypoint": "Implements Zod for data validation, ensuring that incoming data is thoroughly checked and meets specified criteria before processing. This enhances the application's reliability and security." },
            { "sideHeading": "Authentication Middleware", "keypoint": " Incorporates middleware for user authentication, safeguarding sensitive data and ensuring that only authorized personnel can access specific functionalities." },
            { "sideHeading": "Efficient Application Structure", "keypoint": "The project is organized using a clear architecture, with distinct layers for controllers, routers, and models. This modular approach promotes maintainability and scalability." },
            { "sideHeading": "Database Configuration", "keypoint": "Includes a configuration module for database connections, simplifying the setup process and enabling easy adjustments as needed" }
        ],
        conclusion: 'The Railway Welfare Fund Tracker is intended for railway administration and financial departments seeking an effective way to manage welfare funds and streamline payment processes. It can also serve as a valuable resource for developers interested in best practices for building secure and maintainable backend applications.'
    }, {
        title: "Telugu Tribune",
        techUsed: ["html", "css", "javascript", "react"],
        description: "Developed a responsive landing page for Telugu Tribune aimed at enhancing brand visibility. The project involved creating a user-friendly interface with intuitive navigation.",
        active: "yes",
        demolink: "https://telugutribune.netlify.app/",
        github: '',
        projects: 'TeluguTribune',
        keypoints: [
            { "sideHeading": "Responsive Design", "keypoint": "Ensured optimal viewing experience across various devices, including mobile, tablet, and desktop." },
            { "sideHeading": "Unique Design", "keypoint": "Enhancing user experience, this project offers the unique design." },
            // { "sideHeading": "Excel Download Functionality", "keypoint": "Users can conveniently download data in Excel format, facilitating easy access and management of information." },
            // { "sideHeading": "Calling Feature", "keypoint": "Seamlessly integrated with the user's device, the calling feature enables direct phone calls, promoting efficient communication within the community." },
            // { "sideHeading": "News   Updates Section", "keypoint": "Stay informed with the latest news, announcements, and updates relevant to the Indian Railway Shramik Union community, ensuring members are always up-to-date with relevant information." }
        ],
        conclusion: 'This project showcases my ability to blend technical skills with creative design to deliver an effective marketing solution.'
    }, {
        title: "Weather Finder",
        techUsed: ["html", "css", "javascript", "react"],
        description: "Weather Finder is an innovative web application built using React and deployed on Netlify. Leveraging the power of Google Maps APIs for location services and search functionality, as well as weather APIs for real-time weather updates, Weather Finder provides users with accurate weather information based on their current location or specified search queries.",
        active: "yes",
        demolink: "https://freakingweatherapp.netlify.app/",
        github: '',
        projects: 'WeatherApp',
        keypoints: [
            { "sideHeading": "Automatic Location Detection", "keypoint": "Upon opening the application, Weather Finder fetches the user's current location using the device's location services. Utilizing Google Maps APIs, it retrieves the latitude and longitude coordinates, which are then passed to the weather API to fetch the current weather conditions." },
            { "sideHeading": "Real-Time Weather Updates", "keypoint": "Weather Finder utilizes weather APIs to provide users with up-to-date weather information based on their current location. Users can instantly view temperature, humidity, wind speed, and other relevant weather data at a glance." },
            { "sideHeading": "Location-Based Search", "keypoint": "In addition to automatic location detection, Weather Finder allows users to search for weather information in specific locations. By entering a place name or address, users can retrieve weather forecasts for any desired location worldwide." },
            { "sideHeading": "User-Friendly Interface", "keypoint": "With a clean and intuitive interface, Weather Finder offers a seamless user experience. Users can easily navigate between different features and view weather information effortlessly." },
            { "sideHeading": "Responsive Design", "keypoint": "Weather Finder is designed to be responsive across various devices and screen sizes, ensuring optimal usability and accessibility for users on desktops, tablets, and smartphones." },
        ],
        conclusion: 'Weather Finder simplifies the process of accessing accurate weather information by combining location-based services with real-time weather data. Whether users want to check the weather in their current location or plan ahead for a trip, Weather Finder provides a convenient and reliable solution.'
    }, {
        title: "Movie Search App",
        techUsed: ["html", "css", "javascript", "react"],
        description: "Movie Searcher is a user-friendly web application built using React and deployed on Netlify. This application enables users to search for movie details by entering the movie's title, providing them with comprehensive information about their desired films.",
        active: "yes",
        demolink: "https://searchmovie123.netlify.app/",
        github: '',
        projects: 'MovieSearchApp',
        keypoints: [
            { "sideHeading": "Movie Search Functionality", "keypoint": "Users can easily search for movies by entering the movie's title into the search bar. The application then retrieves relevant movie details based on the user's input." },
            { "sideHeading": "Comprehensive Movie Details", "keypoint": "Movie Searcher provides users with comprehensive information about the searched movies, including title, release year, genre, cast, synopsis, ratings, and more." },
            { "sideHeading": "Responsive Design", "keypoint": "With a responsive design, Movie Searcher ensures that users can access and utilize the application seamlessly across various devices, including desktops, tablets, and smartphones." },
            { "sideHeading": "User-Friendly Interface", "keypoint": " Movie Searcher boasts a clean and intuitive interface, making it easy for users to navigate and interact with the application. The search functionality is straightforward, allowing users to find the desired movie details quickly." },
            { "sideHeading": "Instant Results", "keypoint": "Upon entering the movie's title into the search bar, Movie Searcher instantly retrieves and displays the relevant movie details, providing users with timely information." },
        ],
        conclusion: "Movie Searcher simplifies the process of finding movie details, offering users a convenient and efficient way to access information about their favorite films. Whether users are looking for movie synopses, cast members, or ratings, Movie Searcher provides a comprehensive solution for all their movie-related queries."
    }
]

const Project = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
    const { projectName } = useParams();
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const matchedProject = DataPersonal.find(project => project.projects === projectName);

        // If a matching project is found, set it in state
        if (matchedProject) {
            setProjectData(matchedProject);
        }
        console.log(projectName, "productId");
    }, [projectName]);

    // this is personal project detail view file 

    return (
        <>
            {projectData && (
                <>
                    <p className='text-3xl font-bold sm:text-6xl flex justify-center m-10 p-10 focus-in-expand ' style={{ color: "#BFD8AF" }}>{projectData.title}</p>
                    <a href={projectData.link} target='_black' className='flex justify-center projectLink' style={{ color: "blue", textDecoration: "underline" }}>{projectData.link}</a>
                    <p className='TechnologiesHeading'>Technologies Used:</p>
                    <Technologys data={projectData.techUsed} titleColor={"white"} />
                    <p className='TechnologiesHeading'>Project Description:</p>
                    <div className='m-5'>
                        <p className='Projectdescription ' style={{ color: "white", textAlign: "justify", fontWeight: "100" }}>{projectData.description}</p>
                    </div>
                    <p className='TechnologiesHeading '>Key Points:</p>
                    <div className='m-5'>
                        {projectData.keypoints.map((keypoint, index) => (
                            <div key={index} style={{ margin: "20px 0px" }}>
                                <p className='Projectdescription  projectdecriptionkeypoints'>{keypoint.sideHeading}:</p>
                                <p className='Projectdescription ' style={{ color: "white", textAlign: "justify", fontWeight: "100" }}>{keypoint.keypoint}</p>
                            </div>
                        ))}
                    </div>
                    <p className='TechnologiesHeading'>Conclusion :</p>
                    <div className='m-5'>
                        <p className='Projectdescription ' style={{ color: "white", textAlign: "justify", fontWeight: "100" }}>{projectData.conclusion}</p>
                    </div>
                </>
            )}
        </>
    );
}
export default Project;