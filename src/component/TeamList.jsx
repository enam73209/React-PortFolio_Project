import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import arrow from "/arrow.svg";
import {Col, Row} from "react-bootstrap";
import facebook from '/team_facebook.svg'
import insta from '/team_insta.svg'
import twitter from '/team_Twitter.svg'
import line1 from '/Line1.svg'
import line2 from '/Line2.svg'
import {TeamDataRequest} from "../APIRequest/APIRequest.js";

const TeamList = () => {
    const[teamData,setTeamData]=useState([])
    useEffect(() => {
        (async ()=>{
            try{
                let Data = await TeamDataRequest();
                setTeamData(Data);
            }catch (e){
                console.log(e.toString())
            }

        })()
    }, []);


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
                            <Col xs={12} sm={12} md={4} lg={4} className="justify-content-center d-flex animate__animated animate__backInLeft" key={index.toString()}>
                                <div className="Team_Card mb-sx-3 mb-sm-3  xs={12} sm={6} md={8} lg={10}" >
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