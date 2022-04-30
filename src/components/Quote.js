import React,  { useState } from 'react'
import emailjs from 'emailjs-com';
import '../Contact.css'


function Quote({text}) {
    const [classstyle, setClassStyle] = useState('noshow')

   
    const sendEmail = (e)=>{
        e.preventDefault();
        

    emailjs.sendForm('service_abp3xof', 'bog_contact', e.target, 'user_zVskoVQi6GgYNK1h7NzD5')
      .then((result) => {
          e.target.reset();
          setClassStyle('success')
      }, (error) => {
          alert(error.text);
      });

    }

    return (
       
           
           <div className="quote_container">
              
               <div className="quote_content">

                   <form onSubmit={sendEmail}>
                   <input type="hidden" name="contact_number" />
                       
                             
                       <div className="quote_forminput">
                           <input type="text" name="name-sdb" placeholder="First Name*" required/>
                           
                           
                           <input type="email" name="email-sdb" placeholder="E-MAIL*" />
                           </div>
                           <div className="quote_forminput">
                           <input type="number" name="phone-sdb"  placeholder="PHONE*"/>
                           <input type="text" name="companyname-sdb" placeholder="Company name" />
                       </div>
                       <div className='form_textarea'>
                        <textarea
                            maxLength="5000"
                            name="message-sdb"
                            required
                            placeholder="Tell us about your project*">
                        </textarea>

                       </div>
                       <button className='quote_button' type="submit"> {text ? text : 'Get in Touch'}</button>
                       <p id='success' className={classstyle} >
                       Your message has been sent, Quote on the way !</p>

                       
                   </form>
               </div>
           </div>
          

       
    )
}

export default Quote

