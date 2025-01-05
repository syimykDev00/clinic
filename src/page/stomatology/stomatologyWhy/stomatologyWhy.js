import React from 'react';
import one from "../../../assets/img/one.svg";
import two from "../../../assets/img/two.svg";
import three from "../../../assets/img/three.svg";
import four from "../../../assets/img/four.svg";


const StomatologyWhy = () => {
    return (
        <section id="stomatologyWhy">
            <div className="container">
                <div className="stomatologyWhy">

                    <h1>Почему клиника Айдарова?</h1>
                    <p>Почему вы должны выбрать именно нас, вот причины</p>

                    <div className="stomatologyWhy--blocks">

                        <div className="stomatologyWhy--blocks__title">
                            <div className="stomatologyWhy--blocks__title--img">
                                <img src={one} alt="img" className="imgDentist"/>
                            </div>
                            <div className="stomatologyWhy--blocks__title--text">
                                <h4>Профессиональная Экспертиза</h4>
                                <h6>
                                    Наши высококвалифицированные стоматологи обладают обширным опытом и профессиональной
                                    экспертизой, гарантируя качественное и безопасное оказание стоматологических услуг.
                                </h6>
                            </div>
                        </div>
                        <div className="stomatologyWhy--blocks__title">
                            <div className="stomatologyWhy--blocks__title--img">
                                <img src={two} alt="img"/>
                            </div>
                            <div className="stomatologyWhy--blocks__title--text">
                                <h4>Инновационные Технологии</h4>
                                <h6>
                                    Мы используем передовые технологии и современное оборудование, чтобы обеспечить
                                    нашим
                                    пациентам высший стандарт стоматологического лечения.
                                </h6>
                            </div>
                        </div>
                        <div className="stomatologyWhy--blocks__title">
                            <div className="stomatologyWhy--blocks__title--img">
                                <img src={three} alt="img" className="imgDentist"/>
                            </div>
                            <div className="stomatologyWhy--blocks__title--text">
                                <h4>Индивидуальный Подход</h4>
                                <h6>
                                    Наша команда придает огромное значение индивидуальному подходу к каждому пациенту.
                                    Мы
                                    слушаем ваши потребности и разрабатываем персонализированный план лечения.
                                </h6>
                            </div>
                        </div>
                        <div className="stomatologyWhy--blocks__title">
                            <div className="stomatologyWhy--blocks__title--img">
                                <img src={four} alt="img"/>
                            </div>
                            <div className="stomatologyWhy--blocks__title--text">
                                <h4>Комфорт и забота</h4>
                                <h6>
                                    Ваш комфорт и удовлетворение - наш приоритет. Наши стоматологические процедуры
                                    проводятся в уютной и дружелюбной обстановке.
                                </h6>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default StomatologyWhy;