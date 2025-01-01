import React from 'react';
import {NavLink} from "react-router-dom";
import one from './../../../assets/img/imgOne.svg'
import two from './../../../assets/img/imgTwo.svg'
import three from './../../../assets/img/imgThree.svg'
import four from './../../../assets/img/imgFour.svg'
import five from './../../../assets/img/imgFive.svg'
import six from './../../../assets/img/imgSix.svg'
import seven from './../../../assets/img/imgSeven.svg'
import eigth from './../../../assets/img/imgEigth.svg'

const OurServices = () => {
    const alt = "image";
    return (
        <section id="ourServices">
            <div className="container">
                <div className="ourServices">
                    <h1>Услуги клиники</h1>
                    <p>
                        Наши услуги - это комплексное уход за вашим устным здоровьем.
                    </p>
                    <div className="ourServices--blocks">
                        <NavLink to={'/dentist'}>
                            <div>
                                <img src={one} alt={alt}/>
                                <h3>Стоматология</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/surgery'}>
                            <div>
                                <img src={two} alt={alt}/>
                                <h3>Хирургия</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'therapy'}>
                            <div>
                                <img src={three} alt={alt}/>
                                <h3>Терапия</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/oculist'}>
                            <div>
                                <img src={four} alt={alt}/>
                                <h3>Окулист</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/laboratory'}>
                            <div>
                                <img src={five} alt={alt}/>
                                <h3>Лаборотория</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/gynecologist'}>
                            <div>
                                <img src={six} alt={alt}/>
                                <h3>Гинекология</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/urology'}>
                            <div>
                                <img src={seven} alt={alt}/>
                                <h3>Урология</h3>
                            </div>
                        </NavLink>
                        <NavLink to={'/lor'}>
                            <div>
                                <img src={eigth} alt={alt}/>
                                <h3>Лор</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;