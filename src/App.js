import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./page/home/home";
import Stomatology from "./page/stomatology/stomatology";
import Hirurgia from "./page/hirurgia/hirurgia";
import Therapy from "./page/ therapy/therapy";
import Okulist from "./page/okulist/okulist";
import Labaratory from "./page/labaratory/labaratory";
import Gynecologiya from "./page/gynecologiya/gynecologiya";
import Urology from "./page/urology/urology";
import Lor from "./page/lor/lor";
import Implantation from "./page/ implantation/implantation";
import Orthopedics from "./page/orthopedics/orthopedics";
import Veneers from "./page/veneers/veneers";
import Braces from "./page/ braces/braces";
import DentistTherapy from "./page/dentistTherapy/dentistTherapy";
import Whitening from "./page/whitening/whitening";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/dentist'} element={<Stomatology/>}/>
                <Route path={'/dentist/implantation'} element={<Implantation/>}/>
                <Route path={'/dentist/orthopedics'} element={<Orthopedics/>}/>
                <Route path={'/dentist/veneers'} element={<Veneers/>}/>
                <Route path={'/dentist/braces'} element={<Braces/>}/>
                <Route path={'/dentist/dentistTherapy'} element={<DentistTherapy/>}/>
                <Route path={'/dentist/whitening'} element={<Whitening/>}/>
                <Route path={'/surgery'} element={<Hirurgia/>}/>
                <Route path={'/therapy'} element={<Therapy/>}/>
                <Route path={'/oculist'} element={<Okulist/>}/>
                <Route path={'/laboratory'} element={<Labaratory/>}/>
                <Route path={'/gynecologist'} element={<Gynecologiya/>}/>
                <Route path={'/urology'} element={<Urology/>}/>
                <Route path={'/lor'} element={<Lor/>}/>
            </Routes>
        </>
    );
};

export default App;