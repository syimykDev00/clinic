import React from 'react';
import StomatologyHero from "./stomatologyHero/stomatologyHero";
import StomatologyAbout from "./stomatologyAbout/stomatologyAbout";
import StomatologyClients from "./stomatologyClients/stomatologyClients";
import StomatologyReviews from "./stomatologyReviews/stomatologyReviews";
import StomatologyWhy from "./stomatologyWhy/stomatologyWhy";
import StomatologyPriceList from "./stomatologyPriceList/stomatologyPriceList";
import StomatologyFaq from './stomatologyFaq/stomatologyFaq';

const Stomatology = () => {
    return (
        <>
            <StomatologyHero/>
            <StomatologyAbout/>
            <StomatologyClients/>
            <StomatologyReviews/>
            <StomatologyWhy/>
            <StomatologyPriceList/>
            <StomatologyFaq/>
        </>
    );
};

export default Stomatology;