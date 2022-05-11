import React , {useEffect} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'



function Portfolio() {
    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='portfolio' content='vision  mission'/>
        `
        document.title = "Portfolio";
      }, []);
    
    return (
        <>
            <div className="mainsection_container"  style= {{ background :"url('portfolio22.png') center center ",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            } }>
                <div className="submainsection_container">
                <h2 className='submainsection_title'>BEST PORTFOLIO SERVICES</h2>
                <div className="submainsection_items">
                    <p>
                        We develop a customised portfolio to secure that job or project
                    </p>

                    <Fade bottom>
                    <div className="submainsection_list">
                        <li> <Link   to="/contact">  Entrepreneurs</Link> </li>
                        <li> <Link   to="/contact">  For Developers</Link> </li>
                        <li> <Link   to="/contact">  For Designers </Link> </li>
                    </div>
                    </Fade>
                    <div className='submainsection_link'>
                            <Link   to="/contact">  
                            Ready for your next career move?Contact us.
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

                   </div>
                </div>
            </>
    )
}

export default Portfolio
