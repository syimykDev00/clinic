import React from 'react';
import OrthopedicsHero from "./orthopedicsHero/orthopedicsHero";
import OrthopedicsServices from "./orthopedicsServices/orthopedicsServices";
import OrthopedicsResult from "./orthopedicsResult/orthopedicsResult";

const Orthopedics = () => {
    return (
        <>
            <OrthopedicsHero/>
            <OrthopedicsServices/>
            <OrthopedicsResult/>
        </>
    );
};

export default Orthopedics;