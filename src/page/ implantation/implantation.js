import React from 'react';
import ImplantationHero from "./implantationHero/implantationHero";
import ImplantationProblem from "./implantationProblem/implantationProblem";
import ImplantationSpecies from "./implantationSpecies/implantationSpecies";
import ImplantationFaq from "./implantationFaq/implantationFaq";

const Implantation = () => {
    return (
        <>
            <ImplantationHero/>
            <ImplantationProblem/>
            <ImplantationSpecies/>
            <ImplantationFaq/>
        </>
    );
};

export default Implantation;