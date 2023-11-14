import React, {useState} from 'react';
import {Button} from "react-bootstrap";

const StatList = () => {
    const[stats,setStats]=useState(
        [
            {
                "id": 1,
                "count": 240452,
                "title": "Followers",
                "img": "/public/Follower.svg"
            },
            {
                "id": 2,
                "count": 6300,
                "title": "Solved Problems",
                "img": "/public/Vector.svg"
            },
            {
                "id": 3,
                "count": 25000,
                "title": "Happy Customers",
                "img": "/public/Happy.svg"
            },
            {
                "id": 4,
                "count": 360452,
                "title": "Projects",
                "img": "/public/Stat1.svg"
            }
        ]

    );
    const StatList = stats.map((stat,index)=>{
        return <div key={index.toString()} className="col-md-3 mb-4 d-flex align-items-center justify-content-center">
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
                </div>
    })
    return (
        <div className="row StatList container-fluid">
            {StatList}
        </div>
    );
};

export default StatList;