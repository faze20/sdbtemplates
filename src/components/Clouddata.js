import React , {  useEffect} from 'react'
import '../Websites.css'
import { Link , useNavigate } from 'react-router-dom'
// import TextTransition, { presets } from "react-text-transition";
import Fade from 'react-reveal/Fade'
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  color: 'red'
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};



function Clouddata() {
    const TEXTS = [
        "Fast Turn Around Time ",
        "All-in-one Data Insights",
        "Big Data Solutions."
    ]
    const [index, setIndex] = React.useState(0);
    const [inProp, setInProp] =  React.useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        setInProp(!inProp);
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
    return (
        <div className="websites_container">
            <div className="websites_contents">
                <div className="website_divider"></div>
           
            <div className="websites_subheader">
            <Transition in={inProp} timeout={50}>
                {(state) => (
                <div
                    style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                    }}
                >
                      {TEXTS[index % TEXTS.length]}
                </div>
                )}
            </Transition>
                    {/* <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.gentle }
                    /> */}
                    <div className="pricing_button">
                        <button onClick={()=> navigate("/pricing")}>Pricing</button>
                    </div>
            </div>
            <div className="websites_subnav">
                    <ul className='website_ul'>
                        <li>
                            <Link to="/utilities">
                            Data Migration
                            </Link>
                        </li>
                        <li>
                            <Link to="/utilities">
                            Data Automation
                            </Link>
                        </li>
                        <li>
                            <Link to="/utilities">
                            Business Data
                            </Link>
                        </li>
                        <li>
                            <Link to="/utilities">
                            Acquisition |  intelligence 
                            </Link>
                        </li>
                    </ul>
                             
            </div>

            <section className='data_header'>
                 <div className="website_header">
                       <div className='video_content'>
                           <video autoPlay loop muted id='video'>
                               <source src="databgrnd.mp4"/>
                           </video>
                       
                        <div className="dataheader_content">
                            <Fade right>
                                <div className='dataheader_items'>
                                    <h1 className='clouddatafade_h1'>Make Data <br />
                                    Make Sense
                                    </h1>
                                    <p className='data_p'>We partner with the world's most valuable 
                                    brands to build digital solutions that provides and inside 
                                    look at consumers key motivations and expectations along the 
                                    path to purchase.
                                    </p>
                                
                            
                                    <button type='button' onClick={()=> navigate("/contact")} className='fade_button'>Start Now  </button>

                                </div>
                             </Fade>
                        </div>
                        </div>
                </div>
            </section>
            <div className="mini_header data_miniheader">
                <div> </div>
                <p>What We Offer</p>
                <div> </div>

           </div>
           <h1 className='sub_header'>Your Main Features &amp; Benefits</h1>
            <div className="benefits_container">
                <div className="benefits_contents">
                    <div className="benefit_item">
                        <img src="/assets/resultgoal.jpg" alt="branding" />
                        <h5>Consulting</h5>
                        <p>
                        You need a sound strategy to transform your 
                        whiteboard concepts into reality and our cloud 
                        consulting offerings do just that. Sit back and 
                        relax as our experts do a complete operations and 
                        financial assessment for you and build a reference PoC.
                        </p>
                    </div>
                    <div className="benefit_item">
                        <img src="/assets/teamwork.jpg" alt="marketing"  />
                        <h5>Devops</h5>
                        <p>
                        Our cloud automation offerings will keep all your 
                        DevOps and SysOps worries at bay. We do all the hard 
                        work like continuous integration, configuration management,
                         containerization, and custom automation, so your business 
                         becomes more agile.
                        </p>
                    </div>
                    <div className="benefit_item">
                        <img src="/assets/presentation.png" alt="presentation"  />
                        <h5>B2B Connectivity</h5>
                        <p>
                        We take care of all your mundane responsibilities, so 
                        you can focus on what matters the most for your business 
                        – innovation. Offload the daily management and administration
                         of your IT security to a trusted partner and take your 
                         business to new heights.
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

                            <p>
                                We focus on the data that matters by sorting the background 
                                data out to reveal the best methodology which enables you 
                                to make the best 
                                business decision about where , when and how you need the 
                                data in order to optimize your client's digital transformation in a 
                                cost-efficient way which increases your productivity.

                                
                            </p>

                            </div>
                    </div>
                    <div className="right_items">
                            <h2>Big Data Processing </h2>
                            <div className="rightitem_content">
                        <p>
                        Our remote data solutions allow you to retrieve information
                         from your preferred access points, delivering flexible data 
                         via client portals, partner platforms, and proprietary API 
                         integrations.
                         While experiencing rapid real-time record retrieval and instant 
                         database solutions that bring you the data you need, when you
                          need it.
                          Find the data-driven insights you need to make the best judgement
                          call for scaling your business 
                          all from a single provider with full-source customer service!

                            
                        </p>
                            <img src="/assets/webperformance.png" alt="performance" />

                            

                            </div>
                        </div>
                        <div className="right_items">
                            <h2>Cloud Architecture</h2>
                            <div className="rightitem_content">
                            <p>
                            All your business transformations right from planning and 
                            assessments to migration of workloads are seamless with our
                             scalable and flexible cloud migration offerings. We can help you
                              identify the potential migration challenges and risks, do a capacity
                               assessment, and weigh potential outcomes. 
                               We supply fast reliable technical support Onsite or Remotely and 
                               recommend the best-fit automation tools for your set up such as 
                               Window Virtual desktop.
                            
                        </p>
                        <img src="/assets/optimisationnew.png" alt="process" />


                            </div>
                        </div>
                        <div className="right_items">
                            <h2>Next ...</h2>
                            <div className="rightitem_content">
                            <img src="/assets/next.png" alt="process" />
                            <p>
                                We recommend the best-fit automation tools for your setup 
                                such as Azure, Window virtual desktop .Which exposes your
                                business to a range of benefits 
                                 including saving space on your physical
                                resources , substantial cost savings in the long term
                            
                            </p>

                            </div>
                        </div>
                        <div className="right_items">
                            <h2>Effect and Results ...</h2>
                            <div className="rightitem_content">
                            <p>
                                We can guarantee a system which fulfills your business needs and sets the stage for future growth for 
                                your client to scale up their infrastructure to meet the growing demand in the usage of their product.
                                The complete infrastructure has a solid disaster recovery plan, flexibility in terms of 
                                IT hosting and the generated data enhances your customers experience
                        </p>
                        <img src="/assets/resultimg.png" alt="results" />
                            </div>
                        </div>

                        <div className="websites_services">
                        <h2 id="top">Our Services</h2>

                        <section className="websitecard_container">
                        <div className="websitecard">
                              <h4 id="card"> Consumer Data </h4>
                                 <Link  to="/contact">  

                                 <img className='card_image' src="/assets/newseo.jpg" alt="seo" />
                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>
                              <p>
                              We combine your data from different sources and analyse against industry benchmark. 
                              </p>
                             
                          </div>
                          <div className="websitecard">
                              <h4 id="card"> Business Data  </h4>
                                 <Link  to="/contact">  
                                 <img className='card_image' src="/assets/landingpage.jpg" alt="seo" />

                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>

                              <p>
                              We proffer business solutions that indicates how your data can grow your company. 
                              </p>
                             
                          </div>
                          <div className="websitecard">
                              <h4 id="card"> Data Automation</h4>
                                 <Link  to="/contact">  

                                 <img className='card_image' src="/assets/webapp.png" alt="seo" />
                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>

                              <p>
                              Automate your data transfer and focus on what matters. 
                              </p>
                             
                          </div>

                          <div className="websitecard">
                              <h4 id="card"> Foot Print</h4>
                                 <Link  to="/contact">  

                                 <img className='card_image' src="/assets/webapp.png" alt="seo" />
                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>

                              <p>
                              Calculate your foot print and we recommend right processes .
                              </p>
                             
                          </div>


                        </section>
                         </div>
                </div>

                <div className="Websitecontent-left">
                    <h3>Technologies</h3>
                    <div className="websitecontentleft_img">
                        <img src="assets/mongo.jpg" alt="mongodb" />
                        <img src="assets/php.jpg" alt="php" />
                        <img src="assets/python.jpg" alt="python" />
                        <img src="assets/sketch.jpg" alt="sketch" />
                        <img src="assets/node.jpg" alt="node" />
                        <img src="assets/sql.jpg" alt="sql" />
                        <img src="assets/git.jpg" alt="git" />
                        <img src="assets/github.jpg" alt="github" />
                        <img src="assets/figma.jpg" alt="figma" />
                        <img src="assets/drawio.jpg" alt="drawio" />
                    </div>
                </div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Clouddata
