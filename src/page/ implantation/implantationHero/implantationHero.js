import React from 'react';

const ImplantationHero = () => {

    const myNumber = +996776000000

    return (
        <section id="implantationHero">
            <div className="implantationHeroBlock">
                <div className="container">
                    <div className="implantationHero">
                        <h1>Имплантация зубов. Беремся за самые сложные моменты</h1>
                        <p>Потеря зубов — это не преграда для здоровой
                            и красивой улыбки. Имплантация поможет
                            вернуть утраченные зубы с помощью самых
                            современных технологий.</p>
                        <h5>-Современное оборудование,</h5>
                        <h5>-высокоточный рентген,</h5>
                        <h5>-использование импортных сертифицированных имплантатов,</h5>
                        <h5>-большой опыт работы</h5>
                        <h6>Всё это позволяет вернуть нашим
                            пациентам здоровье и красоту зубов.</h6>
                        <a href={`https://wa.me/${myNumber}?text=%20Здравствуйте%20я%20бы%20хотел%20записаться к вам...`}>
                            <button>Записаться на прием</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImplantationHero;