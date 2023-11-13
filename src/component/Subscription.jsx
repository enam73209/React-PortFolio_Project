import React from 'react';
import {Row} from "react-bootstrap";

const Subscription = () => {
    return (
         // <div className="mt-5">
         //     <Row>
         //         <p className="subscription_title">SUBSCRIBE</p>
         //         <p className="subscription_Des">Subscribe to get the latest news about us</p>
         //         <p className="subscription_Des2">Please drop your email below to get daily update about what we do</p>
         //     </Row>
         //    <div className="subscription_form ">
         //        <input className="subscription_input" type="text" placeholder="Enter text" />
         //        <button className="subscription_button btn-success" type="button">Submit</button>
         //    </div>
         // </div>
        <div className="subscription-container mt-5">
            <div className="subscription-content">
                <p className="subscription-title">SUBSCRIBE</p>
                <p className="subscription-des">Subscribe to get the latest news about us</p>
                <p className="subscription-des2">Please drop your email below to get daily updates about what we do</p>
            </div>
            <div className="subscription-form">
                <div className="input-container">
                    <input className="subscription-input" type="text" placeholder="Enter email" />
                    <button className="subscription-button btn-success" type="button">Submit</button>
                </div>
            </div>
        </div>


    );
};

export default Subscription;