import React from 'react';
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import Subscription from "../component/Subscription.jsx";


const Layout = (props) => {
    return (
        <div>
            <Header/>
            <div>{props.children}</div>
            <Subscription/>
            <Footer/>
        </div>
    );
};

export default Layout;