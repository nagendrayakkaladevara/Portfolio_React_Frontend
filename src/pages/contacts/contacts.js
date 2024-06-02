import React, { useState, useEffect } from "react";
import '../../styles/styles.css';
import GmailIcon from '../../asserts/images/Gmail_icon.png';
import OutlookIcon from '../../asserts/images/outlookicon.png';
import TwitterIcon from '../../asserts/images/Twittericon.png';
import InstagramIcon from '../../asserts/images/Instagram_icon.png';
import LinkedinIcon from '../../asserts/images/linkedinicon.png';
import { postContact } from "../../services/service";

const Contacts = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
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
            'link': '',
            'username': 'nagendra_yakkaladevara',
            'alt': "InstagramIcon"
        }
    ]

    const [formData, setFormData] = useState({
        name: '',
        mailaddress: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [dailyquota, setDailyquota] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name' || name === 'mailaddress') {
            // Validate length
            if (value.trim().split(/\s+/).length > 100) {
                alert('Max limit for Name & email is 100 characters')
                return; // Don't update state if exceeds 100 words
            }
            // Validate special characters
            // if (!/^[a-zA-Z0-9]+$/.test(value)) {
            //     alert('Only special characters are not allowed')
            //     return; // Don't update state if contains special characters
            // }
        }

        // Validate textarea length
        if (name === 'message' && value.trim().split(/\s+/).length > 500) {
            alert('Message is limited to 500 characters')
            return; // Don't update state if exceeds 500 words
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (formData.name === '' || formData.message === '' || formData.mailaddress === '') {
            alert('Please enter all fields.')
            return
        }

        if (/^[^\w\s]+$/.test(formData.name.trim())) {
            alert('Name cannot contain only special characters or spaces.');
            return;
        }

        if (/^[^\w\s]+$/.test(formData.message.trim())) {
            alert('Message cannot contain only special characters or spaces.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.mailaddress)) {
            alert('Please enter a valid email address.');
            return;
        }

        const today = new Date();
        const dateString = today.toISOString().slice(0, 10); // Format: YYYY-MM-DD

        const dateFromStorage = localStorage.getItem('NagendraYakkaladevaratodaysDate');

        if (dateFromStorage === dateString) {
            alert('Per day you can try only one time!!')
            return
        } else {
            setLoading(true)
            try {
                const response = await postContact([formData]);
                console.log('Data posted successfully:', response);
                setTimeout(() => {
                    setSucess(true)
                }, 2000);
                localStorage.setItem('NagendraYakkaladevaratodaysDate', dateString);
            } catch (error) {
                console.error('Error posting data:', error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        }
    };

    return (
        <>
            {loading ? (<>
                <div style={{ display: 'flex', justifyContent: 'center', height: "500px", alignItems: "center" }}>
                    <span className="Mailloader"></span>
                </div>
            </>) : (<>
                {!sucess &&
                    <div>
                        <p className='text-3xl font-bold sm:text-6xl flex justify-center m-10 p-10 focus-in-expand' style={{ color: "#BFD8AF" }}>Contact me.</p>
                        <div className='flex justify-center flex-col gap-5 m-5'>
                            <input type='text' placeholder='Name' className='p-2 rounded-md inputtagcustom focus-in-expand' value={formData.name}
                                name="name" onChange={handleChange} />
                            <input type='email' placeholder='Mail address' className='p-2 rounded-md inputtagcustom focus-in-expand' value={formData.mailaddress}
                                name="mailaddress" onChange={handleChange} />
                            <textarea placeholder='Message' className='p-2 rounded-md inputtagcustom focus-in-expand' value={formData.message}
                                name="message" onChange={handleChange} />
                            <button className='rounded-md p-2 fucouseeffect' style={{ background: "#A5DD9B", fontWeight: "900" }} onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                }
            </>)}

            {sucess &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "500px", flexDirection: 'column' }}>
                    <div>
                        <picture>
                            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp" type="image/webp" />
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.gif" alt="🙂" width="62" height="62" />
                        </picture>
                    </div>
                    <br />
                    <p className='focus-in-expand' style={{ color: 'white' }}>Thank you for reaching out. I&apos;ll be in touch with you soon.</p>
                </div>
            }


            <br />
            <div className="flex justify-around flex-wrap focus-in-expand">
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
export default Contacts;