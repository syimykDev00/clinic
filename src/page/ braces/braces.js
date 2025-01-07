import React from 'react';
import BracesHero from "./bracesHero/bracesHero";
import HelpBraces from "./helpBraces/helpBraces";
import AdvantagesBraces from "./advantagesBraces/advantagesBraces";
import PriceTreatmentBraces from "./priceTreatmentBraces/priceTreatmentBraces";
import BracesFaq from "./bracesFaq/bracesFaq"
const Braces = () => {
    return (
        <>
            <BracesHero/>
            <HelpBraces/>
            <AdvantagesBraces/>
            <PriceTreatmentBraces/>
            <BracesFaq/>
        </>
    );
};

export default Braces;