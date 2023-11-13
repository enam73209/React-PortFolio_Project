import React, {useState} from 'react';
import Service1 from '/src/assets/img/service/Rectangle 2095.svg'
import Service2 from '/src/assets/img/service/Rectangle 2096.svg'
import Service3 from '/src/assets/img/service/Rectangle 2097.svg'
import Service4 from '/src/assets/img/service/Rectangle 2098.svg'
import {Row, Col, Card, Button} from "react-bootstrap";
import ServiceJsonData from  '/src/services.json'

const ServiceList = () => {
    const[Services,setServices]=useState(ServiceJsonData);

    return (
        <div className="container-fluid  mt-10">
            <p className="All_Service_Title  mb-4">Our All Services</p>
            <p className="All_Service_Des  mb-4">We Provide BestWeb design services</p>
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
    );
};

export default ServiceList;