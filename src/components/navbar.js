
import * as React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

const NavBar = () => {
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contacts', label: 'Contacts' },
        { href: '/blog', label: 'Blog' },
    ];

    return (
        <header className='flex justify-center m-5'>
            <div className='flex justify-around w-9/12 p-2 border-2 rounded-lg z-10 Customblur' style={{ fontSize: "15px" }}>
                {navLinks.map((link) => (
                    <Link key={link.href} to={link.href}>
                        <p className='textColor'>{link.label}</p>
                    </Link>
                ))}
            </div>
        </header>
    );
};

export default NavBar;