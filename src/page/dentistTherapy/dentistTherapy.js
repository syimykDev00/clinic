import React from 'react';
import DentistTherapyHero from "./dentistTherapyHero/dentistTherapyHero";
import DentistTherapyFaq from "./dentistTherapyFaq/dentistTherapyFaq";
import DentistTherapyPriceList from "./dentistTherapyPriceList/dentistTherapyPriceList";
import DentistTherapyCan from "./dentistTherapyCan/dentistTherapyCan";

const DentistTherapy = () => {
    return (
        <>
            <DentistTherapyHero />
            <DentistTherapyFaq/>
            <DentistTherapyPriceList/>
            <DentistTherapyCan/>
        </>
    );
};

export default DentistTherapy;