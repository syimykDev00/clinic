import React from 'react';
import helpBracesImg from './../../../assets/img/helpBracesImg.png';

const HelpBraces = () => {
    return (
        <section id="helpBraces">
            <div className="container">
                <div className="helpBraces">
                    <h1>В каких случаях помогут брекеты?</h1>
                    <div className="helpBraces--general">
                        <img src={helpBracesImg} alt="img"/>
                        <div className="helpBraces--general__text">
                            <h2>Несъёмная конструкция зубной ряд
                                которая фиксируется на наружную или внутреннюю поверхность зубов и плавно выравнивает зубной ряд</h2>
                            <div className="helpBraces--general__text--block">
                                <h3>Неправильное расположение зубов</h3>
                            </div>
                            <div className="helpBraces--general__text--block">
                                <h3>Диастема (щели)</h3>
                            </div>
                            <div className="helpBraces--general__text--block">
                                <h3>Скученность зубов</h3>
                            </div>
                            <div className="helpBraces--general__text--block">
                                <h3>Смещение верхней или нижней челюсти</h3>
                            </div>
                            <div className="helpBraces--general__text--block">
                                <h3>Сложные случаи</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpBraces;