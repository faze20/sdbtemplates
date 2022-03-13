import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'



function Portfolio() {
    return (
        <div className="blockapp"  style= {{ background :"url('/assets/portfolio22.png') " } }>
            <Fade left>

             <p> BEST PORTFOLIO SERVICES</p>
             </Fade>

            <div className="blockapp_item">
                We develop a customised portfolio to secure that job or project

                <div className="blockapp_links">
                    <Fade bottom>
                <li> <Link   to="/contact">  Entrepreneurs</Link> </li>
                <li> <Link   to="/contact">  For Developers</Link> </li>
                <li> <Link   to="/contact">  For Designers </Link> </li>
                </Fade>
                <Link   to="/contact">  
                Ready for your next career move?Contact us.
                </Link>
                



                </div>
            </div>
            
        </div>
    )
}

export default Portfolio
