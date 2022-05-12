import React , {useEffect} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'



function Ecommerce() {
    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='online store' content='debug'/>
        <meta name='description'
         content=
         'We perform SEO campaigns over several months, allow your
          business to gain organic traffic. Our SEO strategy allows
           your website to gain overall revenue, brand recognition for you.'
         />
        `
        document.title = "SDBytes -SEO Company America |Local SEO in California | E-commerce ";
      }, []);
    return (
        <>
            <div className="mainsection_container"  style= {{ background :"url('ecommerceseo.png') center center ",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                } }>

            <div className="submainsection_container">

                <h2  className='submainsection_title'>S E O | E Commerce Store</h2>
                <div className="submainsection_items">
                    <p>
                    Our team of experts build highly Optimised and top ranking Stores

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

            <div className="mainsub_otheritems nft ">
                        <img src="seo.jpg" alt="online classes" />
                        <div className="item_description_nft">
                            <h2>S E O<span className='headin_span'> Overview</span> </h2>
                            <div className="description_nft">
                                <h3>S E O</h3>
                                <p>
                                Search Engine Optimization is vital to ranking your website on search engines such as Google.
                                 </p>
                                 <p>
                                The process of SEO works to create ORGANIC traffic to your site based on specific traffic 
                                patterns. We have developed a proprietary SEO campaign method that guarantees to increase 
                                traffic to your website and help RANK your site on Google.
                                </p>
                                <Link  to="/contact"> Talk to Us </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mainsub_otheritems nft " style={{ marginTop : '8rem'}}>
                       
                        <div className="item_description_nft">
                            <h2>Our<span className='headin_span'> Process</span> </h2>
                            <div className="description_nft">
                                <h3>How We SEO !</h3>
                                <p>
                                Our simple, step by step process allows us to predictably create value
                                 for your business through bringing in organic traffic. The true value
                                  in SEO is the authority that it helps to create for your online presence.
                                   This ultimately helps establish your business as a leader in your market.
                                 </p>
                                 <p>

                                We perform contracted SEO campaigns that will, over several months, allow
                                 your business to gain organic traffic which will increase overall revenue,
                                  brand recognition, and search engine authority.
                               </p>
                               <p>
                                We will walk you through our entire process and define the metrics that you
                                 can expect, so that you are comfortable trusting us to bring your website
                                  more business. We take the time to understand your needs so that we can
                                   execute a SEO campaign that delivers efficient results.
                                </p>
                                <Link  to="/contact"> Talk to Us </Link>
                            </div>
                        </div>
                        <img src="seo1.jpg" alt="online classes" />
                    </div>

          
            </div>
        </>
    )
}

export default Ecommerce
