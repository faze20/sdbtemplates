import React, { useState } from 'react'
import '../Payment.css';



const Payment = () => {
    const  [showInputBox , setShowInputBox] = useState(false)
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
                        <button>$5 Paypal</button>
                    </div>
                    <div className="button">
                        <button>$10 Paypal</button>
                    </div>
                    <div className="button">
                        <button>$15 Paypal</button>
                    </div>
                    <div className="button">
                        <button onClick={()=> setShowInputBox(true)}>$Custom</button>
                        {showInputBox && 
                        <form>
                            <input type="number" name="otheramount" id="other" />
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
                            <h2>Order Summary</h2>
                        </div>

                        <div className="form_creditcard">
                              <h2>
                                Paypal
                              </h2>
                            <form action="">
                                <div className="ccard_content">
                                    <input type="text" placeholder='Credit Card Number' />
                                </div>
                                <div className="ccard_other">
                                <div className="ccard_content">
                                    <input type="text" placeholder='Expiring MM/YY' />
                                </div>
                                <div className="ccard_content">
                                    <input type="text" placeholder='CVV Code' />
                                </div>
                                <div className="ccard_content">
                                    <input type="text" placeholder='Postal Code' />
                                </div>

                                </div>
                                <div className="submit_button">
                                    <button type="submit"> Pay </button>
                                </div>
                            </form>
                           
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment