import React from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import {useLocation} from 'react-router-dom';
import '../Button.css';



const Button = () => {
    const location = useLocation();
    const total = location.state.price * location.state.quantity
  return (
    <div className='button_container'>
        <div className="button_contents">
            <div className="button_items">
                <div className="order_details">
                   <p> Quantity : {location.state.quantity}</p>
                   <p>Price : {location.state.price}</p>
                   <p>Description: {location.state.description}</p>
                   <p>total: {total }</p>

                </div>
                <div className="button_payment">
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

export default Button