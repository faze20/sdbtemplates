import React , {useEffect} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'



function Contents() {
    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='cms' content='wix shopify wordpress squarespace'/>
        `
        document.title = "Content Management";
      }, []);
    return (
        <>
            <div  className="mainsection_container" style= {{ background :"url('contentms.png') center center ",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            } }>
                <div className="submainsection_container">
                    <h2 className='submainsection_title'>CONTENT MANAGEMENT SYSTEMS </h2>

                    <div className="submainsection_items">
                        <p>
                        We manage,update and create your contents so you can meet the needs of your customer

                        </p>
                        <Fade bottom>
                            <div className="submainsection_list">
                                <li> <Link   to="/contact">  WORDPRESS</Link> </li>
                                <li> <Link   to="/contact">  GO-DADDY</Link> </li>
                                <li> <Link   to="/contact">  OTHERS </Link> </li>
                            </div>
                        </Fade>
                        <div className='submainsection_link'>
                        <Link   to="/contact">  
                            Ready for your optimised contents?Contact us.
                        </Link>
                        </div>


                    </div>
                </div>
               

                
            </div>
            <div className="mainsection_otherscontainer">
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

export default Contents
