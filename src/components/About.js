import React , {useEffect} from 'react'
import TextTransition, { presets } from "react-text-transition";
import { Link } from 'react-router-dom'

import {Helmet} from "react-helmet";
import Fade from 'react-reveal/Fade'




function About() {
    const TEXTS = [
        " Hi, my name is Afeez",
        "and I'm the founder and",
        "CEO of Software Dev Bytes."
    ]
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
    //     document.head.innerHTML+=`
    //     <meta name='Why Software dev bytes' content='why choose us'/>
    //     <meta
    //     name="description"
    //     content="Technology has forever changed the face of business. ..
    //     . cost-effectiveness of your software development project with
    //      managed software services from Software dev Bytes."
    //   />
        
    //     `
    //     document.title = "About Us";
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

      

    return (
        <div className="aboutapp"  >
             <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Technology has forever changed the face of business. ..
                    . cost-effectiveness of your software development project with
                    managed software services from Software dev Bytes."
                />
                <meta  name="twitter:description"
                 content="The Award-winning digital product design and development company with nearly two decades of experience in global markets."
                 />
                <title>About Us</title>
                <link rel="canonical" href="https://www.softwaredevbytes.com" />
            </Helmet>
            <div className="aboutcontext_container" style= {{ background :"url('banner1.jpg') center center",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                 } } >
                <div className="about_details">
                <TextTransition
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.gentle }
                />

                    
                </div>
                <div className="about_buttons">
                    <Fade left>
                        <a href="https://afeez-portfolio.herokuapp.com/"> PortFolio </a>
                        {/* <Link   to="/contact"> Contact </Link>  */}
                    </Fade>

                </div>

            </div>
            <div className="about_section">
                <div className="section_contents">
                    <div className="section_item">
                        <span>WE ARE</span>
                        <h1 className='oswald_font'>PROBLEM SOLVERS</h1>

                    </div>
                    <div className="section_itemtwo">
                        <h2>Our Approach is Simple.</h2>
                        
                        <p>
                        We learn about the unique customer value your business creates, 
                        before building a custom website or solution, to ensure everything we do is to
                         help you and your brand achieve growth.
                        </p>

                        
                        </div>
                </div>

                <div className="section_whoweare">
                  <img src="office.jpg" alt="office"  />
                    <div className="who_weare">
                        <h2> <span className='headin_span'>ABOUT</span>  US</h2>
                        <p>
                        The way online marketing agencies have traditionally
                         created user experiences is broad and generalized. 
                         Softwaredev Bytes is fixing that with personalization at the 
                         core of what we do.
                        </p>
                        <Link   to="/contact">Contact us</Link> 
                    </div>
                </div>

                <div className="section_whoweare">
                    <div className="who_weare">
                        <h2> <span className='headin_span'>WHO</span> WE ARE</h2>
                        <p>
                        We created Softwaredev Bytes by blending our skills for web development,
                         content strategy, and social media into a powerful, agile team.
                          Our team of designers, brand strategists, and project managers
                           partner with you to build forward-thinking user experiences, 
                           so you can focus on result-driven outcomes.

                        </p>
                        <Link   to="/contact"> Get In Touch</Link> 
                    </div>
                    <img src="about1.jpg" alt="office"  />
                   

                </div>
                <div className="section_whoweare">
                <img src="about2.jpg" alt="office"  />
                    <div className="who_weare">
                        <h2> <span className='headin_span'>WHAT</span>  WE DO</h2>
                        <p>
                        We want to help you grow your traffic, sales and brand&#39;s market
                         success. From educational insights posted at the Logic Lab to our
                          consultative web agency services, we want to help make your growth
                           goals a reality, regardless of where you are now.

                        </p>
                        <Link   to="/software"> Services</Link> 
                    </div>
                   
                   

                </div>
            </div>

            <div className="aboutcontext_staff">
                <div className="staff_container">
                    <img className='user_image image1' src="profile-pic.png" alt="Afeez Badmos" loading="lazy" />
                    <img className='user_image image2' src="profileme.jpg" alt="Afeez Badmos" loading="lazy" />
                    <img className='user_image image3' src="profile-pic.png" alt="Afeez Badmos" loading="lazy" />
                    <img className='user_image image4' src="profileme.jpg" alt="Afeez Badmos" loading="lazy"/>
                </div>
                <div className="staff_container">
                    <div className='user_image div1' ></div>
                    <div className='user_image div2'   ></div>
                    <div className='user_image div3'   ></div>
                    <div className='user_image div4'   ></div>
                    <div className='user_image div5'   ></div>
                </div>
            </div>



        </div>
    )
}

export default About
