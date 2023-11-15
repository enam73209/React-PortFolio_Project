import React from 'react';
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import Subscription from "../component/Subscription.jsx";
import {Toaster} from "react-hot-toast";


const Layout = (props) => {
    return (
        <div>
            <Header/>
            <div>{props.children}</div>
            <Subscription/>
            <Toaster position="bottom-center"/>
            <Footer/>
        </div>
    );
};

export default Layout;