import React , {  useEffect} from 'react'
import '../Websites.css'
import { Link , useNavigate } from 'react-router-dom'
import { Transition } from "react-transition-group";
import Quote from './Quote';
import {Helmet} from "react-helmet";

const duration = 300;
const fontSize = 1.3;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  color: 'green',
  fontSize: `${fontSize}rem`
};
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};
function Softwares() {
    const TEXTS = [
        "Scalable High-load Systems ",
        "End-to-End Software products",
        "Data-Driven applications",
        "Big Data Engineering"
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
            <Helmet>
                <meta name='keyword' content='Dedicated ontime project delivery atention to details'/>
                <meta name='Software Engineering' content='scalable programming softwares'/>
                <meta
                name="description"
                content="Our software engineers Team will design, implement and deploy complex
                enterprise solutions. Our custom software will be developed with the technology stack best suited..."
                  />
                <title>Software Engineering |scalable &amp; Custom solutions</title>
            </Helmet>
            <div className="websites_contents">
                <div className="website_divider"></div>
                <header  
                style= {{ background :"url('apps.png')",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'

                    } }
                >
                    <div className="website_header">
                        <div className="softwareheader_content">
                            <div className="side_one">
                                <div className="sideone_content">
                                <h2>
                                    <span className='softwareheader_span'>SOFTWARE </span>
                                DEVELOPMENT BYTES 
                                </h2>
                                <div className="transitions">
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
                                </div>
                                <p>
                                We're powered by transparency, technology-driven customer 
                                interaction process, and highly proficient teams. 
                                </p>
                                <div className="sideone_button">
                                <button className='quote_button' type="submit">Get in Touch</button>

                                </div>
                                </div>
                            </div>
                            <div className="side_two">
                                <div className="form">
                                    <h3> <span className='softwareheader_span'>Email Us</span>  your project details and we'll contact
                                        you within 24 hours
                                    </h3>

                                    <Quote  text='Talk to our Engineer'/>

                                </div>
                            </div>



                        </div>
                    </div>
                            
                </header>
                <div className="mini_header data_miniheader">
                    <div> </div>
                    <p>Where We Turn Ideas into Reality</p>
                    <div> </div>
                </div>
                <h1 className='sub_header'>
                    Features &amp; <span className='softwareheader_span'>Benefits</span>
                </h1>
                <div className="benefits_container">
                    <div className="benefits_contents">
                        <div className="benefit_item">
                            <img src="proto.png" alt="branding" />
                            <h5>Building Your Product</h5>
                            <p>
                                Our Expertise for custom application development services cover third party integration, Mobile,
                                desktop, Web, and so on.
                                We will evaluate your project's scope and map out plans that is most efficicent with regards to
                                the solution your software wants to deliver as end product ensuring the best chance for a prolong
                                solution delivery. 
                            </p>
                        </div>
                        <div className="benefit_item">
                            <img src="teambuild.png" alt="marketing"  />
                            <h5>Scaling Your Tech Team </h5>
                            <p>
                                Accelerate and transform your business with comprehensive DevOps services. We provide end-to-end
                                solutions to attain higher code standards, faster delivery, automation, efficiency, and innovation.
                            </p>
                        </div>
                        <div className="benefit_item">
                            <img src="startegy.png" alt="presentation"  />
                            <h5>Product Strategy</h5>
                            <p>
                                Using Agile Development &amp; Project Management we ensure that 
                                when you build something, it&apos;s something people want
                                and we try to figure out what to build
                                without burning budget.
                                The outcome - alignment on the vision and features of your product.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="websiteother_main">
                <div className="website_right">
                    <div className="right_contents">
                    <div className="right_items">
                            <h2>
                                Complete-Cycle <span className='softwareheader_span'> Software development</span>
                            </h2>
                            <div className="rightitem_content">
                                <img src="cycleprocess.png" alt="process" />
                                <p>
                                    We have
                                    thorough understanding of critical milestones that must
                                    be accomplished to advance to the next stage of
                                    growth. Our commitment to contemporary Agile
                                    practices helps to tackle development goals in a time
                                    sensitive manner delivering market ready solutions to our
                                </p>
                            </div>
                        </div>

                        <div className="right_items">
                            <h2>Flexible Engagement Models </h2>
                            <div className="rightitem_content">
                                <p>
                                    We work with you and your team to determine the best engagement
                                    approach for your startup. We have a thorough understanding
                                    of critical milestones that must be accomplished to advance 
                                    to the next stage of growth. Our commitment to contemporary
                                    Agile practices helps to tackle development goals in a time
                                    sensitive manner delivering market ready solutions to our
                                    clients.
                                </p>
                                <img src="engagementmodel.png" alt="performance" />
                            </div>
                        </div>

                        <div className="right_items">
                            <h2>
                                <span className='softwareheader_span'>Software </span>  QA 
                            </h2>
                            <div className="rightitem_content">
                            <img src="quality.png" alt="performance" /> 
                                <p>
                                    We work with you to assess your current Quality Assurance
                                    processes and help you define and build the best QA strategy
                                    with the right frameworks and tools.
                                    The goal of an effective QA process is to quickly identify
                                    and correct defects. We will help you define your test plan
                                    for both manual and automated testing across the entire
                                    software development lifecycle: from requirements through
                                    design, development, deployment and maintenance.
                                </p>
                            </div>
                        </div>

                        <div className="right_items">
                            <h2>Software Testing  </h2>
                            <div className="rightitem_content">
                                <p>
                                    In the age of Agile Development and Continuous Integration it has
                                    become important for developers to write and integrate Unit Tests 
                                    into their coding workflow.Software DevBytes works with your development team 
                                    to create and integrate the Unit Test Execution Bench that minimizes
                                    the extra efforts for developers to use unit testing without 
                                    decreasing the power of unit tests.
                                </p>
                                <img src="software testing.png" alt="performance" />
                            </div>
                        </div>

                        <div className="right_items">
                            <h2>
                                Test <span className='softwareheader_span'> Automation </span>
                            </h2>
                            <div className="rightitem_content">
                                <img src="test automation.png" alt="performance" />
                                <p>
                                    We help you identify the best areas for testing automation 
                                    and develop the scripts to enable and automate a script 
                                    execution platform. We work with you to choose the right
                                    frameworks and tools to enable your QA strategy and to embed
                                    it in your development lifecycle.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="websites_services">
                        <h2 id="top">Our Services</h2>
                        <section className="websitecard_container">
                            <div className="websitecard">
                                <h4 id="card">Security </h4>
                                <Link  to="/contact">  
                                    <img className='card_image' src="security.png" alt="seo" />
                                </Link>
                                <button  type='button' onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>
                                <p>
                                    Identify and eliminate application and network
                                    vulnerabilities to comply with regulatory
                                    requirements and mitigate risk.
                                </p>
                            </div>
                            <div className="websitecard">
                                <h4 id="card">Performance </h4>
                                    <Link  to="/contact">  
                                    <img className='card_image' src="performance2.png" alt="seo" />
                                </Link>
                                <button  type='button' onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>
                                <p>
                                    We have the skills and methodology to plan, conduct, and chart
                                    the results of in-depth testing of scalability and resource
                                    usage of your software solution. We conduct Load, Stability
                                    ,Stress, Volume and Configuration testing and create detailed
                                    charts and graphs to illustrate the results for your 
                                    stakeholders.
                                </p>
                            </div>
                            <div className="websitecard">
                                <h4 id="card">COMPATIBILITY </h4>
                                <Link  to="/contact">  
                                <img className='card_image' src="puzzle.png" alt="seo" />
                                </Link>
                                <button  type='button' onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>
                                <p>
                                    Ensure data integrity, flawless functionality and compatibility across
                                    a variety of platforms, devices, hardware, OSs. Particularly common
                                    is testing compatibility between multiple browsers running on a 
                                    variety of desktop and mobile environments.
                                </p>
                            </div>
                            <div className="websitecard">
                                <h4 id="card">LOCALIZATION</h4>
                                <Link  to="/contact">  
                                <img className='card_image' src="localisation.png" alt="seo" />
                                </Link>
                                <button  type='button' onClick={()=> navigate("/contact")} className='websitecard_button'>Get quote</button>
                                <p>
                                    We test language, characters, idioms, language-based layout
                                    and information flow to ensure that your localized software
                                    works perfectly in all of its multi-national incarnations.
                                    We are well versed in cultural peculiarities of the local
                                    audience to help you customize the software, apps and 
                                    websites for customers in a particular location
                                </p>
                            </div>
                        </section>
                </div>
                </div>
                <div className="Websitecontent-left">
                    <h3>Technologies</h3>
                    <div className="websitecontentleft_img">
                        <img src="mongo.jpg" alt="mongodb" />
                        <img src="php.jpg" alt="php" />
                        <img src="python.jpg" alt="python" />
                        <img src="sketch.jpg" alt="sketch" />
                        <img src="node.jpg" alt="node" />
                        <img src="sql.jpg" alt="sql" />
                        <img src="git.jpg" alt="git" />
                        <img src="github.jpg" alt="github" />
                        <img src="figma.jpg" alt="figma" />
                        <img src="drawio.jpg" alt="drawio" />
                        <img src="flutter.jpg" alt="flutter" />
                        <img src="sqlite.jpg" alt="sqlite" />
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
                                <img src="profile-pic.png" alt="afeez badmos" />
                        </div>
                        <div className="about_text">
                            <h4>
                                I am Afeez Badmos, I'm a passionate web designer 
                                &amp; developer with 12 Years of Experience.
                            </h4>
                            <p>
                                As a passionate Software Engineer &amp; developer,
                                I prefer to run my own business rather than routine office
                                work. Such lifestyle helps me enjoy my favourite hobbie 
                                traveling &amp; skating . Being able to do your job in every corner of our
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
                                <button type='button'>Request a Call</button>
                                <button  type='button'>Contact Me</button>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>


    )   
}

export default Softwares
