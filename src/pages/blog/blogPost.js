import React, { useState, useEffect } from "react";
import '../../styles/styles.css';
import { useParams } from "react-router-dom";
import { getBlog } from "../../services/service";
import CodeEditor from '@uiw/react-textarea-code-editor';


export function formatDate(dateString) {
    const date = new Date(dateString);

    // Get day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month starts from 0
    const year = String(date.getFullYear());

    // Return formatted date string
    return `${day}-${month}-${year}`;
}

const BlogPost = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { blogId } = useParams();
    const Id = blogId;

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const fetchedData = await getBlog(Id);
                setData(fetchedData);
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [Id]);

    return (
        <>
            {loading &&
                <div style={{ height: "100vh", display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                    <div className="loader" > </div>
                </div>}

            {data &&
                <>
                    <div style={{ display: "none" }}>
                        <h1>{data.title}</h1>
                        <p>Date: {data.date}</p>
                        <div>
                            <h2>Description</h2>
                            {data.description.map((desc, index) => (
                                <div key={index}>
                                    <p>{desc.paragraph1}</p>
                                    <p>{desc.paragraph2}</p>
                                    <p>{desc.paragraph3}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'none' }}>
                            <h2>Images</h2>

                        </div>
                        <p>Code: {data.code}</p>

                        <p>
                            Link: <a href={data.link}>{data.link}</a>
                        </p>
                        <p>Created At: {data.createdAt}</p>
                        <p>Updated At: {data.updatedAt}</p>
                    </div>
                    {/* <div style={{ height: "100vh" }}> */}
                        <div className='flex justify-center  m-10 '  >
                            <div className='blogPostSection p-5'>
                                <div>
                                    <p className='text-3xl font-bold sm:text-1xl flex justify-start focus-in-expand' style={{ color: "#12372A" }}>{data.title}</p>
                                    <p className='BlogDate'>{formatDate(data.date_published)}</p>
                                    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                                        {data.categories.map((items, index) => {
                                            return <p key={index} style={{ fontSize: "10px" }}>{items}</p>;
                                        })}
                                    </div>
                                </div>
                                <br />
                                <a href={data.link} target='_blank' style={{ fontSize: "12px", color: 'blue', textDecoration: "underline" }}>{data.link}</a>
                                <br />
                                <br />
                                {data.description.map((desc, index) => (
                                    <div className='blogdiscription focus-in-expand' key={index}>
                                        <p>{desc.paragraph1}</p>
                                        <br />
                                        {data.code !== '' &&
                                            <>
                                                < CodeEditor
                                                    value={data.code}
                                                    language="js"
                                                    placeholder="Please enter JS code."
                                                    // onChange={(evn) => setCode(evn.target.value)}
                                                    padding={15}
                                                    style={{
                                                        backgroundColor: "#000000",
                                                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                                                    }}
                                                />
                                                <br />
                                            </>
                                        }

                                        <p>{desc.paragraph2}</p>
                                        <br />
                                        <p>{desc.paragraph3}</p>
                                    </div>
                                ))}
                            </div>
                        {/* </div > */}
                    </div>
                </>}


        </>
    )
}
export default BlogPost;