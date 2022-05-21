import React , {useState} from 'react'
import {Helmet} from 'react-helmet'
import '../App.css'
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom';
import Funnel from './Funnel'
import Fade from 'react-reveal/Fade'

function Ecommerce() {
    const [showPricing, setSHowPricing] = useState(false)
    const displayPricing = ()=>{
        setSHowPricing(prev => !prev)
    }
    const navigate = useNavigate();
    const bestseo =()=>{
      navigate('/payment',{state:{price:299,quantity:1 ,description:'Best SEO'}});
    }
    const googleads =()=>{
        navigate('/payment',{state:{price:299,quantity:1 ,description:'Google Ads'}});
    }
    const socialmedia =()=>{
         navigate('/payment',{state:{price:399,quantity:1 ,description:'Social Media'}});
    }
    const platinum =()=>{
        navigate('/payment',{state:{price:499,quantity:1 ,description:'Platinum'}});
    }
    
    return (
        <>
             <Helmet>
                 <meta name='online store' content='debug'/>
                <meta name='description'
                content=
                'We perform SEO campaigns over several months, allow your business to gain organic traffic. Our SEO strategy allows  your company increase Leads, Revenue, and Website Traffic and gain overall revenue, brand recognition.'
                />
                <title>The California SEO Company America |USA SEO Experts | E-commerce</title>
            </Helmet>
            <div className="mainsection_container"  style= {{ background :"url('ecommerceseo.png') center center ",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                } }>
                <div className="submainsection_container">
                    <h2  className='submainsection_title'>S E O | E Commerce Store</h2>
                    <div className="submainsection_items">
                        <p>Our team of experts build highly Optimised and top ranking Stores</p>
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
                            <button className='displayPrice' onClick={(e)=>displayPricing()}> See Our Pricing </button>
                        </div>
                    </div>
                    <img src="seo1.jpg" alt="online classes" />
                </div>
                {showPricing &&
                <div className="seopricing_container">
                    <div className="seopricing_content">
                        <h2><span className='headin_span'>S E O</span> pricing </h2>
                        <div className="seocontent_items">
                            <div className="seo_top">
                                <div className="seotop_left">
                                    <h2>87% of <span className='headin_span'>Customers Check</span> A Store Online</h2>
                                    <h4>Before They Buy Or Visit A Physical Location</h4>
                                    <p>
                                        With 87% of customers shopping online first your online footprint is
                                        essential for your business. We help your business get ahead of the 
                                        competition by creating locally tailored ads with targeted 
                                        advertising using Google search. Have your business show in the 
                                        top 3 searches for certain keywords or phases using Google Ads.
                                    </p>
                                </div>
                                <div className="seotop_right">
                                    <div className="seolabel">
                                        <p><span className='seolabel_orange'></span>Customers That check Online first</p>
                                        <p><span className='seolabel_green'></span>Don&apos;t go Online</p>
                                    </div>
                                    <div className="seo_chart">
                                        <div className="pie_one"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="priceelement_content">
                                <div className="priceelement_header">
                                    <h2>Get Started Now &amp; Sign Up Below  </h2>
                                    <h3>You can also ask our Senior Developer <span className='headin_span'>1-747-249-8760</span> with your questions</h3>
                                    <p>*Managed Price listed only, Google Ads budget additional</p>
                                </div>
                                <div className="prices_container">
                                    <div className="priceelement">
                                        <div className="price_sticker">
                                            Best SEO
                                        </div>
                                        <h3>SEO Pricing</h3>
                                        <p>SEO to improve your Google ranking</p>
                                        <h1>$299</h1>
                                        <h5>Per Month</h5>
                                        <button onClick={()=>{bestseo()}} className="basic">Add To Cart &#8921;</button>
                                        <ul >
                                            <li className='priceelement_li'><span>Improve</span> Website SEO* </li>
                                            <li className='priceelement_li'><span>No Contracts</span> Month to Month </li>
                                            <li className='priceelement_li'><span>Increase</span> Organic Searches </li>
                                            <li className='priceelement_li'><span>Rank</span> Higher with Google </li>
                                            <li className='priceelement_li'><span>Optimizes</span> Your local citations; Google Maps, Bing Maps </li>
                                            <li className='priceelement_li'><span>SEMrush</span> Reports included and monthly site audits ($99 per month value) </li>
                                            <li className='priceelement_li'><span>30+ backlinks</span> Gain follow links &amp; local citations to improve your SEO </li>
                                            <li className='priceelement_li'><span>Includes Advice Local Listings*</span></li>
                                            <li className='priceelement_li'><span>Get noticed</span> On Google Maps and Apple Maps </li>
                                            <li className='priceelement_li'><span>Monitor</span> Progress with Google ranking and position tracking over time </li>
                                            <li className='priceelement_li'><span>Best long-term strategy</span> to improve your Google ranking*
                                                *We have no contracts but we recommend a commitment of 6 months to see the benefits.
                                                Advice Local activation requires 2 months service prior. 
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="priceelement">
                                        <div className="price_sticker">
                                           Google Ads
                                        </div>
                                        <h3>Google Ads Manager</h3>
                                        <p>Get to the top 3 Google rank for certain keywords or phrases
                                            Top Package
                                        </p>
                                        <h1>$299</h1>
                                        <h5>Per Month</h5>
                                        <button onClick={()=>{googleads()}} className="basic">Add To Cart &#8921;</button>
                                        <ul>
                                            <li className='priceelement_li'><span>No Contracts</span> Month to Month </li>
                                            <li className='priceelement_li'><span>Remarketing</span> display ads included ($50 p/mo value) </li>
                                            <li className='priceelement_li'><span>Optimize Your Online Ads</span> with 4X improvement vs doing it yourself! </li>
                                            <li className='priceelement_li'><span>Track Conversions</span> includes advanced conversion tracking to track user actions and lower your cost per click ($120 value) </li>
                                            <li className='priceelement_li'><span>Target</span> Local Mobile Users </li>
                                            <li className='priceelement_li'><span>Low Cost</span> Per Click </li>
                                            <li className='priceelement_li'>One of the lowest managed Google Ads costs around!</li>
                                            <li className='priceelement_li'><span>SAVE!</span> $150 promo code from Google Ads**</li>
                                            <li className='priceelement_li'>*Google Ads budget additional </li>
                                            <li className='priceelement_li'> **Promo requires you to be a new customer and spend $50 in Ads </li>
                                        </ul>
                                    </div>
                                    <div className="priceelement">
                                        <div className="price_sticker">
                                           Social Media
                                        </div>
                                        <h3>Social Media Management Consulting</h3>
                                        <p>Let us help with a full social profile audit, evaluate
                                             competitors, and give you a plan for future posts.
                                        </p>
                                        <h1>$399</h1>
                                        <h5>Per Month</h5>
                                        <button onClick={()=>{socialmedia()}} className="basic">Add To Cart &#8921;</button>
                                        <ul>
                                            <li className='priceelement_li'><span>Grow</span> Facebook, Twitter, Instagram, Linkedin, Youtube Social Media Consulting </li>
                                            <li className='priceelement_li'><span>Scheduled Content Posts</span> Create content &amp; posts with you each month for consistent content updates </li>
                                            <li className='priceelement_li'><span>Optimize </span> Your social media pages with our social site audit </li>
                                            <li className='priceelement_li'><span>Answers</span>  to all your questions about how often to post, when to post, what to post, and what drives engagement </li>
                                            <li className='priceelement_li'><span>Improve</span> your sales funnel with tailored content posts </li>
                                            <li className='priceelement_li'><span>Meetings </span> online monthly to help with a marketing plan and keep the projects on task</li>
                                            <li className='priceelement_li'><span>Social Media Plan</span> handcrafted social media marketing plan for your business to finally take advantage of social media
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="priceelement">
                                        <div className="price_sticker">
                                           Platinum
                                        </div>
                                        <h3>Platinum Package Google &amp; SEO </h3>
                                        <p>Platinum members get priority service</p>
                                        <h1>$499</h1>
                                        <h5>Per Month</h5>
                                        <button onClick={()=>{platinum()}} className="basic">Add To Cart &#8921;</button>
                                        <ul>
                                            <li className='priceelement_li'>Includes everything in SEO &amp; Ads packages plus: </li>
                                            <li className='priceelement_li'><span>Priority Service</span> Platinum customers have priority service and support </li>
                                            <li className='priceelement_li'><span>Dedicated Google Rep Support</span> We work directly with our Google reps to support your account </li>
                                            <li className='priceelement_li'><span>Voice search integration</span> with Siri, Google Assistant, &amp; Alexa </li>
                                            <li className='priceelement_li'><span>70+ backlinks</span> Gain strong follow links and local citations to improve your SEO - our best listings service!* </li>
                                            <li className='priceelement_li'> Listings Powered by AdviceLocal</li>
                                            <li className='priceelement_li'><span>Optimized</span> to Track Conversions or low CPA </li>
                                            <li className='priceelement_li'><span>Fully</span> Managed Advertising Solution!</li>
                                            <li className='priceelement_li'>*No activation fees! </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                }
                <div className="otherseo_services">
                    <div className="otherseo_contents">
                        <div className="seoFaqs">
                            <div className="seoFaq_header">
                                <h2>Frequently Asked <span className='headin_span'> SEO Questions</span></h2>
                                <p>
                                    Since early 20&apos;s, we&apos;ve seen the SEO landscape transform from black hat
                                    practices of keyword stuffing and buying backlinks to an emphasis
                                    on user experience &amp; content quality. With such a significant 
                                    change in the industry, you probably have questions &amp; concerns 
                                    about your current tactics and we're here to help.
                                </p>
                                <h4>
                                    Here are just a few of the most common questions our 
                                    customers ask us when it comes to their SEO strategy.
                                </h4>
                            </div>
                            <div className="seoFaqs_content">
                                <div className="seoFaqs_item">
                                    <h5 className='faqs_red'>How do I get on page one of Google for a specific keyword?</h5>
                                    <p >
                                        There&apos;s no magical formula to ranking on the first page,
                                        but Google heavily favors websites with quality content 
                                        developed around relevant keywords. Simply placing a keyword
                                        as many times as possible within your content will hurt your rankings.
                                    </p>
                                </div>
                                <div className="seoFaqs_item">
                                    <h5 className='faqs_yellow'> My rankings have dropped in recent months. What happened? </h5>
                                    <p>
                                        Rankings change all the time, but if you&apos;ve seen a significant drop,
                                        it could be due to increased competition under specific search terms,
                                        Google penalties, a poor mobile user experience, bad backlinks, or 
                                        outdated or spammy content.
                                    </p>
                                </div>
                                <div className="seoFaqs_item">
                                    <h5 className='faqs_blue'>I'm ranking well, so why am I not getting business from my site?</h5>
                                    <p>
                                        This could be due to complicated navigation on your site. If potential
                                        customers get to your site but don&apos;t know what to do next, they&apos;re likely
                                        to leave and head back to the search results page to find an alternative.
                                        That means lost business to your competitors.
                                    </p>
                                </div>
                                <div className="seoFaqs_item">
                                    <h5 className='faqs_blue'>I have lots of links to my website but I&apos;m not ranking well. Why is that? </h5>
                                    <p>
                                        Google takes into account the quality of your backlinks, not the number. You want to
                                        obtain links from authoritative websites in your industry to indicate that you&apos;re a
                                        knowledgeable and reliable company to do business with.
                                    </p>
                                </div>
                                <div className="seoFaqs_item">
                                    <h5 className='faqs_red'>How do I reach and attract a local audience to my website?</h5>
                                    <p>
                                        By setting up a Google My Business account and building a presence on local listings
                                        websites (e.g. Yelp, TripAdvisor, etc.), users will be presented with your location 
                                        and contact information when they make a geographic-based search.
                                    </p>
                                </div>
                                 <div className="seoFaqs_item">
                                    <h5 className='faqs_yellow'>  How long does it take to start seeing results with SEO?  </h5>
                                    <p>
                                        There&apos;s no set timetable for when you&apos;ll start to see rankings improve. Some businesses
                                        see progress within a few months, but many others need a year or more to recover from a
                                        Google penalty or clean up their content and backlinks.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Funnel
                heading='More traffic awaits... Fill out the form to get started!'
                buttonText= 'GET A FREE SEO ANALYSIS'
                />
            </div>
        </>
    )
}

export default Ecommerce
