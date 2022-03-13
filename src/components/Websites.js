import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'




function Websites() {
    return (
        <div className="websites">
            <header style= {{ background :"url('/assets/websitebnr.png') center center" } }>
            <div className="header_content">
                <Fade right>
                    <div className="left">
                        <p>Optimise your Site</p>
                        <p> Web Application </p>
                    </div>
                    <button><Link  to="/contact">Get In Touch </Link> </button>
                    </Fade>
             </div>

            </header>
            <div className="subnav">
                <div> <h2> Web services</h2> </div>
                <a href="#top"> I have a website </a>
                <a href="#top"> I need a website </a>
                <a href="#top"> Website Applications </a>                
            </div>

            <h2>Website | Web Application</h2>
            <div className="applications-contents">
                <div className="content-right">
                    <p>The First point of call for over 75% of customers that want to experience an
                         effortless shopping with safety and 
                        satisfaction, will make or plan to make such transactions  on the internet . It is imperative
                        that not only your website be secure, it has got to be appealing to Customers online.
                        Now , every Customer is unique , then how can you guarantee satisfaction to these diverse
                        demographics of users crawling through your website.
                    </p>
                    <p>
                        From a Landing page to a fully functional dynamic Web application , we always make 
                        sure that it's developed with full accessibility , responsiveness , security and scalability.
                        You want to Improve your website ? and skeptical about the downtime , we take the worry 
                        from your hands and simplify the entire scalability , responsiveness that best fit your website
                        to increase the clients satisfaction level with little Or NO Website Downtime.


                    </p>
                    <p>
                        Get that peace of mind when you kmow your Website performance is at the level your allocated 
                        recources supports . The supports measured in terms of customer acquisitions , enhanced user experiences
                        accross multiple platforms and having a happy repeat customer followed with good recommendations.
                    </p>
                    <h4>Optimisation Process ......</h4>
                    <p>
                        We will get the initial performance of your website in its current state , enhance the media items and 
                        code syntax of the page with most visits and make a technical evaluation.
                        For Web Apps , the situation might require a migration of database , changing Api call point depending 
                        on the initial technical report from your Web Application.
                    </p>
                    <h4>Next ...</h4> 
                    <p>
                        Media does affect Site performance a lot , so all img tags will be completely optimised and make sure they 
                        still retain their picture perfect pixelate levels. Followed by Headings  and titles with broken links.
                        For Web Applications , a simple change from an Array list to a Linked list might significantly Improve the 
                        performance overall.
                        </p>
                    <h4>The Effects ...</h4>
                    <p> are increased loading times , improved responsiveness and a fully scalable Website or Appllication as your
                        project entails which will make your customers spend more quality time on your website. The more time the Client spend
                         on your site due to this improved efficiency , the more inflow of business and increased profit.
                    </p>
                    <div className="subItems">
                      <section >
                         <h2 id="top"> Services</h2>
                        
                      </section>
                      <section className="card_container">
                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card"> I have A Site</h4>
                              <div className="card_divider"></div>
                              <img src="/assets/cms2.jpg" alt="" />
                              <p>We maintain, add new features, optimise images, update deprecated codes, 
                                  refactor codes and install plugins to make your site user-friendly
                             
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card">I need A Site </h4>
                              <div className="card_divider"></div>
                              <img src="/assets/siteimg.jpg" alt="" />
                              <p>Our focus is solely on how your clients interacts with your Application
                                  ensuring it is User-friendly. 
                             
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  
                              <h4 id="card"> Web Applications </h4>
                              <div className="card_divider"></div>
                              <img src="/assets/webapp.jpg" alt="" />
                              <p>Full stack application with real time interactions with backend architecture 
                                  and complete customisation to achieve your goals.
                              
                              </p>
                              <p>More info: Get in touch </p>
                              </Link>
                          </div>

                          <div className="card">
                          <Link  to="/contact">  

                              <h4 id="card"> Landing Pages</h4>
                              <div className="card_divider"></div>
                              <img src="/assets/landingpage.jpg" alt="" />
                              <p>Our team of experts build effective pages for products, designs ,real estate ,
                                  newsletters, personal or welcome Landing pages.
                              
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
                        <img src="/assets/mongo.jpg" alt="" />
                        <img src="/assets/php.jpg" alt="" />
                        <img src="/assets/python.jpg" alt="" />
                        <img src="/assets/sketch.jpg" alt="" />
                        <img src="/assets/node.jpg" alt="" />
                        <img src="/assets/sql.jpg" alt="" />
                        <img src="/assets/git.jpg" alt="" />
                        <img src="/assets/github.jpg" alt="" />
                        <img src="/assets/figma.jpg" alt="" />
                        <img src="/assets/drawio.jpg" alt="" />





                    </div>
                </div>
            </div>

            

            
        </div>
    )
}

export default Websites
