import React from 'react';

const WhiteningHero = () => {

    const myNumber = +996776000000

    return (
        <section id="whiteningHero">
            <div className="whiteningHeroBlock">
                <div className="container">
                    <div className="whiteningHero">
                        <h1>Отбеливания</h1>
                        <p>Белоснежная улыбка без вреда для зубов!</p>
                        <h2>Метод 3-х этапного отбеливание:</h2>
                        <h3>1.Ультра звуковая 500сом</h3>
                        <h3>2.Полировка с пастой 500сом</h3>
                        <h3>3.Air Flow 500сом</h3>
                        <a href={`https://wa.me/${myNumber}?text=%20Здравствуйте%20я%20бы%20хотел%20записаться к вам...`}>
                            <button>Записаться на прием</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhiteningHero;