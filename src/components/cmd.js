import React, { useState,useEffect } from 'react';
import '../styles/styles.css';
import CMSHeaderIcon from '../asserts/images/WIndows-Terminal-icon.png'

const Popup = ({ isOpen, togglePopup }) => {

    useEffect(() => {
        if (isOpen) {
            window.scrollTo(0, 0);
        }
    }, [isOpen]);

    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    const handleInputChange = (event) => {
        setInput(event.target.value.toLowerCase());
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            processCommand();
        }
    };

    const processCommand = () => {
        const command = input.trim();
        let result = [];

        switch (command) {
            case 'help':
                result.push('List of available commands:');
                // result.push('1. dir - Display options available to view');
                result.push('1. date - Display current date');
                result.push('2. clear - Clear the screen');
                result.push('3. experience - Display experience information');
                result.push('4. projects - Display projects information');
                result.push('5. contacts - Display contact information');
                result.push('6. education - Display education information');
                result.push('7. skills - Display skills information');
                result.push('8. gmail - Display Gmail information');
                result.push('9. outlook - Display Outlook information');
                result.push('10. x - Display X information');
                // result.push('12. newblogpost - Display new blog post information');
                result.push('11. hobbies - Display hobbies information');
                break;
            case 'date':
                result.push(new Date().toLocaleString());
                break;
            case 'experience':
                result.push('Corporate Work Experience:');
                result.push('Prodapt Solutions Private Limited.');
                result.push('Associate Software Engineer');
                result.push('14/Mar/2022 - Till date');
                result.push('Responsibility : Web Developer');
                result.push('No of Applications Developed: 04');
                break;
            case 'projects':
                result.push('Personal projects:');
                result.push('https://ecorsuapp.netlify.app/');
                result.push('https://admin-ecorsuapp.netlify.app/');
                result.push('https://documentcloset.netlify.app/');
                result.push('https://freakingweatherapp.netlify.app/');
                result.push('https://searchmovie123.netlify.app/');
                break;
            case 'education':
                result.push('Education:');
                result.push('Graduation');
                result.push('Gayatri Vidya Parishad(A) - Vizag');
                result.push('2017-2021');
                result.push('Intermediate');
                result.push('Sasi Junior College - Velivennu');
                result.push('2015-2017');
                result.push('Secondary School Certificate (SSC)');
                result.push('Bhashyam Public School - Vizag');
                result.push('2015');
                break;
            case 'contacts':
                result.push('Education:');
                result.push('Gmail - nagendrayakkaladevara@gmail.com');
                result.push('nagendrayakkaladevara - @nagendra_s_y');
                result.push('Outlook - sainagendray@outlook.com');
                result.push('Instagram - nagendra_yakkaladevara');
                break;
            case 'skills':
                result.push('Skills:');
                result.push('HTML 5');
                result.push('CSS 3');
                result.push('JavaScript');
                result.push('React');
                result.push('NextJs');
                result.push('ExpressJs');
                result.push('Mongodb');
                result.push('Github');
                result.push('SVN');
                break;
            case 'gmail':
                result.push('nagendrayakkaladevara@gmail.com');
                break;
            case 'outlook':
                result.push('sainagendray@outlook.com');
                break;
            case 'x':
                result.push('nagendrayakkaladevara - @nagendra_s_y');
                break;
            case 'hobbies':
                result.push('Hobbies:');
                result.push('Coding');
                result.push('Workout');
                result.push('Music');
                result.push('Cricket viewing');
                result.push('Newscast watching');
                result.push('Photography');
                result.push('Reading Books');
                break;
            case 'clear':
                setOutput([]);
                break;
            default:
                if (command.startsWith('echo ')) {
                    result.push(command.substring(5));
                } else {
                    result.push(`Command not found: ${command}`);
                }
        }

        setOutput((prevOutput) => [...prevOutput, ...result]);
        setInput('');
    };

    return (
        <div>
            {isOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className='CMDwindow'>
                            <div className='HeaderSection'>

                                <div className='PowerShellTextdiv'>
                                    <img src={CMSHeaderIcon} style={{ width: '20px', height: "20px" }} />
                                    <p className='PowerShellText'>Windows PowerShell</p>
                                </div>


                                <div className='HeaderButtonDiv'>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-dash" viewBox="0 0 16 16" onClick={togglePopup} style={{cursor:"pointer"}}>
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="white" className="bi bi-square" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={togglePopup} style={{ cursor: "pointer" }} title='Close' >
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                    </svg>

                                </div>
                            </div>

                            <div className="command-interface">
                                <div style={{ display: 'flex', alignItems: "center", gap: "5px" }}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-info-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                    </svg>
                                    <p style={{ fontSize: "12px", color: "white" }}>Try help</p>
                                </div>
                                <div className="output" style={{ background: "#0c0c0c" }}>
                                    {output.map((line, index) => (
                                        <div key={index} style={{ color: "white", fontSize: "12px" }}>{line}</div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', background: "#0c0c0c" }}>
                                    <p className='CommendLine'>nagendrayakkaladevara
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </p>
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={handleInputChange}
                                        onKeyPress={handleEnterPress}
                                        placeholder="_"
                                        style={{ background: "none", outline: "none", color: "white", fontSize: "15px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;
