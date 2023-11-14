import React, {useState} from 'react';

import {Button} from "react-bootstrap";

const Worklist = () => {
    const[contentData,setContentData]=useState({
        title:"Work List",
        des:"We provide the Perfect Solution to your business growth",
    })
    const[works,setWorks]=useState([
        {
            id:1,
            title:"Grow Your Business",
            des:"We help identify the best ways to improve your business",
            img:"/public/Activity.svg"
        },
        {
            id:2,
            title:"Improve Brand Loyalty",
            des:"We help identify the best ways to improve your business",
            img:"/public/Heart.svg"
        },
        {
            id:1,
            title:"Improve Business Model",
            des:"We help identify the best ways to improve your business",
            img:"/public/Work.svg"
        }
    ]);
    const WorkList = works.map((work,index)=>{
        return<div key={index.toString()} className="col-md-4 shadow Work_Card_Item">
                <div className="Work_Card_Icon justify-content-center">
                    <img src={work.img}/>
                </div>
                <div className="Work_Card_Content_Title">
                    <p>{work.title}</p>
                </div>
                <div className="Work_Card_Content_Des mt-4">
                    <p>{work.des}</p>
                </div>
                <Button variant="primary">Learn More</Button>
            </div>
    })
    return (
        <div className="Worklist mt-5">
            <div className="col-md-4 justify-content-start">
                <h3 className="Worklist_Title">{contentData.title}</h3>
                <p className="Worklist_Des">{contentData.des}</p>
            </div>
            <div className="col-md-8">

            </div>
            <div className="row  Work_Card container-fluid">
                {WorkList}
            </div>

        </div>
    );
};

export default Worklist;