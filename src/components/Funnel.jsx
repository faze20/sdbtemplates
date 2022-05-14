import React,  { useState } from 'react'
import emailjs from 'emailjs-com';


function Funnel({heading , buttonText }) {
    const [Feedback, setShowFeedback] = useState(false)

    const funnelSubmit = (e) =>{
        e.preventDefault()
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
    <div>
        <div className="funnel_form">
            <div className="funnelform_container">
                <h4>{heading}</h4>
                <form onSubmit={funnelSubmit} >
                    <input type="hidden" name="contact_number" />
                    <div className="funnelform_elements">
                        {Feedback ? 
                        <div className="funnel_feedback">
                            <p  className='success' >
                            Your message has been sent!!!
                            </p>
                            <button onClick={feedbackClose}> X </button>
                        </div>
                            :
                        <div className="funnelform_items">
                            <div className="f_item">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="funnel-name" required placeholder='First name' />
                            </div>
                            <div className="f_item">
                                <label htmlFor="email">Business Email Address*</label>
                                <input type="email" name="funnel-email" required placeholder='Business email' />
                            </div>
                            <div className="f_item">
                                <label htmlFor="Phone Number">Phone Number</label>
                                <input type="number" name="funnel-phone" required placeholder='+1 (747) 249 8760' />
                            </div>
                            <div className="f_item">
                                <label htmlFor="Website Url">Website Url*</label>
                                <input name="funnel-website" required placeholder='www.abc.com' />
                            </div>
                            <div className="f_item">
                                <button type="submit">{buttonText}</button>
                            </div>
                        </div>
                            }
                    </div>
                </form>
                <div className="funnelform_newsletter">
                    <p>Would You like to receive email updates and promotional
                            offers from Software dev Bytes in the future? *
                        </p>
                        <div className="funnelform_checkboxes">
                            <input type="checkbox" name="Yes" id="yes" />
                            <input type="checkbox" name="No" id="No" />
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Funnel