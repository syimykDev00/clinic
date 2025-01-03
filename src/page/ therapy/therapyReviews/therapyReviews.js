import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import user from './../../../assets/img/user.png'

const Reviews = () => {

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
        <section id="reviews">
            <div className="container">
                <div className="reviews">

                    <h1>Отзывы</h1>
                    <p>Добрые слова от наших клиентов</p>

                    <Slider {...settings}>
                        <div className="reviews--block">
                            <div className="reviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Элина</h4>
                            </div>
                            <h6>
                                приходила на прием к терапевту МЦ Айдарова: врач ответила на все интересующие вопросы,
                                была деликатна и очень доброжелательна. Назначила качественное лечение.
                            </h6>
                        </div>
                        <div className="reviews--block">
                            <div className="reviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Исмоилжон</h4>
                            </div>
                            <h6>
                                приходил на осмотр к терапевту Шагановой Ольге Александровне: хочу сказать спасибо,
                                записался и попал на прием в один день, очень этому рад, хотел пройти обследование для
                                себя, т.к. в праздники есть свободное время. Врач назначила необходимые анализы, приду
                                по их готовности. Очень вам благодарен.
                            </h6>
                        </div>
                        <div className="reviews--block">
                            <div className="reviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Бакыт</h4>
                            </div>
                            <h6>
                                Наблюдаюсь у терапевта: доктор хорошо относится к пациентам, с ним приятно общаться. Все
                                доступно объясняет. Принимает всегда без задержек и в назначенное время. Лечение
                                назначает правильное, есть положительный результат.
                            </h6>
                        </div>
                        <div className="reviews--block">
                            <div className="reviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Аяна</h4>
                            </div>
                            <h6>
                                Приходила на приеме у терапевта в клинике Айдарова: грамотный специалист. Углубленно
                                подходит к проблеме. Я осталась довольна. Персонал вежливый, доброжелательный. Всегда
                                советую Вашу клинику знакомым. Удачи и процветания вам. Спасибо.
                            </h6>
                        </div>
                        <div className="reviews--block">
                            <div className="reviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Нурзат</h4>
                            </div>
                            <h6>
                                Была на приеме у терапевта в клинике Айдарова, так как моя подруга давно ходит сюда. А
                                мне доктор нравится, как специалист, и как человек. Препараты подбирает разумно, все
                                продумывает и анализирует. Мне нравится, что она не уходит от ответов. Открыто общается
                                с пациентом, отвечает на все вопросы. Меня все устраивает. Спасибо Вам.
                            </h6>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Reviews;