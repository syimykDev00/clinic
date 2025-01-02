import React from 'react';
import advantagesIconOne from './../../../assets/img/advantagesIconOne.svg'
import advantagesIconTwo from './../../../assets/img/advantagesIconTwo.svg'
import advantagesIconThree from './../../../assets/img/advantagesIconThree.svg'
import advantagesIconFour from './../../../assets/img/advantagesIconFour.svg'
import advantagesIconFive from './../../../assets/img/advantagesIconFive.svg'
import advantagesIconSix from './../../../assets/img/advantagesIconSix.svg'

const Advantages = () => {
    return (
        <section id="advantages">
            <div className="container">
                <div className="advantages">
                    <h1>Преимущества отделении</h1>
                    <div className="advantages--general">
                        <div className="advantages--general__group">
                            <div className="advantages--general__group--groupIcon">
                                <img src={advantagesIconOne} alt="img"/>
                            </div>
                            <h6>Более 100
                                специалистов</h6>
                        </div>
                        <div className="advantages--general__group">
                            <div className="advantages--general__group--groupIcon">
                                <img src={advantagesIconTwo} alt="img"/>
                            </div>
                            <h6>Более 35 000
                                довольных клиентов</h6>
                        </div>
                        <div className="advantages--general__group">
                            <div className="advantages--general__group--groupIcon">
                                <img src={advantagesIconThree} alt="img"/>
                            </div>
                            <h6>Станционар на 15
                                койко-мест</h6>
                        </div>
                        <div className="advantages--general__group">
                            <div className="advantages--general__group--groupIcon">
                                <img src={advantagesIconFour} alt="img"/>
                            </div>
                            <h6>Более 30
                                специальностей</h6>
                        </div>
                        <div className="advantages--general__group">
                            <div className="advantages--general__group--groupIcon">
                                <img src={advantagesIconFive} alt="img"/>
                            </div>
                            <h6>Современные
                                оборудование</h6>
                        </div>
                        <div className="advantages--general__group">
                            <div className="advantages--general__group--groupIcon">
                                <img src={advantagesIconSix} alt="img"/>
                            </div>
                            <h6>Высококвалифици-
                                рованные специалисты</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;