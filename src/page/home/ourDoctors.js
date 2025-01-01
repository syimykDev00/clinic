import React from 'react';
import doctorsImgOne from './../../assets/img/doctorsImgOne.png'
import doctorsImgTwo from './../../assets/img/doctorsImgTwo.png'
import doctorsImgThree from './../../assets/img/doctorsImgThree.png'

const OurDoctors = () => {
    return (
        <section id="doctors">
            <div className="container">
                <div className="doctors">
                    <h1>Наши врачи</h1>
                    <p>Лучшие и опытные в своем деле наши врачи</p>
                    <div className="doctors--photos">
                        <img src={doctorsImgOne} alt="img"/>
                        <img src={doctorsImgTwo} alt="img"/>
                        <img src={doctorsImgThree} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurDoctors;