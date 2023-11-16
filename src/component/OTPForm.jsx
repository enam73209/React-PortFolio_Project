import React, {useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import arrow from '/arrow.svg'
import {toast} from "react-hot-toast";
import {Navigate} from "react-router-dom";

const OtpForm = () => {
    const Navigate = useNavigate();
    const[formValue,setFormValue]=useState({
        otp:""
    })
    const InputOnChange=(name,value)=>{
        setFormValue((PrevFormValue)=>({
           ...PrevFormValue,
           [name]:value
        }))
    }
    const submitOTP=()=>{
        let OTP = formValue.otp;
        if(OTP.length !==6){
            toast.error("OTP must be 6 digit number");
        }
        else{
            toast.success("OTP verified successfully");
            Navigate('/');

        }
    }
    return (
        <Layout>
            <div>
                <div className="Page_Heading">
                    <p className="Page_Heading_Title ">User OTP</p>
                    <div className="Page_Heading_Nav_Link d-flex">
                        <div className="breadcrumb-item_home"><NavLink to="/"><h4>Home</h4></NavLink></div>
                        <div className="breadcrumb-item breadcrumb_sign"><img src={arrow}/></div>
                        <div className="breadcrumb-item_child">otp</div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row  justify-content-center">
                        <div className="col-md-4">
                            <div className="card p-5 shadow">
                                <h3>OTP</h3>
                                <label>input here 6 digit otp sent to your email</label>
                                <input type="number" value={formValue.otp} name="otp" className="form-control mb-3" placeholder="6 digit otp" onChange={(e)=>InputOnChange("otp",e.target.value)} />
                                <button onClick={submitOTP}  className="btn my-2 w-100 btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OtpForm;