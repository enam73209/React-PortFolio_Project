import React from 'react';
import Layout from "../Layout/Layout.jsx";
import TeamList from "../component/TeamList.jsx";

const TeamPage = () => {
    return (
        <div>
            <Layout>
                <TeamList/>
            </Layout>
        </div>
    );
};

export default TeamPage;