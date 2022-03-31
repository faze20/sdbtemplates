import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

import '../Payment.css';



const Payment = () => {
    const  [showInputBox , setShowInputBox] = useState(false)
    const [otheramount , setOtherAmount ] = useState(0)
    const navigate = useNavigate();

    const fifteen=()=>{
        navigate('/button',{state:{price:15,quantity:1 ,description:'Thank you for $15 donation '}});
    }
    const ten=()=>{
        navigate('/button',{state:{price:15,quantity:1 ,description:'Thank you for $15 donation '}});
    }
    const five=()=>{
        navigate('/button',{state:{price:15,quantity:1 ,description:'Thank you for $15 donation '}});
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/button',{state:{price:otheramount,quantity:1 ,description:`Thank you for ${otheramount} donation`}});
    }
  
  return (
    <div className='payment'>
        <h1>
            Donations &amp; Payment
        </h1>
        <div className="payment_container">

            <div className="donations">
                <h2>Donations</h2>
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
                        Donate today
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
                    <a href="https://cash.app/$AfeezBadmos">
                        <span>
                           Cashapp
                        </span>
                         $AfeezBadmos
                    </a>
                        
                    </div>
            </div>

            <div className="payment_content">
                <div className="payment_paypal">
                    
                    <div className="payment_subcontent">
                        <div className="subcontent">
                            <div className='subcontent_header'>
                            <h2>Order Summary</h2>
                            <button onClick={() => navigate("/makepayment")}> Pay now </button>
                            </div>
                           

                        </div>

                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment


//   {/* <div className="form_creditcard">
// REACT_APP_PAYPAL_CLIENT_ID
//                               <h2>
//                                 Paypal
//                               </h2>
//                             <form action="">
//                                 <div className="ccard_content">
//                                     <input type="text" placeholder='Credit Card Number' />
//                                 </div>
//                                 <div className="ccard_other">
//                                 <div className="ccard_content">
//                                     <input type="text" placeholder='Expiring MM/YY' />
//                                 </div>
//                                 <div className="ccard_content">
//                                     <input type="text" placeholder='CVV Code' />
//                                 </div>
//                                 // <div className="ccard_content">
//                                     <input type="text" placeholder='Postal Code' />
//                                 </div>

//                                 </div>
//                                 <div className="submit_button">
//                                     <button type="submit"> Pay </button>
//                                 </div>
//                             </form>
                           
                        // </div> */}
                       