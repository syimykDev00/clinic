import React from 'react';

const DentistTherapyHero = () => {

    const myNumber = +996776000000

    return (
        <section id="dentistTherapyHero">
            <div className="dentistTherapyHeroBlock">
                <div className="container">
                    <div className="dentistTherapyHero">
                        <h1>Терапевтическая стоматология</h1>
                        <p>Терапевтическая стоматология – раздел медицины, занимающийся диагностикой и лечением болезней
                            зубов, околозубных тканей и слизистой оболочки полости рта. Здоровые зубы – неотъемлемый
                            атрибут успешного современного человека.
                            Будущее вашего зуба, будет зависить от эндодонтического лечение!
                        </p>
                        <a href={`https://wa.me/${myNumber}?text=%20Здравствуйте%20я%20бы%20хотел%20записаться к вам...`}>
                            <button>Записаться на прием</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentistTherapyHero;