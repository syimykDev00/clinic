import React from 'react';
import aboutImage from "../../../assets/img/about.png"

const About = () => {

    // const myNumber = +996224192939;
    return (
        <section id="about">
            <div className="container">
                <div className="about">

                    <h1>О нас</h1>
                    <p>
                        Познакомтесь с нашим основателем клиники Aidarov Clinic
                    </p>
                    <div className="about--blocks">
                        <div className="about--blocks__text">
                            <h2>
                                Айдаров Камалдин
                                Абдурахманович
                            </h2>
                            <p>
                                Оснаватель ОсОО Медицинского центра Айдарова Камалдина заслуженный врач акушер-гинеколог
                                и директор МЦ Айдаров Камалдин Абдурахманович.
                                <br/> <br/>
                                Родился 16.03.1964году в ЖалалАбадской области р Базар-Коргон село Карача. В 1988году
                                закончил КГМА имени Ахунбаева в г Бишкек после прошол ординатуру в г Ош родильном
                                стационаре Ошской териториальной городской больницы. Там же работал с 1989года по
                                2003год после открыл свою первую частную клинику возле ТГБ№2.
                            </p>
                        </div>
                        <div className="about--blocks__title">
                            <img src={aboutImage} alt="img"/>
                            <div className="about--blocks__title--block">
                                <div className="about--blocks__title--block__one">
                                    <h4>Клиенты</h4>
                                    <h5>100+</h5>
                                    <p>
                                        Довольных клиентов по всему
                                        нашему Кыргызстану
                                    </p>
                                </div>
                                <div className="about--blocks__title--block__two">
                                    <h4>Врачи</h4>
                                    <h5>15+</h5>
                                    <p>
                                        Лучшие и опытные специалисты в
                                        своем деле
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;