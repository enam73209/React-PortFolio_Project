import React, {useEffect, useState} from 'react';
import {Button, Col} from "react-bootstrap";
import {StatDataRequest} from "../APIRequest/APIRequest.js";

const StatList = () => {
    const[stats,setStats]=useState([]);
    useEffect(() => {
        (async ()=>{
            try {
                let statData = await StatDataRequest();
                setStats(statData);
            }catch (e) {
                console.log(e.toString());
            }
        })()
    }, []);
    const StatList = stats.map((stat,index)=>{
        return <Col xs={12} sm={6} md={4} lg={3} key={index.toString()} className="mb-4 d-flex align-items-center justify-content-center">
                    <div className="StatList_Card shadow p-5 text-center">
                        <div className="StatList_Card_Icon">
                            <img src={stat.img} alt="Activity Icon" />
                        </div>
                        <div className="StatList_Card_Count">
                            <p className="mb-0">{stat.count}</p>
                        </div>
                        <div className="StatList_Card_Title">
                            <p className="mb-0">{stat.title}</p>
                        </div>
                    </div>
                </Col>
    })
    return (
        <div className="row mt-6 StatList container-fluid">
            {StatList}
        </div>
    );
};

export default StatList;