import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const myNumber = "+996224192939";

    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    {/* Логотип */}
                    <NavLink to="/" className="header__logo">
                        <h1>
                            AIDAROV <span>CLINIC</span>
                        </h1>
                    </NavLink>

                    {/* Навигация */}
                    <nav className="header--nav">
                        <NavLink to="/#about" className="header--nav__link">
                            О клинике
                        </NavLink>
                        <NavLink to="/#ourServices" className="header--nav__link">
                            Услуги
                        </NavLink>
                        <a
                            href={`https://wa.me/${myNumber}?text=Здравствуйте, хочу записаться.`}
                            className="header--nav__link"
                        >
                            Контакты
                        </a>
                    </nav>

                    {/* Бургер-меню */}
                    <div className="navigation">
                        {/* Чекбокс для бургер-меню */}
                        <input
                            type="checkbox"
                            className="navigation__checkbox"
                            id="navi-toggle"
                        />

                        {/* Кнопка бургера */}
                        <label htmlFor="navi-toggle" className="navigation__button">
                            <span className="navigation__icon">&nbsp;</span>
                        </label>

                        {/* Фон бургер-меню */}
                        <div className="navigation__background">&nbsp;</div>

                        {/* Список навигации */}
                        <nav className="navigation__nav">
                            <ul className="navigation__list">
                                <li className="navigation__item">
                                    <NavLink to="/#about" className="navigation__link">
                                        О клинике
                                    </NavLink>
                                </li>
                                <li className="navigation__item">
                                    <NavLink to="/#ourServices" className="navigation__link">
                                        Услуги
                                    </NavLink>
                                </li>
                                <li className="navigation__item">
                                    <a
                                        href={`https://wa.me/${myNumber}?text=Здравствуйте, хочу записаться.`}
                                        className="navigation__link"
                                    >
                                        Контакты
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
