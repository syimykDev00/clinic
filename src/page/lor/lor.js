import React from 'react';
import LorHero from "./lorHero/lorHero";
import FaqLor from "./faqLor/faqLor";
import Scheme from "./scheme/scheme";
import LorPriceList from "./lorPriceList/lorPriceList";
import LorReviews from "./lorReviews/lorReviews";

const Lor = () => {
    return (
        <>
            <LorHero/>
            <FaqLor/>
            <Scheme/>
            <LorPriceList/>
            <LorReviews/>
        </>
    );
};

export default Lor;