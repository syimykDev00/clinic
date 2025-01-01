import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import Maps from "../../page/home/maps/maps";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className="main">
                {children}
            </div>
            <Maps/>
            <Footer/>
        </>
    );
};

export default Layout;