import React from 'react';
import Layout from "../Layout/Layout.jsx";
import ServiceList from "../component/ServiceList.jsx";

const ServicePage = () => {
    return (
        <div>
            <Layout>
                <ServiceList/>
            </Layout>
        </div>
    );
};

export default ServicePage;