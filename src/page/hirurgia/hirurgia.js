import React from 'react';
import HirurgiaHero from "./hirurgiaHero/hirurgiaHero";
import Esthete from "./esthete/esthete";
import Direction from "./direction/direction";
import Advantages from "./advantages/advantages";
import HirurgiaReviews from "./hirurgiaReviews/hirurgiaReviews";
import HirurgiaAbout from "./hirurgiaAbout/hirurgiaAbout";

const Hirurgia = () => {
    return (
        <>
            <HirurgiaHero />
            <Esthete/>
            <Direction/>
            <HirurgiaAbout/>
            <Advantages/>
            <HirurgiaReviews/>
        </>
    );
};

export default Hirurgia;