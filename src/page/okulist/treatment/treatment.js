import React from 'react';

const Treatment = () => {
    return (
        <section id="treatment">
            <div className="container">
                <div className="treatment">
                    <h1>Что лечит врач-офтальмолог?</h1>
                    <div className="treatment--general">
                        <div className="treatment--general__text">
                            <h3>В ОсОО МЦ Айдарова К.А. вы можете обращаться по следующим распространенным видом заболеваний:</h3>
                           <h6>1.Глаукома.</h6>
                           <h6>2.Катаракта.</h6>
                           <h6>3.Нарушения рефракции — близорукость, дальнозоркость, астигматизм.</h6>
                           <h6>4.Косоглазие.</h6>
                           <h6>5.Птоз.</h6>
                           <h6>6.Заболевания сетчатки (отслойка, дистрофия).</h6>
                           <h6>7.Травмы глаз, век, слезных желез.</h6>
                           <h6>8.Воспалительные заболевания глаз (конъюнктивит, кератит, ячмень и др.).</h6>
                           <h6>9.Нарушения цветовосприятия.</h6>
                           <h6>10.Кровоизлияния.</h6>
                        </div>
                        <img src={`https://www.lensmaster.ru/upload/medialibrary/151/151ff9fa7ebf68806acbaf610fa172dd.png`} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Treatment;