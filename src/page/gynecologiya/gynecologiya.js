import React from 'react';
import GynecologiyaHero from "./gynecologiyaHero/gynecologiyaHero";
import GynecologiyaFaq from './gynecologiyaFaq/gynecologiyaFaq'
import Operation from "./operation/operation";
import GynecologiyaReviews from "./gynecologiyaReviews/gynecologiyaReviews";
import GynecologiyaSymptom from "./gynecologiyaSymptom/gynecologiyaSymptom";
import GynecologiyaPriceList from "./gynecologiyaPriceList/gynecologiyaPriceList";
import GynecologiyaAbout from "./gynecologiyaAbout/gynecologiyaAbout";

const Gynecologiya = () => {
    return (
        <>
            <GynecologiyaHero/>
            <GynecologiyaFaq/>
            <GynecologiyaAbout/>
            <Operation/>
            <GynecologiyaReviews/>
            <GynecologiyaSymptom/>
            <GynecologiyaPriceList/>
        </>
    );
};

export default Gynecologiya;