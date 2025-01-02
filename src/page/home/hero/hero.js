import React from 'react';

const Hero = () => {

    const myNumber = +996776000000

    return (
        <section id="hero">
            <div className="heroBlock">
                <div className="container">
                    <div className="hero">
                        <h1>Ваша великолепная улыбка
                            начинается, с отличного стоматолога</h1>
                        <p>Добро пожаловать в нашу зубную клинику, где мы
                            предлагаем выдающиеся стоматологические услуги, сочетающие в
                            себе опыт, инновации и заботу
                            о вашем улучшенном устном здоровье.</p>
                        <a href={`https://wa.me/${myNumber}?text=%20Здравствуйте%20я%20бы%20хотел%20записаться к вам...`}>
                            <button>Записаться на прием</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;