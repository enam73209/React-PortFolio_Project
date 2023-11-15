import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import arrow from "/arrow.svg";
import {Card, Col, Row} from "react-bootstrap";
import {ProjectDataRequest} from "../APIRequest/APIRequest.js";


const ProjectList = () => {
    const[projectImg,setProjectImg]=useState([]);

    useEffect(() => {
        (async ()=>{
            try {
                let projectData = await ProjectDataRequest();
                setProjectImg(projectData);
            }catch (e) {
                console.log(e.toString())
            }
        })()
    }, []);
    const ProjectList = projectImg.map((project,index)=>{
        return  <Col xs={12} sm={12} md={6} lg={6} key={index.toString()} className="shadow Projects_Card animate__animated animate__pulse">
                    <div className="projects_Card_Img">
                        <img src={project.img} alt="Project 1" />
                    </div>
                    <Card.Text className="Project_Card_Title">Lorem ipsum dolor sit consectutar</Card.Text>
                </Col>
    })
    return (
        <div>
            <div className="Page_Heading">
                <p className="Page_Heading_Title ">Our Projects</p>
                <div className="Page_Heading_Nav_Link d-flex">
                    <div className="breadcrumb-item_home"><NavLink to="/"><h4>Home</h4></NavLink></div>
                    <div className="breadcrumb-item breadcrumb_sign"><img src={arrow}/></div>
                    <div className="breadcrumb-item_child">Projects</div>
                </div>
            </div>
            <div className="container-fluid">
                <p className="All_Service_Title mb-4">Our All Projects</p>
                <p className="All_Service_Des mb-4">Better Agency/SEO Solution At Your Fingertips</p>
                <div className="row d-flex  justify-content-center">
                    {ProjectList}
                </div>
            </div>

        </div>
    );
};

export default ProjectList;