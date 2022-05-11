import React , {useEffect} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade'



function Debugging() {
    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='debug' content='debug'/>
        <meta
        name="description"
        content="Software dev bytes offers top Debugging developers, programmers, and software engineers on 
        ... Top companies and start-ups choose Software Dev Bytes Debugging freelancers for their production bug issues"
      />
      <meta name = "title" content = "HTTP Debugger - Debug HTTP API Calls to Back-ends" />
        `
        document.title = "Real-Time Debugging Systems - Debugging Made Easy";
      }, []);
    
    return (
        <>

        <div className="mainsection_container"  style= {{ background :"url('refactor.png') center center",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
        } }
        >
            <div className="submainsection_container">
               
                <h2 className='submainsection_title'> REFACTORING | DEBUGGING SERVICES</h2>
               

                <div className="submainsection_items">
                    <p>
                        Our Experts delivers best quality refactored codes for your projects
                    </p>

                    <Fade bottom>
                        <div className="submainsection_list">
                            <li> <Link   to="/software">  Softwares </Link> </li>
                            <li> <Link   to="/App's">  Developers</Link> </li>
                            <li> <Link   to="/contact">  Custom Codes </Link> </li>
                        </div>
                    </Fade>

                    <div className='submainsection_link'>
                        <Link   to="/contact">  
                        Refactor your older version codes ! Contact us.
                        </Link>
                    </div>

                </div>
 
            </div>
            
        </div>
            <div className="mainsection_otherscontainer">
            <div className="fixed_link">
                    <Link to='/contact'>Get In Touch</Link>
                </div>
                <div className="mainsub_contents">
                <div className="mainsub_items">
                        <img src="step1.png" alt="online classes" />
                        <div className="item_description">
                            <h2>Our <span className='headin_span'>Process</span> </h2>
                            <div className="description">
                                <h3>Step One</h3>
                                <p>
                                We'll share your request with mentors with related expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mainsub_items">
                      
                        <div className="item_description">
                            <h2>Our <span className='headin_span'>Process</span> </h2>
                            <div className="description">
                                <h3>Review &amp; chat with mentors</h3>
                                <p>
                                Use our messaging feature to instantly chat 
                                with mentors around the world.
                                </p>
                            </div>
                        </div>
                        <img src="step2.png" alt="debug" />
                    </div>
                    <div className="mainsub_items">
                        <img src="step3.png" alt="debug" />
                        <div className="item_description">
                            <h2>Our <span className='headin_span'>Process</span> </h2>
                            <div className="description">
                                <h3>Start live session or create job</h3>
                                <p>
                                Use our messaging feature to instantly chat 
                                with mentors around the world.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mainsub_otheritems">
                        <img src="debug1.png" alt="online classes" />
                        <div className="item_description">
                            <h2>How can <span className='headin_span'>We help you?</span> </h2>
                            <div className="description">
                                <h3>Live mentorship</h3>
                                <p>
                                Still not "getting" it? Personalize your 
                                learning experience with the right mentor.
                                </p>
                                <Link  to="/contact"> Talk to Us </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Debugging

