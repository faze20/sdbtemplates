import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'




function Applications() {
    return (
        <div className="applications">
            <header style= {{ background :"url('/assets/mobilebnr.png') center center" } }>
            <div className="header_content">
                  <Fade right>
                    <div className="left">
                        <p>Native Applications </p>
                        <p> MultiPlatform Apps </p>
                    </div>
                    <button><Link  to="/contact">Get In Touch </Link> </button>
                    </Fade>
                </div>

            </header>
            <div className="subnav">
            <div> <h2>Categories</h2> </div>
               
                <a href="#top"> IOS </a>
                <a href="#top"> Android </a>
                <a href="#top"> Cross Platform </a>                
            </div>

            <h2>Application Development</h2>
            <div className="applications-contents">
                <div className="content-right">
                    <p>Customer Satisfaction: A key to the survival of any business. With the 
                        surge in mobile traffic , your business should be gearing towards a fully mobile compliance
                        for that guaranteed customer satisfaction. Our Team of developers will
                        design and build an accessible, responsive and secure application for your 
                        client base that are constantly on  the mobile environment..
                    </p>
                    <p>
                        We are fully equipped, experienced with the latest technology to meet that particular
                        need to satisfy your customer base . Most of our development process includes 
                        Full-Life cycle management for either the IOS or Android based platforms which 
                        comprises of prototying , deployment and full testing ( UI/UX and database ) .                       
                    </p>
                    <h4>Our Process ......</h4>
                    <p>
                        We will scope your custom application development requiremnets and list
                        the market moving ideas so we can create a road map best fit for your project.
                    </p>
                    <h4>Next ...</h4>
                    <p>
                        We design and implement the most client friendly interfaces for the application
                        </p>
                    <h4>Resulting in ...</h4>

                    <p> The fact that the choices made is the best possible chance for a long-term success
                        for your application which will be the base foundation for any future version updates.
                        Version Updates, Technically will be reflection of feedbacks from your users and the market .
                    </p>
                    <div className="subItems">
                      <section >
                         <h2 id="top"> Categories </h2>
                        
                      </section>
                      <section className="card_container">
                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card"> Mobile Development </h4>
                              <div className="card_divider"></div>

                              <img src="/assets/pixel.png" alt="" />
                              <p>We strive to make your application user-friendly and functional using best 
                                  practices to align with the policies of the two major app stores in the market.
                             
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card">IOS </h4>
                              <div className="card_divider"></div>
                              <img src="/assets/ios.png" alt="" />
                              <p>Geting your App on Apple store is not a small feat but our IOS experts have you
                                  covered from the design to app deployment  
                                  on the apple market make clients interaction more satisfying.                          
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  
                              <h4 id="card"> Android </h4>
                              <div className="card_divider"></div>
                              <img src="/assets/android2.jpg" alt="" />
                              <p>Our Mobile Professional developers take you through each phase of the development
                                  process and guide you through the process of registering your app on playstore 
                                  following best practices.                            
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card"> Cross Platform </h4>
                              <div className="card_divider"></div>
                              <img src="/assets/wearable.png" alt="" />
                              <p>Our team of experts build effective wearable applications,
                                   best fit on different devices for everyday challenges.
                              
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>
                      </section>
                    </div>






                </div>






                <div className="content-left">
                    <h3>Technologies</h3>
                    <div className="content_img">
                        <img src="/assets/mobiledev.jpg" alt="" />
                        <img src="/assets/flutter.jpg" alt="" />
                        <img src="/assets/kotlin.jpg" alt="" />
                        <img src="/assets/sqlite.jpg" alt="" />

                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Applications
