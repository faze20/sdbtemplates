import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'



function Debugging() {
    return (
        <div className="blockapp"  style= {{ background :"url('/assets/refactor.png') " } }>
            <Fade left>
             <p> REFACTORING | DEBUGGING SERVICES</p>
             </Fade>

            <div className="blockapp_item">
                Our Experts delivers best quality refactored codes for your projects

                <div className="blockapp_links">
                <Fade bottom>
                <li> <Link   to="/contact">  Softwares </Link> </li>
                <li> <Link   to="/contact">  For Developers</Link> </li>
                <li> <Link   to="/contact">  Custom Codes </Link> </li>
                </Fade>
                <Link   to="/contact">  
                Refactor your older version codes ! Contact us.
                </Link>
                



                </div>
            </div>
            
        </div>
    )
}

export default Debugging

