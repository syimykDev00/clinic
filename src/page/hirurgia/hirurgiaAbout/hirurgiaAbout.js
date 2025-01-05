import React from 'react';
import aboutImage from "../../../assets/img/about.png"

const HirurgiaAbout = () => {

    // const myNumber = +996224192939;
    return (
        <section id="hirurgiaAbout">
            <div className="container">
                <div className="hirurgiaAbout">

                    <h1>О нас</h1>
                    <p>
                        Познакомтесь с нашим основателем клиники Aidarov Clinic
                    </p>
                    <div className="hirurgiaAbout--blocks">
                        <div className="hirurgiaAbout--blocks__text">
                            <h2>
                                Айдаров Камалдин
                                Абдурахманович
                            </h2>
                            <p>
                                Центр хирургии оказывает плановую медицинскую помощь. Оперативное лечение осуществляется
                                в соответствии с современными тенденциями развития хирургии. При этом используются
                                новейшие операционные методики: малоинвазивные (малотравматичные) оперативные
                                вмешательства с коротким периодом реабилитации, современный шовный материал, новейшее
                                эндоскопическое оборудование. Для послеоперационной реабилитации широко применяются
                                новые гипоаллергенные перевязочные средства, одноразовые инструменты, современные
                                фармпрепараты.
                                Коллектив отделения постоянно трудится над освоением и внедрением новейших методов
                                диагностики и лечения своих пациентов.
                                Имеется опыт совместного проведения операций, мастер-классов. В сложных случаях
                                проводятся консультации больных посредством on-line консультаций.
                            </p>
                        </div>
                        <div className="hirurgiaAbout--blocks__title">
                            <img src={aboutImage} alt="img"/>
                            <div className="hirurgiaAbout--blocks__title--block">
                                <div className="hirurgiaAbout--blocks__title--block__one">
                                    <h4>Клиенты</h4>
                                    <h5>100+</h5>
                                    <p>
                                        Довольных клиентов по всему
                                        нашему Кыргызстану
                                    </p>
                                </div>
                                <div className="hirurgiaAbout--blocks__title--block__two">
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

export default HirurgiaAbout;