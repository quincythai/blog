import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Footer.css';

function Footer() {
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }
    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <footer className="footer">
                <a href="/about">About Us</a>
                    <p>&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
                    <p>Current Time: {currentTime}</p>
            </footer>
        </>
    );
}
export default Footer;