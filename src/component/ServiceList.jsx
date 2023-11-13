import React, {useState} from 'react';
import {Row, Col, Card, Button} from "react-bootstrap";
import ServiceJsonData from  '/src/services.json'
import arrow from '/src/assets/img/service/arrow.svg'
import {NavLink} from "react-router-dom";

const ServiceList = () => {
    const[Services,setServices]=useState(ServiceJsonData);

    return (
        <div className="">
            <div className="Page_Heading">
                <p className="Page_Heading_Title ">Our Services</p>
                <div className="Page_Heading_Nav_Link d-flex">
                    <div className="breadcrumb-item_home"><NavLink to="/"><h4>Home</h4></NavLink></div>
                    <div className="breadcrumb-item breadcrumb_sign"><img src={arrow}/></div>
                    <div className="breadcrumb-item_child">Service</div>
                </div>
            </div>
            <div className="container-fluid">
                <p className="All_Service_Title  mb-4">Our All Services</p>
                <p className="All_Service_Des  mb-4">We Provide Best Web design services</p>
              <div className="row container-fluid justify-content-center">
                  {
                      Services.map((service,index)=>{
                          return  <div key={index.toString()} className="col-md-6 shadow Service_Card">
                              <Card.Text className="Service_Card_Title">{service.title}</Card.Text>
                              <Card.Text className="Service_Card_Des">{service.Des}</Card.Text>
                              <Row>
                                  <Col md={6} className="Service_Card_img">
                                      <img src={service.img1}/>
                                  </Col>
                                  <Col md={6} className="Service_Card_img">
                                      <img src={service.img2} />
                                  </Col>
                              </Row>
                              <Row>
                                  <Col md={6} className="Service_Card_img">
                                      <img src={service.img3}/>
                                  </Col>
                                  <Col md={6} className="Service_Card_img">
                                      <img src={service.img4}/>
                                  </Col>
                              </Row>
                          </div>
                  })
                  }
              </div>
            </div>
        </div>
    );
};

export default ServiceList;


