import React from 'react';

const PriceTreatmentBraces = () => {
    return (
        <section id="priceTreatmentBraces">
            <div className="container">
                <div className="priceTreatmentBraces">
                    <h1>Сколько будет стоить лечение?</h1>
                    <div className="priceTreatmentBraces--general">
                        <div className="priceTreatmentBraces--general__group">
                            <div className="priceTreatmentBraces--general__group--block">
                                <h3>01. Чек-ап</h3>
                            </div>
                            <h6>-полный осмотр и диагностика;</h6>
                            <h6>-создание цифровых слепков нижней</h6>
                            <h6>при необходимости.</h6>
                            <h6>и верхней челюстей;</h6>
                            <h6>-3D-моделирование зубов;</h6>
                            <h6>-консультация врача;</h6>
                            <h6>-консилиум врачей с опытом</h6>
                            <h6>работы более 15 лет;</h6>
                        </div>
                        <div className="priceTreatmentBraces--general__group">
                            <div className="priceTreatmentBraces--general__group--block">
                                <h3>02. Лечение</h3>
                            </div>
                            <p>Терапевтическое
                                и хирургическое лечение
                                при необходимости.</p>
                        </div>
                        <div className="priceTreatmentBraces--general__group">
                            <div className="priceTreatmentBraces--general__group--block">
                                <h3>03. Брекеты</h3>
                            </div>
                            <h5>1 степень 60 000 сом.(на одну челюсть)</h5>
                            <h5>2 степень 90 000 сом.(на одну челюсть)</h5>
                            <h5>3 степень 120 000 сом.(на одну челюсть)</h5>
                            <h4>ЦЕНЫ БУДУТЬ ЗАВИСЯТЬ ОТ СЛОЖНОСТИ ЗУБОВ И ОТ ВЫБОРА МАТЕРИАЛА БРЕКЕТОВ!</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceTreatmentBraces;