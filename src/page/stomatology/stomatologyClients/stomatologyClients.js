import React from 'react';

const StomatologyClients = () => {
    return (
        <section id="stomatologyClients">
            <div className="container">
                <div className="stomatologyClients">

                    <h1>Наши довольные клиенты</h1>
                    <p>Наши довольные клиенты по всему Кыргызстану</p>

                    <div className="stomatologyClients--blocks">
                        <img src={'http://localhost:3001/static/media/dentistClientsOne.19a512c8416b7fe823ae.png'} alt="img"/>
                        <img src={'http://localhost:3001/static/media/dentistClientsTwo.ac5055628f4b3d2046c6.png'} alt="img"/>
                        <img src={'http://localhost:3001/static/media/dentistClientsThree.816ae15bbf3b691564db.png'} alt="img"/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StomatologyClients;