import React from 'react';
import {NavLink} from "react-router-dom";
import one from './../../../assets/img/imgOne.svg'

const StomatologyOurServices = () => {
    const alt = "image";
    return (
        <section id="stomatologyOurServices">
            <div className="container">
                <div className="stomatologyOurServices">
                    <h1>Услуги Стоматологии</h1>
                    <p>
                        Наши услуги - это комплексное уход за вашим устным здоровьем.
                    </p>
                    <div className="stomatologyOurServices--blocks">
                        <NavLink to={'/dentist'}>
                            <div>
                                <img src={one} alt={alt}/>
                                <h3> О стоматологии</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/dentist/implantation'}>
                            <div>
                                <img src={one} alt={alt}/>
                                <h3>Имплантация</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/dentist/orthopedics'}>
                            <div>
                                <img src={one} alt={alt}/>
                                <h3>Ортопедия</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/dentist/veneers'}>
                            <div>
                                <img src={one} alt={alt}/>
                                <h3>Виниры</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/dentist/braces'}>
                            <div>
                                <img src={one} alt={alt}/>
                                <h3>Брекеты</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/dentist/dentistTherapy'}>
                            <div>
                                <img src={one} alt={alt}/>
                                <h3>Терапия</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/dentist/whitening'}>
                            <div>
                                <img src={one} alt={alt}/>
                                <h3>Отбеливание</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StomatologyOurServices;