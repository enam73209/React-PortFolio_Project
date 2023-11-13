import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import arrow from "../assets/img/service/arrow.svg";
import {Card, Col, Row} from "react-bootstrap";


const ProjectList = () => {
    const[projectImg,setProjectImg]=useState([
        {img:"/src/assets/img/projects/project1.svg"},{img:"/src/assets/img/projects/project2.svg"}, {img:"/src/assets/img/projects/project3.svg"},
        {img:"/src/assets/img/projects/project4.svg"},{img:"/src/assets/img/projects/project5.svg"},{img:"/src/assets/img/projects/project6.svg"}
    ]);
    const ProjectList = projectImg.map((project,index)=>{
        return  <div key={index.toString()} className="col-md-6 shadow Projects_Card">
                    <div className="projects_Card_Img">
                        <img src={project.img} alt="Project 1" />
                    </div>
                    <Card.Text className="Project_Card_Title">Lorem ipsum dolor sit consectutar</Card.Text>
                </div>
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