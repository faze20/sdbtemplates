import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';


function Address() {
    return (
        <div className="address">
                        <div className="addr_section">
                       <address>
                           <BusinessIcon />
                           <p>25630 Felicia avenue, Menifee California.
                           CA 92586.</p>
                           
                       </address>
                       </div>
                       <div className="addr_section">
                          <PhoneIcon />
                          <p> +1 747 2498760 </p>
                           
                       </div>
                       <div className="addr_section">
                           <EmailIcon />
                           <p>info@softwaredevbytes.com</p>                           
                       </div>
                       <div className="addr_section">
                           <WorkIcon />
                           <div>
                           <a href="https://afeez-portfolio.herokuapp.com/"> PortFolio </a>
                           </div>
                       </div>

                   

            
        </div>
    )
}

export default Address
