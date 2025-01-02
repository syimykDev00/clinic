import React from 'react';
import HirurgiaHero from "./hirurgiaHero/hirurgiaHero";
import Esthete from "./esthete/esthete";
import Direction from "./direction/direction";
import About from "../home/about/about";
import Advantages from "./advantages/advantages";
import HirurgiaReviews from "./hirurgiaReviews/hirurgiaReviews";

const Hirurgia = () => {
    return (
        <>
            <HirurgiaHero />
            <Esthete/>
            <Direction/>
            <About/>
            <Advantages/>
            <HirurgiaReviews/>
        </>
    );
};

export default Hirurgia;