import React from 'react';

const ImplantationSpecies = () => {
    return (
        <section id="implantationSpecies">
            <div className="container">
                <div className="implantationSpecies">
                    <h1>Виды имплантации</h1>
                    <h2>Выбор способа зависит от клинической ситуации пациента</h2>
                    <div className="implantationSpecies--general">
                        <div className="implantationSpecies--general__groupOne">
                            <h3>КЛАССИЧЕСКИЙ</h3>
                            <h4>Имплантация происходит после 2
                                месяцев с момента удаления зуба,
                                а установка коронки ещё через
                                несколько месяцев.</h4>
                        </div>
                        <div className="implantationSpecies--general__groupTwo">
                            <h3>ОДНОМОМЕНТНЫЙ</h3>
                            <h4>Установка имплантата проходит
                                сразу после удаления зуба.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImplantationSpecies;