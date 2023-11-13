import React from 'react';
import Layout from "../Layout/Layout.jsx";
import ProjectList from "../component/ProjectList.jsx";

const ProjectPage = () => {
    return (
        <div>
            <Layout>
                <ProjectList/>
            </Layout>
        </div>
    );
};

export default ProjectPage;