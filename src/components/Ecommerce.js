import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'



function Ecommerce() {
    return (
        <div className="blockapp"  style= {{ background :"url('ecommerceseo.png') " } }>
             <Fade left>
             <p> E Commerce Store </p>
             </Fade>

            <div className="blockapp_item">
                Our team of experts build Optimised and high ranking Stores

                <div className="blockapp_links">
                <Fade bottom>
                <li> <Link   to="/contact">  For Business</Link> </li>
                <li> <Link   to="/contact">  For Startups</Link> </li>
                <li> <Link   to="/contact">  For SEO </Link> </li>
                </Fade>
                <Link   to="/contact">  
                Ready for your  E-commerce Store?Contact us.
                </Link>          
                </div>
            </div>
            
        </div>
    )
}

export default Ecommerce
