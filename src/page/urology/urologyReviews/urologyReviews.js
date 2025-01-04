import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import user from './../../../assets/img/user.png'

const urologyReviews = () => {

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
        <section id="urologyReviews">
            <div className="container">
                <div className="urologyReviews">

                    <h1>Отзывы</h1>
                    <p>Добрые слова от наших клиентов</p>

                    <Slider {...settings}>
                        <div className="urologyReviews--block">
                            <div className="urologyReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Акжол</h4>
                            </div>
                            <h6>
                                Хочу поблагодарить доктора. этот доктор с большим сердцем, он меня вылечил сейчас мне
                                стало лучше и я болел простатитом и несколькими болезнями. Я очень благодарен этому
                                человеку побольше бы таких докторов. Знает своё дело очень приветливый понимающий
                                заботливый человек. Чтоб никогда он не болел и лечил всех кто заболеет. Никогда не
                                болейте, желаю всем всего наилучшего.
                            </h6>
                        </div>
                        <div className="urologyReviews--block">
                            <div className="urologyReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Маткасым</h4>
                            </div>
                            <h6>
                                Хочу выразить большую благодарность доктору,все
                                вылечил в короткие сроки. Буду
                                рекомендовать однозначно вас
                            </h6>
                        </div>
                        <div className="urologyReviews--block">
                            <div className="urologyReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Айжаркын</h4>
                            </div>
                            <h6>
                                Эта клиника на Просвещения уже 3я куда мы обращались. До этого мужа замучили совсем,
                                назначали не нужные процедуры. В клинике принимал врач уролог Рыльчиков Иван
                                Владимирович. Спасибо большое врачу!!! Грамотно всё объяснил, отменил часть лечения.
                                Рекомендую очень этого врача.
                            </h6>
                        </div>
                        <div className="urologyReviews--block">
                            <div className="urologyReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Нурсултан</h4>
                            </div>
                            <h6>
                                Это не первое мое обращение в клинику, хочу поблагодарить доктора за внимательное
                                отношение, высококвалифецированную медицинскую помощь. Хочется отметить немаловажный
                                факт, мне не было предложенно сдачи лишних анализов и не нужных процедур. Моя проблема
                                была решена, и даны рекомендации на будущее. Рекомендую.
                            </h6>
                        </div>
                        <div className="urologyReviews--block">
                            <div className="urologyReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Төлөгөн</h4>
                            </div>
                            <h6>
                                Спасибо большое , врачу урологу Чынгызу Айдарову, очень вежливый, культурный,
                                компетентный, это ключевые слова которыми можно его охарактеризовать!!! Не пытается
                                развести на деньги, это очень важно в наше время. Вообщем спасибо, я очень доволен !!!
                            </h6>
                        </div>
                        <div className="urologyReviews--block">
                            <div className="urologyReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Бектемир</h4>
                            </div>
                            <h6>
                                Хочу выразить огромную благодарность врачу Чынгызу Айдарову. В марте 2020 обращался к
                                нему по поводу боли в яичке. Доктор Чынгыз сразу определил злокачественное
                                новообразование, определил, что опухоль локализована в пределах органа, дал экстренные
                                рекомендации по лечению, подобрал нужные слова, чтоб я не впадал в панику, а действовал.
                                В итоге, август 2020, я прооперировался, прошел три курса химии и сейчас полностью
                                здоров!!!!!!!!!!!!!!
                            </h6>
                        </div>
                        <div className="urologyReviews--block">
                            <div className="urologyReviews--block__user">
                                <img src={user} alt="img"/>
                                <h4>Бема</h4>
                            </div>
                            <h6>
                                Все на высшем уровне.Доктор реально понимает суть дела,моментально вникает в корень
                                проблемы,выявление причины и ее решение-уровень болезни. Мой муж был наслышан о
                                Александре Владимировиче,друг моего мужа к нему на прием ездит с другого конца города).
                                Спасибо вам большое за то что спасли жизнь моего самого любимого человека мужа!!!
                            </h6>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default urologyReviews;