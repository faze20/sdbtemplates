import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'




function Softwares() {
    return (
        <div className="softwares">
            <header style= {{ background :"url('assets/apps.png') center center" } }>
                <div className="header_content">
                  <Fade right>
                    <div className="left">
                        <p>Custom Engineering </p>
                        <p> Continous Integration </p>
                    </div>
                    <button><Link  to="/contact">Get In Touch </Link> </button>
                    </Fade>
                </div>               
            </header>
            <div className="subnav">
                <div>
                <h2 className="subnav_h2" > Enterprise Applications </h2> </div>
                <a href="#top"> Custom Application Development </a>
                <a href="#top"> Software Testing </a>
                <a href="#top"> Saas Development |  Iaas  Development</a>                
            </div>

           <h2>Software</h2>
           <div className="applications-contents">
                <div className="content-right">
                    <p>Our Expertise for custom application development services cover third party integration, Mobile,
                        desktop, Web, and so on.
                        We will evaluate your project's scope and map out plans that is most efficicent with regards to
                        the solution your software wants to deliver as end product ensuring the best chance for a prolong
                        solution delivery. 
                    </p>
                    <p>
                       Most beneficial in majority of cases to develop a full cycle on each project-application , this ensures that all components
                       of the application is delivering as expected.

                    </p>
                   
                    <h4>Integration Process ......</h4>
                    <p>
                        We will get the initial performance of your website in its current state , enhance the media items and 
                        code syntax of the page with most interactions and create a technical evaluation.
                        For Web Apps ,the situation might require a migration of database, changing Api call point depending 
                        on the initial technical report on your Web Application
                    </p>
                    <h4>Next ...</h4> 
                    <p>
                        Third-party library dependencies does affect softwares in an unexpected manner , so we endevour to use 
                        more of legacy codes from scratch , reduce redundancy and unneccesary resource call back from 
                        functions or objects. Each project differs , so we scope project on whether a more object oriented
                        programming is best fit or a more functional programming. So also, a simple change from an Array list
                         to a Linked list might significantly Improve the performance overall.
                        </p>
                    <h4>The Effects ...</h4>
                    <p> are increased loading times , improved responsiveness and a fully scalable Website or Appllication as your
                        project entails which will make your customers spend more time using your solution. The more time Client depends 
                         on your solution as a result of the improved efficiency, the more profitable the solution becomes.
                    </p>
                    <div className="subItems">
                      <section >
                         <h2 id="top"> Services</h2>
                        
                      </section>
                      <section className="card_container">
                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card"> Enterprise Apps</h4>
                              <div className="card_divider"></div>
                              <img src="assets/enterpr2.png" alt="" />
                              <p>Development of Enterprise apps, including Complex ERP, CRM, HRM, automated
                                  billing and payment systems. 
                             
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card"> Custom Dev </h4>
                              <div className="card_divider"></div>
                              <img src="assets/custom2.jpg" alt="" />
                              <p>Our focus is solely on how your clients interacts with your Application
                                  ensuring it is User-friendly. 
                             
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  
                              <h4 id="card"> Testing </h4>
                              <div className="card_divider"></div>
                              <img src="assets/swtest.jpg" alt="" />
                              <p>Our target is always ensuring best quality while doing compatibility testing
                                  or cross platform testing and creating expert reports.
                              
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card"> Iaas | Saas</h4>
                              <div className="card_divider"></div>
                              <img src="assets/saas.jpg" alt="" />
                              <p>We create a lifecycle operation that enlist processes such as metrics report,
                                   ongoing billing ,making changes , information access .
                              
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
                        <img src="assets/mongo.jpg" alt="" />
                        <img src="assets/awsapp.jpg" alt="" />
                        <img src="assets/python.jpg" alt="" />
                        <img src="assets/oracle.jpg" alt="" />
                        <img src="assets/node.jpg" alt="" />
                        <img src="assets/sql.jpg" alt="" />
                        <img src="assets/git.jpg" alt="" />
                    </div>
                </div>
            </div>
           


        </div>
    )  
}

export default Softwares
