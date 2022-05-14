import React,  { useState } from 'react'
import emailjs from 'emailjs-com';
import '../Contact.css'

function Quote({text}) {
    const [Feedback, setShowFeedback] = useState(false)

    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target, 
            process.env.REACT_APP_PUBLIC_KEY
        )
        .then((result) => {
            e.target.reset();
            setShowFeedback(true)
        }, (error) => {
            alert(error.text);
        });
    }
    const feedbackClose = ()=>{
        setShowFeedback(false)
    }
    return (
        <div className="quote_container">
            <div className="quote_content">
                <form onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    {Feedback ? 
                        <div className="funnel_feedback">
                            <p  className='success' >
                            Your message has been sent, Quote on the way !
                            </p>
                            <button onClick={feedbackClose}> X </button>
                        </div>
                            :
                        <div>
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
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default Quote

