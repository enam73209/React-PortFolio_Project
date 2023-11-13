import React, {useState} from 'react';



const HeroList = () => {
    const[BannerData,SetBannerData]=useState({
        title:"Increase Your Customers Loyalty and Satisfaction",
        Des:"We help businesses like yours earn more customers, stand out from competitors, make more money",
        Hero1:"/src/assets/img/Rectangle 1241.svg",
        Hero2:"/src/assets/img/Rectangle 1242.svg",
        Hero3:'/src/assets/img/Rectangle 1243.svg',
        Hero4:'/src/assets/img/Rectangle 1244.svg'
    });
    const[partner,setPartner]=useState([
        {
            id:1,
            img:"/src/assets/img/logos_google.svg"
        },
        {
            id:2,
            img:"/src/assets/img/Trello-logo-blue 1.svg"
        },
        {
            id:3,
            img:"/src/assets/img/Slack.svg"
        },
        {
            id:4,
            img:"/src/assets/img/logos_monday.svg"
        },
        {
            id:5,
            img:"/src/assets/img/Notion.svg"
        },
    ]);
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
                            <div className="col-md-8">
                                <img src={BannerData.Hero1} alt="Image 1" />
                            </div>
                            <div className="col-md-4">
                                <img src={BannerData.Hero2} alt="Image 2" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-5">
                                <img src={BannerData.Hero3} alt="Image 3" />
                            </div>
                            <div className="col-md-7">
                                <img src={BannerData.Hero4} alt="Image 4" />
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