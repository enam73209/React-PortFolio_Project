import React, {useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {NavLink} from "react-router-dom";
import arrow from '/arrow.svg'
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const RegistrationForm = () => {
    const Navigate = useNavigate()
    const[formValue,setFormValue]=useState({
        UserEmail:""
    })
    const InputOnChange=(name,value)=>{
        setFormValue((PrevFormValue)=>({
           ...PrevFormValue,
           [name]:value
        }))
    }
    const RegistrationSubmit =()=>{
        let Email = formValue.UserEmail;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(Email ===''){
            toast.error("Email Address shouldn't be empty");
        }
        else if(!emailRegex.test(Email)){
            toast.error("Invalid Email Address");

        }
        else{
            toast.success("Email submitted");
            Navigate('/otp')

        }
    }
    return (
        <div>
            <Layout>
                <div>
                    <div className="Page_Heading">
                        <p className="Page_Heading_Title ">User Registration</p>
                        <div className="Page_Heading_Nav_Link d-flex">
                            <div className="breadcrumb-item_home"><NavLink to="/"><h4>Home</h4></NavLink></div>
                            <div className="breadcrumb-item breadcrumb_sign"><img src={arrow}/></div>
                            <div className="breadcrumb-item_child">Registration</div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row  justify-content-center">
                            <div className="col-md-4">
                                <div className="card p-5 shadow">
                                    <h3>User Registration</h3>
                                    <label>User Email</label>
                                    <input type="email" value={formValue.UserEmail} name="email" className="form-control mb-3" placeholder="Your Email Address" onChange={(e)=>InputOnChange("UserEmail",e.target.value)} />
                                    <button onClick={RegistrationSubmit} className="btn my-2 w-100 btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default RegistrationForm;