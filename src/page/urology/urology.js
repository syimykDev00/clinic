import React from 'react';
import UrologyHero from "./urologyHero/urologyHero";
import UrologyFaq from "./urologyFaq/urologyFaq";
import About from "../home/about/about";
import UrologyPriceList from "./urologyPriceList/urologyPriceList";
import UrologyReviews from "./urologyReviews/urologyReviews";

const Urology = () => {
    return (
        <>
            <UrologyHero/>
            <UrologyFaq/>
            <About/>
            <UrologyPriceList/>
            <UrologyReviews/>
        </>
    );
};

export default Urology;