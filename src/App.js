import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./page/home/home";
import Stomatology from "./page/stomatology/stomatology";
import Hirurgia from "./page/hirurgia/hirurgia";
import Therapy from "./page/ therapy/therapy";
import {CgOculus} from "react-icons/cg";
import Okulist from "./page/okulist/okulist";
import Labaratory from "./page/labaratory/labaratory";
import Gynecologiya from "./page/gynecologiya/gynecologiya";
import Urology from "./page/urology/urology";
import Lor from "./page/lor/lor";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                {/*<Route path={'/dentist'} element={<Stomatology/>}/>*/}
                {/*<Route path={'/surgery'} element={<Hirurgia/>}/>*/}
                {/*<Route path={'/therapy'} element={<Therapy/>}/>*/}
                {/*<Route path={'/oculist'} element={<Okulist/>}/>*/}
                {/*<Route path={'/laboratory'} element={<Labaratory/>}/>*/}
                {/*<Route path={'/gynecologist'} element={<Gynecologiya/>}/>*/}
                {/*<Route path={'/urology'} element={<Urology/>}/>*/}
                {/*<Route path={'/lor'} element={<Lor/>}/>*/}
            </Routes>
        </>
    );
};

export default App;