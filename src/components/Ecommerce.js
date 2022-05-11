import React , {useEffect} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'



function Ecommerce() {
    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='online store' content='debug'/>
        <meta name='online sales' content='online shopping shopify etsy'/>
        `
        document.title = "E-commerce";
      }, []);
    return (
        <>
            <div className="mainsection_container"  style= {{ background :"url('ecommerceseo.png') center center ",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                } }>

            <div className="submainsection_container">

                <h2  className='submainsection_title'>E Commerce Store</h2>
                <div className="submainsection_items">
                    <p>
                    Our team of experts build Optimised and high ranking Stores

                    </p>
                    <Fade bottom>
                    <div className="submainsection_list">
                        <li> <Link   to="/contact">  For Business</Link> </li>
                        <li> <Link   to="/contact">  For Startups</Link> </li>
                        <li> <Link   to="/contact">  For SEO </Link> </li>
                    </div>
                    </Fade>
                    <div className='submainsection_link'>
                        <Link   to="/contact">  
                        Ready for your  E-commerce Store?Contact us.
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

export default Ecommerce
