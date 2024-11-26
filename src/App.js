import './App.css';
import Footer from './components/footer';
import NavBar from './components/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Application from './pages/applocation';
import About from './pages/about/about';
import Contacts from './pages/contacts/contacts';
import Projects from './pages/projects/projects';
import Blog from './pages/blog/blog';
import ArticlesAndresourcess from './pages/articlesAndresources/articlesAndresourcess';
import Brandingvalues from './pages/brandingvalues/brandingvalues';
import ResponsiveApplications from './pages/responsiveApplications/responsiveApplications';
import Psdtohtml from './pages/psdtohtml/psdtohtml';
import Project from './pages/projects/project';
import BlogPost from './pages/blog/blogPost';
import { useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component mounts
  }, []);

  return (
    <>
      <PrimeReactProvider>

        <Router>
          <SmoothScroll />
          <div className='main'>
            <NavBar />
            <Routes>
              {/* <Route
                path="/"
                element={<Application />}
              ></Route> */}
              <Route
                path="/"
                element={<About />}
              ></Route>
              <Route
                path="/contacts"
                element={<Contacts />}
              ></Route>
              <Route
                path="/projects"
                element={<Projects />}
              ></Route>
              <Route
                path="/blog"
                element={<Blog />}
              ></Route>
              <Route path='/articlesAndresources' element={<ArticlesAndresourcess />} />
              <Route path="/brandingvalues" element={<Brandingvalues />} />
              <Route path="/responsiveApplications" element={<ResponsiveApplications />} />
              <Route path="/psdtohtml" element={<Psdtohtml />} />
              <Route path="/project/:projectName" element={<Project />} />
              <Route path="/blog/:blogId" element={<BlogPost />} />
              <Route path="*" element={<About />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </PrimeReactProvider>

    </>
  );
}

export default App;
