import React from 'react';
import orthopedicsResultImgOne from './../../../assets/img/orthopedicsResultImgOne.jpg'
import orthopedicsResultImgTwo from './../../../assets/img/orthopedicsResultImgTwo.jpg'

const OrthopedicsResult = () => {
    return (
        <section id="orthopedicsResult">
            <div className="container">
                <div className="orthopedicsResult">
                    <h1>Результаты нашей работы</h1>
                    <div className="orthopedicsResult--images">
                        <img src={orthopedicsResultImgOne} alt="img"/>
                        <img src={orthopedicsResultImgTwo} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrthopedicsResult;