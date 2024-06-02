import React from "react";
import GmailIcon from '../asserts/images/Gmail_icon.png';
import OutlookIcon from '../asserts/images/outlookicon.png';
import GitHubIcon from '../asserts/images/githubicon.png';
import TwitterIcon from '../asserts/images/Twittericon.png';
import InstagramIcon from '../asserts/images/Instagram_icon.png';
import LinkedinIcon from '../asserts/images/linkedinicon.png';

const MediaInfo = () => {
    const data = [
        {
            "icon": GmailIcon,
            "title": "Gmail",
            'link': '',
            'username': 'nagendrayakkaladevara@gmail.com',
            'alt': "GmailIcon"
        },
        {
            "icon": OutlookIcon,
            "title": "Outlook",
            'link': '',
            'username': 'sainagendray@outlook.com',
            'alt': "OutlookIcon"
        },
        {
            "icon": LinkedinIcon,
            "title": "LinkedIn",
            'link': 'https://www.linkedin.com/in/sai-nagendra-yakkaladevara-67317419a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            'username': 'Sai Nagendra Yakkaladevara',
            'alt': "LinkedinIcon"
        },
        // {
        //     "icon": GitHubIcon,
        //     "title": "GitHub",
        //     'link': '',
        //     'username': 'nagendrayakkaladevara@gmail.com',
        //     'alt': "GitHubIcon"
        // },
        {
            "icon": TwitterIcon,
            "title": "X",
            'link': 'https://twitter.com/nagendra_s_y',
            'username': '@nagendra_s_y',
            'alt': "TwitterIcon"
        },
        {
            "icon": InstagramIcon,
            "title": "Instagram",
            'link': 'https://www.instagram.com/nagendra_yakkaladevara/',
            'username': 'nagendra_yakkaladevara',
            'alt': "InstagramIcon"
        }
    ]
    return (
        <>
            <div className="flex justify-around flex-wrap">
                {data.map((item, index) => (
                    <div key={index} className="linkedsectioncustom p-4 m-2 flex items-center shake-bottom" style={{ borderRadius: "55px" }}>
                        <div style={{ width: "20%" }}>
                            <img src={item.icon} alt={item.alt} className='mediaIcon m-1' />
                        </div>
                        <div style={{ width: "80%" }}>
                            <p>{item.title}</p>
                            <a href={item.link} target="_blank" style={{ color: "#E1F0DA", fontSize: "13px" }}>{item.username}</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MediaInfo;