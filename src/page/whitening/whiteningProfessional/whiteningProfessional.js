import React from 'react';
import whiteningProfessionalImgOne from './../../../assets/img/whiteningProfessionalImgOne.png';
import whiteningProfessionalImgThree from './../../../assets/img/whiteningProfessionalImgThree.jpg';

const WhiteningProfessional = () => {
    return (
        <section id="whiteningProfessional">
            <div className="container">
                <div className="whiteningProfessional">
                    <h1>Виды профессионального отбеливания</h1>
                    <div className="whiteningProfessional--general">
                        <div className="whiteningProfessional--general__group">
                            <h2>Ультра-звуковое отбеливание</h2>
                            <img src={whiteningProfessionalImgOne} alt="img"/>
                        </div>
                        <div className="whiteningProfessional--general__group">
                            <h2>Полировка с пастой</h2>
                            <img src={'https://aidarov-clinic.vercel.app/static/media/polirovka.0dfde358ab09a0d7bf1b.jpg'} alt="img"/>
                        </div>
                        <div className="whiteningProfessional--general__group">
                            <h2>Air-flow</h2>
                            <img src={whiteningProfessionalImgThree} alt="img"/>
                        </div>
                    </div>
                    <h3>Отбеливание с пастой имеются 5 тонов 150$ ( 12150 сом)</h3>
                </div>
            </div>
        </section>
    );
};

export default WhiteningProfessional;