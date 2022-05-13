import React from 'react'

function Funnel({heading}) {
    const funnelSubmit = () =>{
        console.log('Seo analysed report');
    }

  return (
    <div>
           <div className="funnel_form">
                    <div className="funnelform_container">
                        <h4>{heading}</h4>
                        <form onSubmit={funnelSubmit} >
                            <div className="funnelform_elements">
                                <div className="funnelform_items">
                                    <div className="f_item">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" required placeholder='First name' />
                                    </div>
                                    <div className="f_item">
                                        <label htmlFor="email">Business Email Address*</label>
                                        <input type="email" required placeholder='Business email' />
                                    </div>
                                    <div className="f_item">
                                        <label htmlFor="Phone Number">Phone Number</label>
                                        <input type="Number" required placeholder='+1 (747) 249 8760' />
                                    </div>
                                    <div className="f_item">
                                        <label htmlFor="Website Url">Website Url*</label>
                                        <input type="text" required placeholder='Website Url' />
                                    </div>
                                    <div className="f_item">
                                        <button type="submit">GET A FREE SEO ANALYSIS</button>
                                    </div>
                                </div>
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