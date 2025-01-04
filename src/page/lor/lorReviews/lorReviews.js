import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import user from './../../../assets/img/user.png'

const lorReviews = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <section id="lorReviews">
            <div className="container">
                <div className="lorReviews">

                    <h1>Отзывы</h1>
                    <p>Добрые слова от наших клиентов</p>

                    <Slider {...settings}>
                        <div className="lorReviews--block">
                            <div className="lorReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Бекзат</h4>
                            </div>
                            <h6>
                                Никогда не обращалась к ЛОР врачу, а когда пришлось, поняла,что специалистов по этому
                                профилю очень мало.Где я только не была: 6-я поликлиника, КВД, 30-я больница. Нигде мне
                                не помогли как специалисты. Доктор оень внимательный и добрый человек, внимательно
                                выслушает, подробно объяснила сам процесс лечения, проследила за ходом лечения,
                                убедилась что все прошло успешно. Спасибо ей огромное, Всем советую обращаться к этому
                                КЛАССНОМУ СПЕЦИАЛИСТУ.
                            </h6>
                        </div>
                        <div className="lorReviews--block">
                            <div className="lorReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Жылдыз</h4>
                            </div>
                            <h6>
                                К хорошему врачу под кабинетом очередь, не пробиться. Люди понимают и чувствуют кому
                                довериться, кто поможет.Доктор - Квалифицированный специалист, умная, занимательная. К
                                каждому пациенту найдёт подход, внимательно выслушает ,внимательно осмотрит и назначит
                                лечение , что не мало важно доступное по кошельку, а от себя ещё и даст советы по
                                улучшению состояния здоровья. Дай Бог ей здоровья!
                            </h6>
                        </div>
                        <div className="lorReviews--block">
                            <div className="lorReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Руслан</h4>
                            </div>
                            <h6>
                                У меня хронический тонзиллит. Мне посоветовали обратиться в МЦ Айдаровой к лор врачу.
                                Доктор Чынгыз Айдаров проводит эффективное и правильно подобранное лечение. Советую всем
                                , не пожалеете!
                            </h6>
                        </div>
                        <div className="lorReviews--block">
                            <div className="lorReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Анваржон</h4>
                            </div>
                            <h6>
                                Хочу выразить свою благодарность доктору Чынгызу Айдарову. Замечательный специалист.
                                Очень рад, что 3 года назад в эту клинику Айдарова случайно попал по рекомендациям моего
                                друга на прием именно к этому лор-врачу. Моя проблема была - заложенность носа на
                                протяжении многих лет, без капель для носа не могла дышать. Доктор профессионально
                                подошел к изучению истории болезни, постановки диагноза, проведению лазерной вазотомии.
                                После этого, могу жить и свободно дышать носом! Огромное Вам спасибо, удачи и всех благ.
                            </h6>
                        </div>
                        <div className="lorReviews--block">
                            <div className="lorReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Ислам</h4>
                            </div>
                            <h6>
                                Сегодня побывали на приеме.Хочу всем порекомендовать доктора.Очень
                                профессионально,стерильно,не больно.Доступные цены за отличный сервис.Дети счастливы.
                            </h6>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default lorReviews;