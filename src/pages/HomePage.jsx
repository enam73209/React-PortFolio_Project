import React from 'react';
import Layout from "../Layout/Layout.jsx";
import HeroList from "../component/HeroList.jsx";
import Worklist from "../component/Worklist.jsx";
import StatList from "../component/StatList.jsx";
import FeaturedProject from "../component/FeaturedProject.jsx";
import Subscription from "../component/Subscription.jsx";

const HomePage = () => {
    return (
        <div>
            <Layout>
                <HeroList/>
                <Worklist/>
                <StatList/>
                <FeaturedProject/>
            </Layout>
        </div>
    );
};

export default HomePage;