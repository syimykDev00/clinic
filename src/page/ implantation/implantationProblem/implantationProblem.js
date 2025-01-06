import React from 'react';
import implantationProblemImg from "./../../../assets/img/implantationProblemImg.png";

const ImplantationProblem = () => {
    return (
        <section id="implantationProblem">
            <div className="container">
                <div className="implantationProblem">
                    <h1>Какие проблемы решает имплантация зубов?</h1>
                    <h2>Имплантат изготовливается из титана, долго служит, отлично приживается в
                        организме и заменяет естественный корень зуба.</h2>
                    <h3>После установки на него установливается коронка, которая визуально не отличается от родного зуба.</h3>
                    <h4>1.Восполняет отсутствие родного зуба с сохранением его функциональной и эстетической значимости.</h4>
                    <h4>2.Устраняет психологический дискомфорт, связанный с неидеальностью улыбки.</h4>
                    <h4>3.Предотвращает смещение зубов, изменение прикуса и черт лица.</h4>
                    <h4>4.Снижает возникновение кариеса, который появляется из-за увеличения межзубного пространства.</h4>
                    <img src={implantationProblemImg} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default ImplantationProblem;