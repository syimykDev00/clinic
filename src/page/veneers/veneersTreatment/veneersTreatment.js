import React from 'react';
import veneersTreatment from './../../../assets/img/veneersTreatmentImg.jpg';

const VeneersTreatment = () => {
    return (
        <section id="veneersTreatment">
            <div className="container">
                <div className="veneersTreatment">
                    <img src={veneersTreatment} alt="img"/>
                    <div className="veneersTreatment--text">
                        <h1>Любое правильное ортодонтическое лечение (исправление прикуса,
                            имплантация зубов или виниры) начинается с полной диагностики текущего состояния пациента, — чекапа.</h1>
                        <p>В нашей клинике чекап не растягивается на несколько приемов, его можно пройти всего за 40-60 минут</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VeneersTreatment;