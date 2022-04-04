import React from 'react'
import Address from './Address';
import Quote from './Quote';
import '../Contact.css'



function Contact() {
    return (
        <div className="contact_container">
            <div className="contactcontainer_contents">
                <h2>Contact </h2>
            </div>
            <div className="item_contact">
                 <Quote />
                   <Address /> 
            </div>
        </div>
    )
}

export default Contact
