import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import '../Payment.css';

const Donation = () => {
    const  [showInputBox , setShowInputBox] = useState(false)
    const [otheramount , setOtherAmount ] = useState(0)
    const navigate = useNavigate();
    const fifteen=()=>{
        navigate('/payment',{state:{price:15,quantity:1 ,description:'Thank you for $15 donation '}});
    }
    const ten=()=>{
        navigate('/payment',{state:{price:10,quantity:1 ,description:'Thank you for $10 donation '}});
    }
    const five=()=>{
        navigate('/payment',{state:{price:5,quantity:1 ,description:'Thank you for $5 donation '}});
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/payment',{state:{price:otheramount,quantity:1 ,description:`Thank you for ${otheramount} donation`}});
    }
  
  return (
    <div className='payment'>
        <h1>
            Donations &amp; Payment
        </h1>
        <div className="payment_container">
            <div className="donations">
                <h2>Donations </h2>
                <div className="text_container">
                    <p>
                        Because of your donations, 
                        You gave us the much needed
                        support to keep maintaining 
                        and improving the applications 
                        to serve you and your business 
                        without distracting adverts like 
                        most free-application providing 
                        websites .
                    </p>
                    <div className="donate_buttontext">
                        <h4>Donations Welcome through CashApp , Paypal , Zelle</h4>
                    </div>
                </div>
                <div className="donate_buttons">
                    <div className="button">
                        <button onClick={()=>{five()}}>$5 Paypal</button>
                    </div>
                    <div className="button">
                        <button onClick={()=>{ten()}}>$10 Paypal</button>
                    </div>
                    <div className="button">
                        <button onClick={()=>{fifteen()}}>$15 Paypal</button>
                    </div>
                    <div className="button">
                        <button onClick={()=> setShowInputBox(true)}>$Custom</button>
                        {showInputBox && 
                        <form onSubmit={handleSubmit}>
                            <input onChange={(e)=> setOtherAmount(e.target.value)}
                            type="number" name="otheramount" id="other" />
                            <button type="submit">Donate</button> 
                        </form>
                        }
                    </div>
                </div>
                <div className="cashapp">
                    <a href="https://cash.app/$AfeezBadmos"><span>Cashapp </span>$AfeezBadmos </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Donation

