import React from 'react';
import advantagesBracesImg from './../../../assets/img/advantagesBracesImg.png';

const AdvantagesBraces = () => {
    return (
        <section id="advantagesBraces">
            <div className="container">
                <div className="advantagesBraces">
                    <div className="advantagesBraces--generalOne">
                        <div className="advantagesBraces--generalOne__text">
                            <h1>Преимущества брекетов</h1>
                            <p>Мы используем высокотехнологичную, усовершенствованную,
                                индивидуализированную американскую брекет-систему Damon.
                                Обтекаемая и самолигирующая система обеспечивает плавное
                                и естественное перемещение зубов без дискомфортных ощущений.
                            </p>
                        </div>
                        <img src={advantagesBracesImg} alt="img"/>
                    </div>
                    <div className="advantagesBraces--generalTwo">
                        <div className="advantagesBraces--generalTwo__group">
                            <div className="advantagesBraces--generalTwo__group--block">
                                <h3>01</h3>
                            </div>
                            <h6>Гарантированный результат. Установка брекетов взрослым в большинстве случаев –
                                единственный способ эффективной коррекции зубного ряда.</h6>
                        </div>
                        <div className="advantagesBraces--generalTwo__group">
                            <div className="advantagesBraces--generalTwo__group--block">
                                <h3>02</h3>
                            </div>
                            <h6>Современные брекеты мало влияют на эстетику улыбки. Особого упоминания здесь заслуживают
                                невидимые лингвальные системы, которые клеятся на внутреннюю часть зубов (впрочем, их
                                использование возможно далеко не всегда).</h6>
                        </div>
                        <div className="advantagesBraces--generalTwo__group">
                            <div className="advantagesBraces--generalTwo__group--block">
                                <h3>03</h3>
                            </div>
                            <h6>Широкий перечень показаний. Если многие другие ортодонтические конструкции неэффективны
                                в случае серьёзных аномалий, то брекетами успешно исправляют практически любые
                                эстетические проблемы прикуса.</h6>
                        </div>
                        <div className="advantagesBraces--generalTwo__group">
                            <div className="advantagesBraces--generalTwo__group--block">
                                <h3>04</h3>
                            </div>
                            <h6>Отсутствие верхних возрастных ограничений. Устанавливать брекеты для коррекции прикуса
                                можно как в 25, так и в 60. Единственный момент, который при этом нужно учитывать – это
                                то, то с возрастом требуется больше времени на закрепление результата (так называемый
                                ретенционный период увеличивается).</h6>
                        </div>
                        <div className="advantagesBraces--generalTwo__group">
                            <div className="advantagesBraces--generalTwo__group--block">
                                <h3>05</h3>
                            </div>
                            <h6>Сильная боль – не более чем миф. Действительно, в первые дни после установки у пациента
                                могут возникнуть болезненные и дискомфортные ощущения. Это абсолютно нормальное явление,
                                обусловленное тем, что на зубы теперь оказывается непривычное давление. В большинстве
                                случаев речь идёт об умеренных болезненных ощущениях или зуде в дёснах, которые обычно
                                проходят самостоятельно уже через несколько дней.</h6>
                        </div>
                        <div className="advantagesBraces--generalTwo__group">
                            <div className="advantagesBraces--generalTwo__group--block">
                                <h3>06</h3>
                            </div>
                            <h6>Брекеты не оказывают вредного воздействия на зубную эмаль, поскольку в нормальном
                                здоровом состоянии она способна полностью выдерживать нагрузки от такой механической
                                конструкции. Разумеется, если эмаль повреждена, то обязательным условием будет
                                предварительное лечение зубов и полная санация полости рта.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesBraces;