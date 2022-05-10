import React , {  useEffect} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import { Transition } from "react-transition-group";
import '../Websites.css'

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





function Applications() {
    const TEXTS = [
        "Cross Platform Mobile development ",
        "Native Mobile Development",
        "IOS Mobile development",
        "Hybrid Mobile Development"
    ]
    const SPANS = [
        "IOS",
        "Android",
        "Cross Platform",
        "Hybrid"
    ]
    const [index, setIndex] = React.useState(0);
    const [inProp, setInProp] =  React.useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='Data' content='Data Migration'/>
        <meta name='database' content='Big data'/>
        `
        document.title = "Mobile Apps";
        setInProp(!inProp);
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    //   useEffect(() => {
    //     document.head.innerHTML+=`
    //     <meta name='Data' content='Data Migration'/>
    //     <meta name='database' content='Big data'/>
    //     `
    //     document.title = "Mobile Apps";
    //   }, []);
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
                            Android App Development
                            </Link>
                        </li>
                        <li>
                            <Link to="/utilities">
                            IOS App Development
                            </Link>
                        </li>
                        <li>
                            <Link to="/utilities">
                            Web App Development
                            </Link>
                        </li>
                        <li>
                            <Link to="/utilities">
                           UI/UX 
                            </Link>
                        </li>
                    </ul>
                             
            </div>
            
            <section className='app_header'>
                 <div className="website_header">
                       <div className='video_content'>
                           <video autoPlay loop muted id='video'>
                               <source src="mobileappdev.mp4"/>
                           </video>
                       
                        <div className="dataheader_content">
                            <Fade right>
                                <div className='dataheader_items'>
                                    <h1 className='clouddatafade_h1'>Breathing Tech <br />
                                    Into Your Ideas
                                    </h1>
                                    <div className='fade_p '>
                                        Success starts with building
                                         the right
                                    <div className='appfade'>
                                    <Transition in={inProp} timeout={50}>
                                        {(state) => (
                                        <div
                                            style={{
                                            ...defaultStyle,
                                            ...transitionStyles[state]
                                            }}
                                        >
                                            {SPANS[index % TEXTS.length]}
                                        </div>
                                        )}
                                    </Transition>
                                    <span className='app_span'>App.</span>
                                  
                                   

                                    </div>
                                    </div>
                                
                            
                                    <button type='button' onClick={()=> navigate("/contact")} className='fade_button'>
                                        Get Quote in 24hrs
                                     </button>

                                </div>
                             </Fade>
                        </div>
                        </div>
                </div>
            </section>
            <div className="mini_header data_miniheader">
                <div> </div>
                <p>Where We Turn Ideas into Reality</p>
                <div> </div>

           </div>
           <h1 className='sub_header'>Your Main Features &amp; Benefits</h1>
            <div className="benefits_container">
                <div className="benefits_contents">
                    <div className="benefit_item">
                        <img loading="lazy"  src="soucrcode.png" alt="branding" />
                        <h5>Source Code &amp; Documentation</h5>
                        <p>
                        We will do a Bitbucket repository transfer with the source
                         code to your account and provide the document that describes 
                         app architecture, modules and components of your app.
                        </p>
                    </div>
                    <div className="benefit_item">
                        <img loading="lazy" src="proto.png" alt="marketing"  />
                        <h5>UX/UI Design &amp; Prototype </h5>
                        <p>
                        User-centred, clean, easy to use and intuitive user interface 
                        designs in Figma and  prototype with configured screens links 
                        and animations
                       
                        </p>
                    </div>
                    <div className="benefit_item">
                        <img loading="lazy"  src="buildpublish.png" alt="presentation"  />
                        <h5>Builds for publishing</h5>
                        <p>
                        We provide Ready-to-be-published in App Store and Google
                         Play app builds with App icon and screens compliant with
                          App Store and Google Play Identity Guidelines
                        </p>
                    </div>
                </div>
            </div>
            <div className="websiteother_main">
                <div className="website_right">
                <div className="right_contents">

                <div className="right_items">
                            <h2>Full-cycle app development</h2>
                            <div className="rightitem_content">
                            <img loading="lazy" src="full cycle.png" alt="process" />

                            <p>
                               
                            To start with, we will identify MVP goals and target
                             audience.Then we will propose our ideas regarding 
                             functionality and technologies. Having all the
                              information gathered, we will create a requirements
                               specification approved by you.

                                
                            </p>

                            </div>
                </div>


                <div className="right_items">
                            <h2>BUSINESS ANALYSIS </h2>
                            <div className="rightitem_content">
                        <p>
                        To start with, we will identify MVP goals and target
                             audience.Then we will propose our ideas regarding 
                             functionality and technologies. Having all the
                              information gathered, we will create a requirements
                               specification approved by you.
                           
                        </p>
                            <img loading="lazy" src="buss analysis.png" alt="performance" />

                            

                            </div>
                        </div>
                        <div className="right_items">
                            <h2>UI/UX DESIGN AND PROTOTYPING </h2>
                            <div className="rightitem_content">
                            <img loading="lazy" src="proto.png" alt="performance" />
                        <p>
                        Our designers will develop wireframes of the app key
                         screens in Figma. When the design is approved we 
                         will also create a clickable prototype and prepare
                          all the graphic materials for the development team.
                           
                        </p>
                           

                            

                            </div>
                        </div>

                        <div className="right_items">
                            <h2>DEVELOPMENT </h2>
                            <div className="rightitem_content">
                        <p>
                        Under the guidance of the Project Manager responsible
                         for your product, the team of developers will join the
                          work. You will be receiving reports and intermediate
                           builds biweekly.
                           
                        </p>
                            <img loading="lazy" src="software testing.png" alt="performance" />

                            

                            </div>
                        </div>



                        <div className="right_items">
                            <h2>PRODUCT DEMO </h2>
                            <div className="rightitem_content">
                            <img loading="lazy" src="soucrcode.png" alt="performance" />
                        <p>
                        When the final version is ready, the Project Manager will
                         conduct a demo presentation of the developed application.
                           
                        </p>
                            

                            

                            </div>
                        </div>


                        <div className="right_items">
                            <h2>PUBLISHING PREPARATION </h2>
                            <div className="rightitem_content">
                        <p>
                        We will help you to create and configure accounts in both AppStore
                         and Play Market, design and upload screenshots, icon and other 
                         graphic materials needed for the publishing as well as provide 
                         basic ASO consulting.

                           
                        </p>
                            <img loading="lazy" src="iosdev.png" alt="performance" />

                            

                            </div>
                        </div>

                        
                        <div className="right_items">
                            <h2>APP PUBLISHING </h2>
                            <div className="rightitem_content">
                            <img loading="lazy" src="publish.png" alt="performance" />
                        <p>
                        Everything is set! Accounts are configured, builds are uploaded 
                        and reviewed. Congrats! But we are not a goodbye. We will be in
                         touch ever after and ready to answer your questions.

                           
                        </p>
                           

                            

                            </div>
                        </div>

                        <div className="right_items">
                            <h2>Post Project Delivery...</h2>
                            <div className="rightitem_content">
                            <p>
                            All assets created by our team belong to you and only you.
                            All intellectual property created in the process of MVP 
                            development belongs to the customer
                        </p>
                        <img loading="lazy" src="resultimg.png" alt="results" />
                            </div>
                        </div>

                        <div className="websites_services">
                        <h2 id="top">Our Services</h2>

                        <section className="websitecard_container">
                        <div className="websitecard">
                              <h4 id="card"> IOS Development </h4>
                                 <Link  to="/contact">  

                                 <img loading="lazy" className='card_image' src="ios.png" alt="seo" />
                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>
                              <p>
                              We leverage the strength of the iOS platform to help our clients solve 
                              their most complicated business challenges. During these years,
                               our dedicated iOS developers have delivered apps to over 100 customers.                              </p>
                             
                          </div>
                          <div className="websitecard">
                              <h4 id="card"> Android Development  </h4>
                                 <Link  to="/contact">  
                                 <img loading="lazy" className='card_image' src="android.png" alt="seo" />

                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>

                              <p>
                              Our mobile app developers know how to create top-notch user experiences
                               on Android. We design applications with attention to detail, and
                                have deep expertise in every aspect of Android app development, 
                                resulting in extraordinary digital experiences.                              </p>
                             
                          </div>
                          <div className="websitecard">
                              <h4 id="card"> Web App Development</h4>
                                 <Link  to="/contact">  

                                 <img loading="lazy" className='card_image' src="webapp.png" alt="seo" />
                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>

                              <p>
                              We build modern web apps to help our clients solve their most complicated
                               business challenges. Our solutions are productive, responsive,
                                easy to maintain, and implement flawlessly across devices, browsers,
                                 and operating systems – your app can be everywhere your users are.                              </p>
                             
                          </div>

                          <div className="websitecard">
                              <h4 id="card">Tech Consulting</h4>
                                 <Link  to="/contact">  

                                 <img loading="lazy" className='card_image' src="consulting.png" alt="consulting" />
                              </Link>
                              <button onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>

                              <p>
                              If you have an app idea but don’t know what to start with, business analysis
                               is a good first step to take! We have business analysts who can create 
                               a business strategy for you.

                            We conduct an in-depth analysis of ongoing business processes in order to 
                            define what kind of technological decision is going to take your 
                            business to the next level.                            
                              </p>
                             
                          </div>


                        </section>
                         </div>
                </div>
                <div className="Websitecontent-left">
                    <h3>Technologies</h3>
                    <div className="websitecontentleft_img">
                        <img loading="lazy" src="mongo.jpg" alt="mongodb" />
                        <img loading="lazy" src="php.jpg" alt="php" />
                        <img loading="lazy" src="python.jpg" alt="python" />
                        <img loading="lazy" src="sketch.jpg" alt="sketch" />
                        <img loading="lazy" src="node.jpg" alt="node" />
                        <img loading="lazy" src="sql.jpg" alt="sql" />
                        <img loading="lazy" src="git.jpg" alt="git" />
                        <img loading="lazy" src="github.jpg" alt="github" />
                        <img loading="lazy" src="figma.jpg" alt="figma" />
                        <img loading="lazy" src="drawio.jpg" alt="drawio" />
                        <img loading="lazy" src="flutter.jpg" alt="flutter" />
                        <img loading="lazy" src="sqlite.jpg" alt="sqlite" />
                    </div>
                </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Applications
