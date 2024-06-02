import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

function formatDate(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const date = new Date(dateString);

    // Get day, month, and year
    const day = daysOfWeek[date.getDay()];
    const dayOfMonth = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month starts from 0
    const year = String(date.getFullYear());

    // Return formatted date string with day name
    return `${dayOfMonth}-${month}-${year},${day}.`;
}

const Blogcatlogsections = ({ data }) => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    // Filter function to filter data based on selected category
    const filteredData = selectedCategory
        ? data.filter(item => item.categories.includes(selectedCategory))
        : data;

    const sortedData = [...filteredData].sort((a, b) => new Date(b.date) - new Date(a.date));




    return (
        <>
            <div className="flex justify-center">
                <select onChange={(e) => setSelectedCategory(e.target.value)} className="p-1" style={{ borderRadius: "5px", outline: "none" }}>
                    <option value="">All</option>
                    {Array.from(new Set(data.flatMap(item => item.categories))).map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/* {data &&
                data.map((item, index) => (
                    <Link to={`/blog/${item.id}`} key={index}>
                        <div className='tranperentblur m-10 p-5 shadow-pop-brConstent' style={{ cursor: "pointer" }}>
                            <p className='flex justify-end blogcarddate' style={{ fontSize: "10px" }}>{item.date}</p>
                            <p className="blogcardtitle">{item.title}</p>
                            <p className="blogcarddiscription">{item.into}</p>
                        </div>
                    </Link>
                ))
            } */}
            {sortedData.map((item, index) => (
                <Link to={`/blog/${item.id}`} key={index}>
                    <div className='tranperentblur m-10 p-5 shadow-pop-brConstent' style={{ cursor: "pointer" }}>
                        <p className='flex justify-end blogcarddate' style={{ fontSize: "10px" }}>{formatDate(item.date)}</p>
                        <p className="blogcardtitle">{item.title}</p>
                        <p className="blogcarddiscription">{item.into}</p>
                    </div>
                </Link>
            ))}
        </>
    )
}
export default Blogcatlogsections;