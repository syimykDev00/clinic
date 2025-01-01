import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--general">
                        <div className="footer--general__logo">
                            <h1>AIDAROV CLINIC</h1>
                            <h6>Медицинская лицензия</h6>
                        </div>
                        <div className="footer--general__navbar">
                            <h3>УСЛУГИ</h3>
                            <NavLink to={'/therapy'}><a>Терапия</a></NavLink>
                            <NavLink to={'/surgery'}><a>Хирургия</a></NavLink>
                            <NavLink to={'/dentist'}><a>Стоматология</a></NavLink>
                            <NavLink to={'/lor'}><a>Лор</a></NavLink>
                        </div>
                        <div className="footer--general__navbar">
                            <h3>ДРУГИЕ УСЛУГИ</h3>
                            <NavLink to={'/laboratory'}> <a>Лаборатория</a></NavLink>
                            <NavLink to={'/gynecologist'}><a>Гинекология</a></NavLink>
                            <NavLink to={'/urology'}><a>Урология</a></NavLink>
                            <NavLink to={'/oculist'}><a>Окулист</a></NavLink>
                        </div>
                        <div className="footer--general__adress">
                            <h2>АДРЕСС</h2>
                            <h5>г. Ош, ст. Масалиева 73,</h5>
                            <a href="tel:+996 (776) 000 000">+996 (776) 000 000</a>
                        </div>
                    </div>
                    <div className="footer--line"></div>
                    <h4>© 2025 г.</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;