import React, {useEffect, useState} from 'react';
import {HeroDataRequest} from "../APIRequest/APIRequest.js";



const HeroList = () => {
    const[BannerData,SetBannerData]=useState({});
    const[partner,setPartner]=useState([]);

    useEffect(() => {
        (async ()=>{
            try {
                let HeroData = await HeroDataRequest();
                console.log(HeroData[1]);
                SetBannerData(HeroData[0]['banner']);
                setPartner(HeroData[1]['partner']);
            }catch (e) {
                console.log(e.toString());
            }

        })()
    }, []);
    const PartnerList = partner.map((item,index)=>{
        return <div key={index.toString()} className="col-md-2"><img src={item.img} alt="Google" /></div>
    })
    return (
        <div className="Hero mt-n5">
            <div className="container pt-12">
                <div className="row">
                    <div className="col-md-6">
                        <p className="Hero_Title">{BannerData.title}</p>
                        <p className="Hero_Des">{BannerData.Des}</p>
                        <button className="btn btn-success">Get Started</button>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="BannerImg col-md-8">
                                <img  src={BannerData.Hero1} alt="Image 1" />
                            </div>
                            <div className="BannerImg col-md-4">
                                <img  src={BannerData.Hero2} alt="Image 2" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="BannerImg col-md-5">
                                <img  src={BannerData.Hero3} alt="Image 3" />
                            </div>
                            <div className="BannerImg col-md-7">
                                <img  src={BannerData.Hero4} alt="Image 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Hero_partner mt-6 container-fluid d-flex justify-content-between">
                {PartnerList}
            </div>
        </div>



    );
};

export default HeroList;