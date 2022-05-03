import React from 'react'
import Fade from 'react-reveal/Fade'
import '../Contact.css'

import Address from './Address';
import Quote from './Quote';



function Contact() {
    const buttonText = 'Contact Us'
    return (
        <div className="contact_container">
            <div className="contact_contents">
                <h2 className='contact_h2'>Contact </h2>
            <div className="contact_header">
                   <Fade right>
                   <div className="headercontent">
                       <img src="signature.png" alt="Ready to sign NDA " />
                       
                       <div className="headercontent_text">
                       All your ideas are 
                        protected by NDA
                       </div> 
                   </div>

                   <div className="headercontent">
                       <div className="divider"></div>
                       <img src="time.png" alt="Ready to sign NDA " />
                       <div className="headercontent_text">
                       We will respond to you within 24hours
                       </div>                     
                       
                   </div>
                   <div className="headercontent">
                   <div className="divider"></div>
                       <img src="budget.png" alt="cost estimation " />
                       <div className="headercontent_text">
                      Detailed time 
                       and cost estimation
                       </div>   
                       
                   </div></Fade>
               </div>
            <div className="item_contact">
                <div className="item_one">
                 <Quote text={buttonText} />
                </div>
                <div className="item_two">
                <Address /> 
                </div>
            </div>
        </div> </div>
    )
}

export default Contact
