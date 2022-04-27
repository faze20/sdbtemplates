import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'



function Contents() {
    return (
        <div className="blockapp"  style= {{ background :"url('contentms.png') " } }>
             <Fade left>
             <p> CONTENT MANAGEMENT SYSTEMS</p>
             </Fade>

            <div className="blockapp_item">
                We manage,update and create your contents so you can meet the needs of your customer

                <div className="blockapp_links">
                <Fade bottom>
                <li> <Link   to="/contact">  WORDPRESS</Link> </li>
                <li> <Link   to="/contact">  GO-DADDY</Link> </li>
                <li> <Link   to="/contact">  OTHERS </Link> </li>
                </Fade>
                <Link   to="/contact">  
                Ready for your optimised contents?Contact us.
                </Link>
                



                </div>
            </div>
            
        </div>
    )
}

export default Contents
