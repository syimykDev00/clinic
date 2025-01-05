import React from 'react';

const StomatologyHero = () => {

    const myNumber = +996224192939;

    return (
        <section id="stomatologyHero">
            <div className="container">
                <div className="stomatologyHero">
                    <h1>
                        Ваша улыбка - наша забота!
                    </h1>
                    <p>
                        Всем Ассолому алейкум! Дорогой мой читатель, добро пожаловать в нашу клинику. Клиника Айдарова
                        всегда будет стремиться, только к качестве и красоте с инновационными технологиями.
                    </p>
                    <div className="stomatologyHero--buttons">
                        <a href={`https://wa.me/${myNumber}?text=%20Саламатсызбы%20мен%20Стоматологко%20жазылайын%20дегем%20`}>
                            <button>Записаться на прием</button>
                        </a>
                        <a href="tel:+996224192939">
                            <button>0776245758</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StomatologyHero;