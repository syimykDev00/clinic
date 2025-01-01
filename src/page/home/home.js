import React from 'react';
import Hero from "./hero/hero";
import OurServices from "./ourServices/ourServices";
import PriceList from "./priceList/priceList";
import About from "./about/about";
import OurDoctors from "./ourDoctors";
import Faq from "./faq/faq";
import Reviews from "./reviews/reviews";

const Home = () => {
    return (
        <>
            <Hero/>
            <OurServices/>
            <PriceList/>
            <About/>
            <OurDoctors/>
            <Faq/>
            <Reviews/>
        </>
    );
};

export default Home;