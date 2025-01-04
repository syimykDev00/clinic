import React from 'react';
import aboutImage from "../../../assets/img/about.png"

const GynecologiyaAbout = () => {

    // const myNumber = +996224192939;
    return (
        <section id="gynecologiyaAbout">
            <div className="container">
                <div className="gynecologiyaAbout">

                    <h1>О нас</h1>
                    <p>
                        Познакомтесь с нашим основателем клиники Aidarov Clinic
                    </p>
                    <div className="gynecologiyaAbout--blocks">
                        <div className="gynecologiyaAbout--blocks__text">
                            <h2>
                                Айдарова Маргарита Камалдиновна
                            </h2>
                            <p>
                                Айдарова Маргарита Камалдиновна в 2012году окончила ОшГУ медицинский факультет лечебное
                                дело. С 2012 по 2013год проходила интернатуру в Ошской городской териториальной больнице
                                родильном стационаре. В 2014году устроилась ассистеном кафедры «Акушерства и
                                гинекологии» ЮФКГМИПиПК имени С.Б.Даниярова. где работаю по совместительству по сей
                                день. В 2015 году устроилась ночным дежурным врачом акушер-гинекологом в родильный
                                стационар при ТГБ. С 2013года работаю на основной ставке в частном медицинском центре
                                ОсОО Айдарова Камалдина Абдурахмановича, на должности врача акушер-гинеколога и врача
                                ультразвуковой диагностики
                            </p>
                        </div>
                        <div className="gynecologiyaAbout--blocks__title">
                            <img src={aboutImage} alt="img"/>
                            <div className="gynecologiyaAbout--blocks__title--block">
                                <div className="gynecologiyaAbout--blocks__title--block__one">
                                    <h4>Клиенты</h4>
                                    <h5>100+</h5>
                                    <p>
                                        Довольных клиентов по всему
                                        нашему Кыргызстану
                                    </p>
                                </div>
                                <div className="gynecologiyaAbout--blocks__title--block__two">
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

export default GynecologiyaAbout;