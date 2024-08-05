import React, { useState, useEffect } from "react";
import '../../styles/styles.css';
import { getBlogCatlog } from "../../services/service";
import Blogcatlogsections from "../../components/blogcatlogsections";

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const fetchedData = await getBlogCatlog();
                setData(fetchedData);
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return (
        <>
            <div>
                <p className='text-3xl font-bold sm:text-6xl flex justify-center m-10 p-10 focus-in-expand ' style={{ color: "#BFD8AF" }}>Welcome.</p>
               <p className='flex justify-center'style={{ color: "#BFD8AF", padding:"10px" }}>I share blog posts to help fellow developers, and I’ll be updating it every weekend.</p>
               {loading ? (<>
                    <div style={{ display: 'flex', justifyContent: 'center', height: "500px", alignItems: "center" }}>
                        <span className="loader"></span>
                    </div>
                </>) : (<>
                    <Blogcatlogsections data={data} />
                </>)}
            </div >
        </>
    )
}
export default Blog;