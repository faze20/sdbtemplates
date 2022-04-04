import React,  { useState } from 'react'
import Fade from 'react-reveal/Fade'
import emailjs from 'emailjs-com';
import '../Contact.css'


function Quote() {
    const [classstyle, setClassStyle] = useState('noshow')

   
    const sendEmail = (e)=>{
        e.preventDefault();
        

    emailjs.sendForm('service_abp3xof', 'bog_contact', e.target, 'user_zVskoVQi6GgYNK1h7NzD5')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setClassStyle('success')
      }, (error) => {
          console.log(error.text);
      });

    }

    return (
        <div className="quote_container">
            <div className='quote_header' style= {{ background :"url('/assets/contactbnr.jpg') center center" } }>
                


           <div className="contact_item">
               <div className="description">
                   Looking for A Reliable Software development company? <br />
                   Let's start with a free quote !
               </div>
               <div className="contact_header">
                   <Fade right>
                   <div className="headercontent">
                       <img src="/assets/signature.png" alt="Ready to sign NDA " />
                       
                       <div className="headercontent_text">
                       All your ideas are 
                        protected by NDA
                       </div> 
                   </div>

                   <div className="headercontent">
                       <div className="divider"></div>
                       <img src="/assets/time.png" alt="Ready to sign NDA " />
                       <div className="headercontent_text">
                       We will respond to you within 24hours
                       </div>                     
                       
                   </div>
                   <div className="headercontent">
                   <div className="divider"></div>
                       <img src="/assets/budget.png" alt="cost estimation " />
                       <div className="headercontent_text">
                      Detailed time 
                       and cost estimation
                       </div>   
                       
                   </div></Fade>
               </div>
               <div className="contact_form">

                   <form onSubmit={sendEmail}>
                   <input type="hidden" name="contact_number" />

                       
                       <textarea
                        maxLength="5000"
                        name="message-sdb"
                        required
                         placeholder="Tell us about your project*">

                         </textarea>
                       <div className="contact_input">
                           <input type="text" name="name-sdb" placeholder="First Name*" required/>
                           <input type="text" name="lastname-sdb" placeholder="Last Name*" required/>
                       </div>
                       <div className="contact_input">
                           <input type="email" name="email-sdb" placeholder="E-MAIL*" />
                           <input type="text" name="phone-sdb"  placeholder="PHONE*"/>
                       </div>
                       <div className="contact_input">
                           <input type="text" name="companyname-sdb" placeholder="Company name" />
                           <input type="text" name="companysize-sdb"  placeholder="Company size"/>
                       </div>
                       <button type="submit"> Get Quote</button>
                       <p id='success' className={classstyle} >
                       Your message has been sent, Quote on the way !</p>

                       
                   </form>
               </div>
           </div>
           </div>

        </div>
    )
}

export default Quote

