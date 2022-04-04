import React , {  useEffect} from 'react'
import '../Websites.css'
import { Link , useNavigate } from 'react-router-dom'
import TextTransition, { presets } from "react-text-transition";

import Fade from 'react-reveal/Fade'




function Websites() {
    const TEXTS = [
        "WordPress , Wix ,CMS  ",
        "Customised Web App",
        "E-commerce ,shopify ,Etsy , Squarespace."
    ]
    const [index, setIndex] = React.useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
    return (
        <div className="websites_container">
            <div className="websites_contents">
            <div className='website_divider'></div>

                <div className="websites_subheader">
                    <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.gentle }
                    />
                    <div className="pricing_button">
                        <button onClick={()=> navigate("/pricing")}>Pricing</button>
                    </div>


                
                 </div>
                 <div className="websites_subnav">
                    <ul className='website_ul'>
                        <li>
                            <Link to="/utilities">
                            Image Optimisation
                            </Link>
                        </li>
                        <li>
                            <Link to="/utilities">
                           Domain name checker
                            </Link>
                        </li>
                        <li>
                            <Link to="/utilities">
                           Website Redesign
                            </Link>
                        </li>
                        <li>
                            <Link to="/utilities">
                               SEO
                            </Link>
                        </li>
                    </ul>
                             
                </div>
       

            
            <header >
                <div className="website_header">
                        <div className="websiteheader_content">
                            <Fade right>
                            <h1 className='fade_h1'>Create Your Own Web Masterpiece </h1>
                            <p className='fade_p'>Every user is like a potential buyer or
                                partner, uses the Internet to search 
                                for information about goods and services.
                                At their disposal are thousands of offers, 
                                instant consultations of experts, forums,
                                opinions and advice.</p>
                           
                       
                              <button onClick={()=> navigate("/contact")} className='fade_button'>Start Now  </button>
                             </Fade>
                        </div>
                </div>

            </header>
           <div className="mini_header">
                <div> </div>
                <p>What We Offer</p>
                <div> </div>

           </div>
            <h1 className='sub_header'>Your Main Features &amp; Benefits</h1>
            <div className="benefits_container">
                <div className="benefits_contents">
                    <div className="benefit_item">
                        <img src="/assets/resultgoal.jpg" alt="branding" />
                        <h5>Branding</h5>
                        <p>
                        We provide everything your site needs
                         to perform at it&#39;s highest capabilities
                          on the major search engines.
                        </p>
                    </div>
                    <div className="benefit_item">
                        <img src="/assets/teamwork.jpg" alt="marketing"  />
                        <h5>24/7 Dev Team</h5>
                        <p>
                        We do have a round-the-clock development
                        team to support your software solutions.
                        </p>
                    </div>
                    <div className="benefit_item">
                        <img src="/assets/presentation.png" alt="presentation"  />
                        <h5>Performance Report</h5>
                        <p>
                        Periodic reports on  websites
                        to help with next decision-making
                        process when its time to scale.
                        </p>
                    </div>
                </div>
            </div>
            <div className="websiteother_main">
                <div className="website_right">
                    <div className="right_contents">
                        <div className="right_items">
                            <h2>Our Process</h2>
                            <div className="rightitem_content">
                            <img src="/assets/ourprocess.jpg" alt="process" />

                            <p>The First point of call for over 75% of customers that want to experience an
                                effortless shopping with safety and 
                                satisfaction, will make or plan to make such transactions  on the internet . It is imperative
                                that not only your website be secure, it has got to be appealing to Customers online.
                                Now , every Customer is unique , then how can you guarantee satisfaction to these diverse
                                demographics of users crawling through your website.
                            </p>

                            </div>
                        </div>
                        <div className="right_items">
                            <h2>Development Process</h2>
                            <div className="rightitem_content">
                        <p>
                            From a Landing page to a fully functional dynamic Web application , we always make 
                            sure that it's developed with full accessibility , responsiveness , security and scalability.
                            You want to Improve your website ? and skeptical about the downtime , we take the worry 
                            from your hands and simplify the entire scalability , responsiveness that best fit your website
                            to increase the clients satisfaction level with little Or NO Website Downtime.
                            Get that peace of mind when you know your Website performance is at the level your allocated 
                            recources supports . The supports measured in terms of customer acquisitions , enhanced user experiences
                            accross multiple platforms and having a happy repeat customer followed with good recommendations.
                        </p>
                            <img src="/assets/webperformance.png" alt="performance" />

                            

                            </div>
                        </div>
                        <div className="right_items">
                            <h2>Optimisation Process .....</h2>
                            <div className="rightitem_content">
                            <p>
                            We will get the initial performance of your website in its current state , enhance the media items and 
                            code syntax of the page with most visits and make a technical evaluation.
                            For Web Apps , the situation might require a migration of database , changing Api call point depending 
                            on the initial technical report from your Web Application.
                        </p>
                        <img src="/assets/optimisationnew.png" alt="process" />


                            </div>
                        </div>
                        <div className="right_items">
                            <h2>Next ...</h2>
                            <div className="rightitem_content">
                            <img src="/assets/next.png" alt="process" />
                            <p>
                            Media does affect Site performance a lot , so all img tags will be completely optimised and make sure they 
                            still retain their picture perfect pixelate levels. Followed by Headings  and titles with broken links.
                            For Web Applications , a simple change from an Array list to a Linked list might significantly Improve the 
                            performance overall.
                            </p>

                            </div>
                        </div>
                        <div className="right_items">
                            <h2>Effect and Results ...</h2>
                            <div className="rightitem_content">
                            <p>The effects are noticed on increased loading times , improved responsiveness and a fully scalable Website or Appllication as your
                            project entails which will make your customers spend more quality time on your website. The more time the Client spend
                            on your site due to this improved efficiency , the more inflow of business and increased profit.
                        </p>
                        <img src="/assets/resultimg.png" alt="results" />
                            </div>
                        </div>
                        
                    </div>

                    <div className="websites_services">
                     
                         <h2 id="top">Our Services</h2>
                        
                     
                      <section className="websitecard_container">
                          <div className="websitecard">
                              <h4 id="card"> Digital Marketing </h4>
                                 <Link  to="/contact">  

                                 <img className='card_image' src="/assets/newseo.jpg" alt="seo" />
                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>
                              <p>We maintain, add new features, optimise images, update deprecated keywords, 
                                  update xml files and google indexing. We install plugins to make your site user-friendly
                                  and fix seo performance issues.
                                  
                              </p>
                             
                          </div>
                          <div className="websitecard">
                              <h4 id="card"> Websites </h4>
                                 <Link  to="/contact">  
                                 <img className='card_image' src="/assets/landingpage.jpg" alt="seo" />

                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>

                              <p>We give your customers an awesome website experience regardless of the
                                  device they are on .you get high end designs helping your business to
                                  grow.
                              </p>
                             
                          </div>
                          <div className="websitecard">
                              <h4 id="card"> Web Applications</h4>
                                 <Link  to="/contact">  

                                 <img className='card_image' src="/assets/webapp.png" alt="seo" />
                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>

                              <p>We develop progressive web app for your business that helps you manage 
                                  your clients in one place , user friendly ,end-to-end management with 
                                  authorisations, verifications and streamlined accessibility .
                              </p>
                             
                          </div>
                          <div className="websitecard">
                              <h4 id="card"> Landing Pages and Funnels </h4>
                                 <Link  to="/contact">  
                                 <img className='card_image' src="/assets/websitenew.jpg" alt="seo" />

                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>

                              <p>We build professionally designed ,conversion-optimised pages to help you close 
                                  deals faster and turn leads from prospects into customers.
                              </p>
                             
                          </div>

                         
                      </section>
                    </div>
                </div>
                <div className="Websitecontent-left">
                    <h3>Technologies</h3>
                    <div className="websitecontentleft_img">
                        <img src="/assets/mongo.jpg" alt="mongodb" />
                        <img src="/assets/php.jpg" alt="php" />
                        <img src="/assets/python.jpg" alt="python" />
                        <img src="/assets/sketch.jpg" alt="sketch" />
                        <img src="/assets/node.jpg" alt="node" />
                        <img src="/assets/sql.jpg" alt="sql" />
                        <img src="/assets/git.jpg" alt="git" />
                        <img src="/assets/github.jpg" alt="github" />
                        <img src="/assets/figma.jpg" alt="figma" />
                        <img src="/assets/drawio.jpg" alt="drawio" />
                    </div>
                </div>

                <div className="mini_header">
                <div> </div>
                <p>We passionate about</p>
                <div> </div>

                     </div>


                <div className="website_aboutme">
                <h2>About Me</h2>
                    <div className="aboutme_content">
                    <div className="image">
                              <img src="/assets/profile-pic.png" alt="afeez badmos" />
                        </div>
                       
                        <div className="about_text">
                            
                            <h4>
                            I am Afeez Badmos, I'm a passionate web designer 
                            &amp; developer with 12 Years of Experience.
                            </h4>
                            <p>
                            As a passionate front-end developer,
                             I prefer to run my own business rather than routine office
                              work. Such lifestyle helps me enjoy my favourite hobbie 
                              traveling. Being able to do your job in every corner of our
                               planet is amazing!
                            </p>
                            <div className="acheivements">
                               
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <div>
                                <h5>Best UI/UX end point Dev</h5>
                                <h5>Overall Mobile responsiveness</h5>
                                <h5>Best time ticketer User-response</h5>
                                <h5>
                                https://www.motocms.com/website-templates/demo/90625.html
                                </h5>
                                </div>
                            </div>
                            <div className="buttons">
                                <button>Request a Call</button>
                                <button>Contact Me</button>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
            </div>

            

            </div>
        </div>
    )
}

export default Websites
