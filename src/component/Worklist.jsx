import React, {useEffect, useState} from 'react';

import {Button, Col, Row} from "react-bootstrap";
import {WorksDataRequest} from "../APIRequest/APIRequest.js";
import Container from "react-bootstrap/Container";

const Worklist = () => {
    const[contentData,setContentData]=useState({
        title:"Work List",
        des:"We provide the Perfect Solution to your business growth",
    })
    const[works,setWorks]=useState([]);

    useEffect(() => {
        (async ()=>{
            try {
                let WorksData = await WorksDataRequest();
                setWorks(WorksData);
            }catch (e) {
                console.log(e.toString())
            }

        })()
    }, []);
    const WorkList = works.map((work,index)=>{
        return<Col xs={12} sm={12} md={4} lg={4} key={index.toString()} className="shadow Work_Card_Item clearfix">
                <div className="Work_Card_Icon justify-content-center">
                    <img src={work.img}/>
                </div>
                <div className="Work_Card_Content_Title justify-content-center">
                    <p>{work.title}</p>
                </div>
                <div className="Work_Card_Content_Des justify-content-center">
                    <p>{work.des}</p>
                </div>
                <div className="Work_Card_Button">
                    <Button variant="primary">Learn More</Button>
                </div>
            </Col>
    })
    return (
        <div className="Work mt-8 container-fluid">
            <Row className=" justify-content-start">
                <h3 className="Work_Title">{contentData.title}</h3>
                <p className="Work_Des">{contentData.des}</p>
            </Row>
            <Row className="Work_Card container-fluid justify-content-center">

                    {WorkList}

            </Row>

        </div>
    );
};

export default Worklist;