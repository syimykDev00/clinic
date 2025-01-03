import React from 'react';
import TherapyHero from "./therapyHero/therapyHero";
import Reception from "./ reception/reception";
import Diagnostics from "./diagnostics/diagnostics";
import TherapyPriceList from "./therapyPriceList/therapyPriceList";
import Faq from "../home/faq/faq";
import TherapyReviews from "./therapyReviews/therapyReviews";

const Therapy = () => {
    return (
        <>
            <TherapyHero/>
            <Reception/>
            <Diagnostics/>
            <TherapyPriceList/>
            <Faq/>
            <TherapyReviews/>
        </>
    );
};

export default Therapy;