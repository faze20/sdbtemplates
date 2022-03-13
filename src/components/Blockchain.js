import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'






function Blockchain() {
    return (
        <div className="blockapp"  style= {{ background :"url('/assets/blockchain.png') center center" } }>
             <Fade left>
             <p> BLOCKCHAIN WEB SERVICES</p>
             </Fade>

            <div className="blockapp_item">
                Our Experts delivers best Infrastructure for blockchain applications

                <div className="blockapp_links">
                <Fade bottom>

                <li> <Link   to="/contact">  For Business</Link> </li>
                <li> <Link   to="/contact">  For Developers</Link> </li>
                <li> <Link   to="/contact">  For Miners</Link> </li>
                </Fade > 
                <Link   to="/contact">  
                Ready for your Blockchain startup?Contact us.
                </Link>
                



                </div>
            </div>
            
        </div>
    )
}

export default Blockchain
