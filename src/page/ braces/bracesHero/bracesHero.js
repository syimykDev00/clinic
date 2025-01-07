import React from 'react';

const BracesHero = () => {

    const myNumber = +996776000000

    return (
        <section id="bracesHero">
            <div className="bracesHeroBlock">
                <div className="container">
                    <div className="bracesHero">
                        <h1>Получите обворожительную и функциональную
                            улыбку с удобными брекет-системами</h1>
                        <p>Исправление прикуса с помощью несъёмных
                            ортодонтических конструкций. Эффективный
                            способ борьбы с проблемой искривлённых
                            зубов и неправильного прикуса.</p>
                        <a href={`https://wa.me/${myNumber}?text=%20Здравствуйте%20я%20бы%20хотел%20записаться к вам...`}>
                            <button>Записаться на прием</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BracesHero;