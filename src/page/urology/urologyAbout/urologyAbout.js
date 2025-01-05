import React from 'react';
import aboutImage from "../../../assets/img/about.png"

const UrologyAbout = () => {

    // const myNumber = +996224192939;
    return (
        <section id="urologyAbout">
            <div className="container">
                <div className="urologyAbout">

                    <h1>О нас</h1>
                    <p>
                        Познакомтесь с нашим основателем клиники Aidarov Clinic
                    </p>
                    <div className="urologyAbout--blocks">
                        <div className="urologyAbout--blocks__text">
                            <h2>
                                Доктор Айдаров Чынгыз
                            </h2>
                            <p>
                                Я Айдаров Чынгыз родился в городе Ош. 06.05.1991 год.Окончил школу Карло-Маркса в 2008
                                году. Поступил в Медицинскую академию 2009 году. Окончил мед – академию 2014 году
                                факультет лечебное дело. Поступил в ординатуру 2014 году по специальности врач уролог. С
                                2016 года работал в ОМОКБ до 2019года. С 2019 года работаю в частной клинике Айдарова
                                Камалдина Абдурахмановича. Занимаемся хирургическим и терапевтическим лечением
                                урологических заболевании. Особое направления в области мужского бесплодия.Спермограмма
                            </p>
                        </div>
                        <div className="urologyAbout--blocks__title">
                            <img src={aboutImage} alt="img"/>
                            <div className="urologyAbout--blocks__title--block">
                                <div className="urologyAbout--blocks__title--block__one">
                                    <h4>Клиенты</h4>
                                    <h5>100+</h5>
                                    <p>
                                        Довольных клиентов по всему
                                        нашему Кыргызстану
                                    </p>
                                </div>
                                <div className="urologyAbout--blocks__title--block__two">
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

export default UrologyAbout;