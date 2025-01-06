import React from 'react';
import stomatologyClientsImgOne from './../../../assets/img/stomatologyClientsImgOne.png'
import stomatologyClientsImgTwo from './../../../assets/img/stomatologyClientsImgTwo.png'
import stomatologyClientsImgThree from './../../../assets/img/stomatologyClientsImgThree.png'

const StomatologyClients = () => {
    return (
        <section id="stomatologyClients">
            <div className="container">
                <div className="stomatologyClients">

                    <h1>Наши довольные клиенты</h1>
                    <p>Наши довольные клиенты по всему Кыргызстану</p>

                    <div className="stomatologyClients--blocks">
                        <img src={stomatologyClientsImgOne} alt="img"/>
                        <img src={stomatologyClientsImgTwo} alt="img"/>
                        <img src={stomatologyClientsImgThree} alt="img"/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StomatologyClients;