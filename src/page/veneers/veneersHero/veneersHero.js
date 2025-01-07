import React from 'react';

const VeneersHero = () => {

    const myNumber = +996776000000

    return (
        <section id="veneersHero">
            <div className="veneersHeroBlock">
                <div className="container">
                    <div className="veneersHero">
                        <h1>Получите улыбку как у звёзд благодаря
                            сверхтонким винирам от доктора
                            Айдарова</h1>
                        <p>С помощью передовых методик создаём белоснежную улыбку, которой хочется делиться с
                            окружающими</p>
                        <a href={`https://wa.me/${myNumber}?text=%20Здравствуйте%20я%20бы%20хотел%20записаться к вам...`}>
                            <button>Записаться на прием</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VeneersHero;