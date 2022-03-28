import React from 'react'
import '../Payment.css';



const Payment = () => {
  return (
    <div className='payment'>
        <h1>
            Payment
        </h1>
        <div className="payment_container">

       
                <h2>Donations welcome</h2>
            <div className="donate_buttons">
                <div className="button">
                    <button>$5</button>
                </div>
                <div className="button">
                    <button>$10</button>
                </div>
                <div className="button">
                    <button>$15</button>
                </div>
                <div className="button">
                    <button>$20</button>
                </div>
            </div>

        <div className="payment_content">
            <div className="payment_paypal">
                <h2>
                    Paypal
                </h2>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Payment