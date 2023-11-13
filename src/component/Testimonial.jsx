import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import arrow from "../assets/img/service/arrow.svg";
import {Card} from "react-bootstrap";
import testimonial1 from '../assets/img/testimonial/testimonial1.svg'

const Testimonial = () => {
    const[testimonialImg,setTestimonial]=useState([
        {
            img:"/src/assets/img/testimonial/testimonial1.svg"
        },
        {
            img:"/src/assets/img/testimonial/testimonial2.svg"
        },
        {
            img:"/src/assets/img/testimonial/testimonial3.svg"
        },
        {
            img:"/src/assets/img/testimonial/testimonial4.svg"
        },
        {
            img:"/src/assets/img/testimonial/testimonial5.svg"
        },
        {
            img:"/src/assets/img/testimonial/testimonial6.svg"
        },
    ]);
    const TestimonialList = testimonialImg.map((testimonial,index)=>{
        return<div key={index.toString()} className="col-md-4 shadow Testimonial_Card">
                    <div className="testimonial_Card_Img">
                        <img src={testimonial.img} alt="Project 1" />
                    </div>
                    <Card.Text className="Testimonial_Des text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.
                    </Card.Text>
                    <Card.Title className="Testimonial_Card_Title ">Alice Bradley</Card.Title>
                    <Card.Subtitle className="Testimonial_Card_SubTitle">Backend Developer</Card.Subtitle>
                </div>
    })
    return (
        <div>
            <div className="Page_Heading">
                <p className="Page_Heading_Title ">Testimonial List</p>
                <div className="Page_Heading_Nav_Link d-flex">
                    <div className="breadcrumb-item_home"><NavLink to="/"><h4>Home</h4></NavLink></div>
                    <div className="breadcrumb-item breadcrumb_sign"><img src={arrow}/></div>
                    <div className="breadcrumb-item_child">Testimonials</div>
                </div>
            </div>
            <div className="container-fluid">
                <p className="All_Service_Title mb-4">Our All Projects</p>
                <p className="All_Service_Des mb-4">Better Agency/SEO Solution At Your Fingertips</p>
                <div className="row d-flex  justify-content-center">
                    {TestimonialList}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;