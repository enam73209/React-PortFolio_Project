import React, {useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {NavLink} from "react-router-dom";
import arrow from '/arrow.svg'
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const Navigate = useNavigate();
    const[formValue,setFormValue]=useState({
        UserEmail:"",
    })
    const InputOnChange=(name,value)=>{
        setFormValue((PrevFormData)=>({
            ...PrevFormData,
                [name]:value
        }))
    };

    const LoginSubmit=()=>{
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(formValue.UserEmail ===''){
            toast.error("Email Address shouldn't be empty");
        }
        else if(!emailRegex.test(formValue.UserEmail)){
            toast.error("Invalid Email Address");

        }
        else{
            toast.success("Login Form submitted");
            setFormValue({UserEmail:"", UserPassword:""})
            Navigate('/otp');
        }
    }






    return (
        <Layout>
            <div>
                <div className="Page_Heading">
                    <p className="Page_Heading_Title ">User Login</p>
                    <div className="Page_Heading_Nav_Link d-flex">
                        <div className="breadcrumb-item_home"><NavLink to="/"><h4>Home</h4></NavLink></div>
                        <div className="breadcrumb-item breadcrumb_sign"><img src={arrow}/></div>
                        <div className="breadcrumb-item_child">Login</div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row  justify-content-center">
                        <div className="col-md-4">
                            <div className="card p-5 shadow">
                                <h3>Login</h3>
                                <label>User Email</label>
                                <input type="email" value={formValue.UserEmail} name="email" className="form-control mb-3" placeholder="Your Email Address" onChange={(e)=>InputOnChange("UserEmail",e.target.value)} />
                                <button onClick={LoginSubmit}  className="btn my-2 w-100 btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LoginForm;