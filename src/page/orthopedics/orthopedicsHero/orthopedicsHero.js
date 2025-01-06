import React from 'react';

const OrthopedicsHero = () => {

    const myNumber = +996776000000

    return (
        <section id="orthopedicsHero">
            <div className="orthopedicsHeroBlock">
                <div className="container">
                    <div className="orthopedicsHero">
                        <h1>Ортопедия</h1>
                        <p>Частичное или полное
                            отсутствия зубов можно
                            восстановить с несъемный
                            мостовидными конструкциями
                            или съемными.</p>
                        <a href={`https://wa.me/${myNumber}?text=%20Здравствуйте%20я%20бы%20хотел%20записаться к вам...`}>
                            <button>Записаться на прием</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrthopedicsHero;