import React from 'react';

const HirurgiaHero = () => {

    const myNumber = +996776000000

    return (
        <section id="hirurgiaHero">
            <div className="container">
                <div className="hirurgiaHero">
                    <h1>Хирургия</h1>
                    <p>Хирургическое отделение МЦ Айдарова К.А - оснащен всем необходимым качественным современным
                        оборудованием, на котором работают высококвалифицированные врачи.</p>
                    <a href={`https://wa.me/${myNumber}?text=%20Здравствуйте%20я%20бы%20хотел%20записаться к вам...`}>
                        <button>Записаться на прием</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HirurgiaHero;