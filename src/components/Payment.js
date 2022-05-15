import React from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import {useLocation} from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';

import '../Button.css';



const Payment = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const total = location.state.price * location.state.quantity
  return (
    <div className='button_container'>
        <div className="payment_banner">
            <p>Paypal Merchant is down at the moment . </p>
            <button 
            onClick={()=>navigate('/contact')}
            >
                Click to Contact for Payment

            </button>
        </div>
        <div className="button_contents">
            <div className="button_items">
                <div className="order_details">
                    <h2 className='details_summary'>Order Summary</h2>

                    <div className='order_items'> <p> Quantity :</p> <span> {location.state.quantity}</span></div>
                    <div className='order_items'><p>Price : </p><span>${location.state.price}</span></div>
                    <div className='order_items'> <p>Description:</p> <span>{location.state.description}</span> </div>
                    <div className='order_items'><p>total: </p>$<span>{total }</span> </div>
                    <div className='payment_options'>
                        <p className='other_paymentmethod'>Other Payment options: </p>
                        <div className="cashapp">
                              <a href="https://cash.app/$AfeezBadmos">
                                    <span>
                                    Cashapp
                                    </span>
                                    $AfeezBadmos
                                </a>
                        
                         </div>
                        <h5>  Zelle :  7472498760 </h5>
                            <h5>Direct Paypal : Afeez20</h5>
                    </div>

                </div>
                <div className="button_payment">
                    <div className="overlay">
                    <h4>Hi, our PAYPAL Gateway is Temporarily down!</h4>
                   
                    </div>
                    <div className='payment_portal'>
                        <PayPalButton
                            options={{
                            clientId:"Af0hsDbQMrzfPTnYx_wSGEOs3J3Q07op0fHSG0KsEuum8n8kEc7-LwYuAO9H4kXcFZcSEc7AumjMAAR1",

                            currency: "USD",
                            }}
                            amount={total}
                            onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);

                            console.log({ details, data });
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment