import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import arrow from "../assets/img/service/arrow.svg";
import {Col, Row} from "react-bootstrap";
import facebook from '/src/assets/img/team/facebook.svg'
import insta from '/src/assets/img/team/insta.svg'
import twitter from '/src/assets/img/team/Twitter.svg'
import line1 from '/src/assets/img/team/Line 1.svg'
import line2 from '/src/assets/img/team/Line 2.svg'

const TeamList = () => {
    const[teamData,setTeamData]=useState([
        {
            name:"Alex Lov",
            img:"/src/assets/img/team/Rectangle 2093.svg"
        },
        {
            name:"Danny Bailey",
            img:"/src/assets/img/team/Danny Bailey.svg"
        },
        {
            name:"Devon Lane",
            img:"/src/assets/img/team/Devon.svg"
        }

        ])
    return (
        <div>
            <div className="Page_Heading">
                <p className="Page_Heading_Title ">Our Team</p>
                <div className="Page_Heading_Nav_Link d-flex">
                    <div className="breadcrumb-item_home"><NavLink to="/"><h4>Home</h4></NavLink></div>
                    <div className="breadcrumb-item breadcrumb_sign"><img src={arrow}/></div>
                    <div className="breadcrumb-item_child">Team</div>
                </div>
            </div>
            <div className="container-fluid">
                <p className="All_Service_Title  mb-4">OUR TEAM MEMBER</p>
                <p className="All_Service_Des  mb-4">Check our awesome team members</p>
                <Row>
                    {
                        teamData.map((team,index)=>(
                            <Col md={4}  className="justify-content-center d-flex animate__animated animate__backInLeft" key={index.toString()}>
                                <div className="Team_Card" >
                                    <img className="card-img-top" src={team.img} alt="Card image cap"/>
                                    <div className="SocialLink d-flex">
                                        <img className="facebook" src={facebook}/>
                                        <img className="line1" src={line1}/>
                                        <img className="twitter" src={twitter}/>
                                        <img className="line2" src={line2}/>
                                        <img className="insta" src={insta}/>
                                    </div>
                                    <div className="card-body justify-content-center">
                                        <p className="card-title">{team.name}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    );
};

export default TeamList;