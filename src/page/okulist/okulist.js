import React from 'react';
import OkulistHero from "./okulistHero/okulistHero";
import OkulistDirection from "../okulist/okulistDirection/okulistDirection";
import Treatment from "./treatment/treatment";
import Appointment from "./appointment/appointment";
import Examination from "./ examination/examination";
import Best from "./best/best";
import Advantages from "../hirurgia/advantages/advantages";
import OkulistAdvantages from "./okulistAdvantages/okulistAdvantages";

const Okulist = () => {
    return (
        <>
            <OkulistHero/>
            <OkulistDirection/>
            <Treatment/>
            <Appointment/>
            <Examination/>
            <Best/>
            <OkulistAdvantages/>
        </>
    );
};

export default Okulist;