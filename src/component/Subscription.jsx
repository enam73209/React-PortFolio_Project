import React, {useState} from 'react';
import {Row} from "react-bootstrap";
import {toast} from "react-hot-toast";



const Subscription = () => {
    const[email,setEmail]=useState('');
    const InputOnChange=(e)=>{
        let email = e.target.value;
        setEmail(email);

    }
    const SubscriptionBTN=()=>{
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(email)){
            toast.success("Successfully Subscription done");
            setEmail('');
        }
        else{
            toast.error("Invalid Email Address");
        }

    }
    return (
        <div className="subscription-container mt-5">
            <div className="subscription-content">
                <p className="subscription-title">SUBSCRIBE</p>
                <p className="subscription-des">Subscribe to get the latest news about us</p>
                <p className="subscription-des2">Please drop your email below to get daily updates about what we do</p>
            </div>
            <div className="subscription-form">
                <div className="input-container">
                    <input className="subscription-input" value={email} type="email" placeholder="Enter email"  onChange={InputOnChange}/>
                    <button onClick={SubscriptionBTN} className="subscription-button btn-success" type="button">Submit</button>

                </div>
            </div>
        </div>
    );
};

export default Subscription;