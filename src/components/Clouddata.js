import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'



function Clouddata() {
    return (
        <div className="clouddata">
            <header style= {{ background :"url('/assets/sdbnew2.png') center center" } }>
                <div className="header_content">
                <Fade right>
                    <div className="left">
                        <p>Migrate Operations </p>
                        <p> Integrate Operations </p>
                    </div>
                    <button><Link  to="/contact">Get In Touch </Link> </button>
                    </Fade>
                </div>
                

            </header>
            <div className="subnav">
            <div> <h2> DATA :</h2> </div>

                
                <a href="#top"> Business Data </a>
                <a href="#top"> Consumer Data </a>
                <a href="#top"> Acquisition |  intelligence </a>                
            </div>
    
            <h2>Cloud Services</h2>
            <div className="clouddata-contents">
                <div className="content-right">
                    <p>
                        The Cloud Technology has evolved and has continue to become more 
                        established making it another top driving force in the quest of companies
                        to meet up with their client's ever-increasing demands.
                        </p>
                    <p>
                        Right Now, Focus is ever more on customers hence  your resources
                        should be channeled into proffering customised solutions for your
                        clienteles' instead of dealing with hardware resources which your
                        business might be currently implementing . </p>
                    <p>
                   
                        Cloud Migration can be worrisome, costly, or a huge disaster if not done
                        right from on-set.
                    
                        You might be worried about some possible occurences that might pop up during
                        Migration or Integration of your services into the cloud.
                        We take out the stress off you by Simplifying your cloud moving experience.
                        
                       
                    </p><Link  to="/contact"> <h3>Get your Cloud service quote</h3> </Link>

                    <h4>How We Do it ......</h4>

                    <p>If your goal is to use cloud for Infrastructure as a Service or Platform as a
                        Service, We take you through that Cloud Path in phases avoiding disruption to your 
                        operations and not just expanding what the cloud will do for your firm. However, be aware
                        that moving to the cloud does not mean you no longer need IT Management and Monitoring tools.
                    </p>

                    <h4>Then ...</h4>

                    <p>We supply fast reliable technical support Onsite or Remotely. </p>

                    <h4>And ...</h4>

                    <p>We recommend the best-fit automation tools for your set up such as 
                        Window Virtual desktop.
                    </p><Link  to="/contact"> <h3>Get your Cloud service quote</h3> </Link>
                    
                    
                    <div className="subItems">
                      <section >
                         <h2 id="top">Data</h2>
                         <p>
                             The Data related challenges most companies will go through,  or experiencing curently or
                             will be faced in the future includes how to eliminate waste, avoid 
                             allocating resources to out-of-date contacts and increase efficiency of  the response
                             rates. These issues cost your company or will become expensive if not factored into
                             business setup at an early stage of the company. 
                             We build  customised data tools set for your company to mitigate against all of these 
                             challenges enabling you to optimize your client's digital transformation in a cost-efficient 
                             way which increases your productivity. <br /><br />
                             It's becoming a one-button-click events this days to collect data from various sources
                             which might includes different file format and even those that don't give your company
                             any significant value.
                             Does your company store data ON-Site , in the Cloud or a combination of both? <br />
                             Our developers have the expertise to implement data storage and migration solutions that
                             will give you a secured access to your data in a much more convinient way built around your
                             business model and our solutions incoporate analytic tools and processsses to help you 
                             sort through the most used data,isolate and address issues before it brings down the system.
                             Overall this gives you a fast tracking process to make informed decisions.
                         </p>
                         <p>
                             The global market is data drivien and creating value from data is what we stand for.
                            You make more money from our solutions as it autoscale to meet your demands,gets you quality
                            ,accurate and consistent data process delivery.
                         </p>
                      </section>
                      <section className="card_container">
                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card"> Consumer Data</h4>
                              <div className="card_divider"></div>
                              <img src="/assets/dataanalysis.jpg" alt="" />
                              <p>We combine your data from different sources and analyse against industry benchmark. 
                             
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card"> Business Data </h4>
                              <div className="card_divider"></div>
                              <img src="/assets/bigdata.jpg" alt="" />
                              <p>We proffer business solutions that indicates how your data can grow your company. 
                             
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  
                              <h4 id="card"> Data Automation</h4>
                              <div className="card_divider"></div>
                              <img src="/assets/dataautomate.jpg" alt="" />
                              <p>Automate your data transfer and focus on what matters. 
                              
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card"> Foot Print</h4>
                              <div className="card_divider"></div>
                              <img src="/assets/datafootprint.jpg" alt="" />
                              <p>Calculate your foot print and we recommend right processes .
                              
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
                        <img src="/assets/azure.png" alt="" />
                        <img src="/assets/awscloud.jpg" alt="" />
                        <img src="/assets/firebase.jpg" alt="" />
                        <img src="/assets/ibm.png" alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clouddata
