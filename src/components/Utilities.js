import React , {useEffect} from 'react'
import TextTransition, { presets } from "react-text-transition";
import YouTubeIcon from '@mui/icons-material/YouTube';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import TagIcon from '@mui/icons-material/Tag';
import KeyIcon from '@mui/icons-material/Key';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import PollIcon from '@mui/icons-material/Poll';
import TranslateIcon from '@mui/icons-material/Translate';
import TuneIcon from '@mui/icons-material/Tune';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import WebhookIcon from '@mui/icons-material/Webhook';
import EmailIcon from '@mui/icons-material/Email';
import Filter9PlusIcon from '@mui/icons-material/Filter9Plus';
import PolicyIcon from '@mui/icons-material/Policy';
import GavelIcon from '@mui/icons-material/Gavel';
import AirIcon from '@mui/icons-material/Air';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LinkIcon from '@mui/icons-material/Link';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import '../Utilities.css';
import { Link , useNavigate } from 'react-router-dom'


function Utilities() {
    const TEXTS = [
        "  This our way of giving back to the community",
        "With Your help, we have the support to maintain the applications free.",
        "Your commitment made this happen."
    ]
    const [index, setIndex] = React.useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='Utilities' content='free utility'/>
        <meta name='web utility' content='free seo tools'/>
        <meta id="meta-description" name="description" content="free seo tools." />
        <meta id="og-image" property="og:image" content="logo.png" />
        `
        document.title = "Utilities";
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

      
  return (
    <div className="utilities" >
        <div className='utility_divider'></div>

        <div className="utilities_subheader">
            <TextTransition
                text={ TEXTS[index % TEXTS.length] }
                springConfig={ presets.gentle }
            />
            <div className="donate_button">
                <button onClick={()=> navigate("/donation")}>Donate</button>
            </div>


               
        </div>
        <div className='utility_divider'></div>

            <div className="utility_subnav">
                <ul className='utility_ul'>
                    <li>
                        <Link to="/ecommerce">
                        <p>SEO</p>
                            
                        </Link>
                    </li>
                    <li>
                        <Link to="/contents">
                        <p > Youtube</p>
                           
                        </Link>

                    </li>
                    <li>
                        <Link to="/contents">
                            <p > Email</p>
                           
                        </Link>

                    </li>
                    <li>
                        <Link to="/websites">
                        <p > Webtools</p>
                           
                        </Link>

                    </li>
                    <li>
                        <Link to="/ecommerce">
                        <p >Discover</p>
                           
                        </Link>

                    </li>
                    <li>
                        <Link to="/ecommerce">
                        <p > AI</p>
                          
                        </Link>
                    </li>
                </ul>
            </div>
        <div className='utility_pagecontent'  
        style= {{ background :"url('sdbnew.png') center center" ,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
         } }
        >
           <div className='content_left'>

               <h1>
                   Free SEO &amp; Digital Marketing Tools
               </h1>
               <h2>
                   The Best Free Seo and Digital Marketing Solution Your Business Will Ever Need.
               </h2>
               <button>Image optimiser</button>
           </div>

        </div>
        <div className="countdowns">
            <div className="countdown_content">
                <h4> 264M</h4>
                <p>Emails <br /> verified</p>
                <div className="content_icon">
                    <img src="emailnw.jpg" alt="email" />
                </div>

            </div>
            <div className="countdown_content">
            <h4> 705M</h4>
                <p>Keyword <br /> Analyzed</p>
                <div className="content_icon">
                    <img src="searchnew.jpg" alt="search" />
                </div>

            </div>
            <div className="countdown_content">
                <h4> 117K</h4>
                <p>Happy <br /> Users</p>
                <div className="content_icon">
                    <img src="boy.png" alt="boy" />
                </div>

            </div>
        </div>

        <div className="utility_tools">
            <div className="utility_contents">

            <div className="seo_tools">

                <h2>
                    SEO Tools
                </h2>
                <div className="seo_items">

                    <div className="seo_solcontents">
                        <img src="keywordicon.jpg" alt="keyword" />
                        <a href='https://ahrefs.com/'>  <h4>Keyword Research Tool</h4></a>

                    </div>
                    <div className="seo_solcontents">
                        <div>

                        < KeyIcon />
                        </div>
                        <a href='https://www.semrush.com/'><h4>Bulk Keyword Tool</h4></a>

                       
                    </div>
                    <div className="seo_solcontents">
                        <div>

                        <QuestionAnswerIcon />
                        </div>
                        <a href='https://answerthepublic.com/'><h4>Question Explorer</h4></a>

                        
                    </div>
                    <div className="seo_solcontents">
                    <img src="backlinkicon.jpg" alt="backlinks" />
                    <a href='https://ahrefs.com/'>  <h4>High CPC Keyword Explorer</h4></a>

                       
                    </div>
                    <div className="seo_solcontents">
                        <div>

                        <AddLinkIcon />
                        </div>
                        <a href='https://www.semrush.com/features/link-building-and-prospecting-tools/'> <h4>Free Backlinks List</h4></a>

                       
                    </div>
                    <div className="seo_solcontents">
                    <img src="backlinkicon.jpg" alt="backlink" />
                    <a href='https://www.semrush.com/features/technical-seo-tools/'> <h4>SEO Analyzer</h4></a>

                        
                    </div>
                </div>
            </div>

            <div className="seo_tools">

            <h2>
                YouTube Tools
            </h2>
            <div className="seo_items">

                        <div className="seo_solcontents">
                            <div>
                            <YouTubeIcon />
                            </div>
                            <a href='https://ahrefs.com/youtube-keyword-tool'><h4>YouTube Keyword Tool</h4></a>

                           
                        </div>
                        <div className="seo_solcontents">
                            <div>

                        <YoutubeSearchedForIcon />
                            </div>
                            <a href='https://ahrefs.com/youtube-keyword-tool'> <h4>YouTube Top Keyword Explorer</h4></a>

                           
                        </div>
                </div>
            </div>

            <div className="seo_tools">

            <h2>
               AI Tools
            </h2>
            <div className="seo_items">

                    <div className="seo_solcontents">
                        <div>

                        <TranslateIcon />
                        </div>
                        <a href='https://zyro.com/ai/content-generator'><h4>AI Content Generator</h4></a>

                        
                    </div>
                    <div className="seo_solcontents">
                        <div>

                        <TuneIcon />
                        </div>
                        <a href='https://zyro.com/tools/slogan-generator'><h4>AI Paragraph Translator</h4></a>

                        
                    </div>
            </div>

            </div>

            <div className="seo_tools">

                    <h2>
                    Discover Tools
                    </h2>
                    <div className="seo_items">

                    <div className="seo_solcontents">
                        <div>

                        <ViewComfyIcon />
                        </div>
                        <a href='https://www.semrush.com/features/technical-seo-tools/'>  <h4>Programs Explorer</h4></a>

                       
                    </div>
                    <div className="seo_solcontents">
                        <div>

                        <GpsFixedIcon />
                        </div>
                        <a href='https://www.softwaredevbytes.com'><h4>Find Influencers</h4></a>

                       
                    </div>
                    <div className="seo_solcontents">
                        <div>

                        <AssessmentIcon />
                        </div>
                        <a href='https://www.softwaredevbytes.com'>  <h4>High CPC Keywords Explorer</h4></a>

                       
                    </div>
                    </div>
                    
            </div>

              <div className="seo_tools">

            <h2>
               Instagram Tools
            </h2>
            <div className="seo_items">

            <div className="seo_solcontents">
                <div>

                <TagIcon />
                </div>
                <a href='https://www.softwaredevbytes.com'> <h4>HashTags Explorer</h4></a>

               
            </div>
            </div>
           
              </div>
           
           
              <div className="seo_tools">

                    <h2>

                        Email Marketing Tools
                    </h2>
                    <div  className="seo_items">
                    <div className="seo_solcontents">
                        <div>

                        <AttachEmailIcon />
                        </div>
                        <a href='https://www.email-validator.net/'>  <h4>Email Validation Tool</h4></a>

                       
                    </div>
                    <div className="seo_solcontents">
                        <div>

                        <EmailIcon />
                        </div>
                        <a href='https://www.email-validator.net/'> <h4>Bulk Email  Validation</h4></a>

                        
                    </div>
                    <div className="seo_solcontents">
                        <div>

                        <Filter9PlusIcon />
                        </div>
                        <a href='https://email-checker.net/email-extractor'> <h4>Email Text Extractor</h4></a>

                       
                    </div>
                    <div className="seo_solcontents">
                        <div>

                        <WebhookIcon />
                        </div>
                        <a href='https://www.visme.co/schedule-maker/'> <h4>Warmup Schedule Generator</h4></a>

                       
                    </div>

                    </div>
              </div> 

              <div className="seo_tools">
                    <h2>
                        Affiliate Marketing Tools
                    </h2>
                    <div  className="seo_items">
                            <div className="seo_solcontents">
                                <div>

                                <PollIcon/>
                                </div>
                                <a href='https://www.softwaredevbytes.com/blog'> <h4>Programs Explorer</h4></a>

                               
                            </div>

                    </div>
                  </div>        

                  <div className="seo_tools">
                        <h2>
                            WEB Tools
                        </h2>
                        <div className="seo_items">

                        <div className="seo_solcontents">
                            <div>

                            <PolicyIcon />
                            </div>
                            <a href='https://www.termsfeed.com/privacy-policy-generator/'> <h4>Privacy Policy Generator Tool</h4></a>

                            
                        </div>
                        <div className="seo_solcontents">
                            <div>

                            <GavelIcon />
                            </div>
                            <a href='https://www.termsandconditionsgenerator.com/'><h4>Terms &amp; Conditions Generator Tool</h4></a>

                            
                        </div>
                        <div className="seo_solcontents">
                            <div>

                            <AirIcon />
                            </div>
                            <a href='https://scrapestack.com/product?utm_source=Guru99&utm_medium=ThirdParties&utm_content=ScrapeStack-ProductListing'><h4>WEB Scrapper</h4></a>

                            
                        </div>
                        <div className="seo_solcontents">
                            <div>

                            <CalendarMonthIcon />
                            </div>
                            <a href='https://calendly.com/'><h4>Calender</h4></a>

                            
                        </div>
                        </div>
                      </div>  

                      <div className="seo_tools">

                            <h2>
                                Other Tools &amp; Services
                            </h2>
                            <div className="seo_items">
                            <div className="seo_solcontents">
                                <div>

                                <LocalPoliceIcon />
                                </div>
                                <a href='https://www.similarweb.com/'> <h4>Super Sender License</h4></a>

                                
                            </div>
                            <div className="seo_solcontents">
                                <div>

                                <LinkIcon />
                                </div>
                                <a href='https://free-url-shortener.rb.gy/'> <h4>Link Shortener</h4></a>

                                
                            </div>
                            <div className="seo_solcontents">
                                <div>

                                <AnalyticsIcon />
                                </div>
                                <a href='https://www.similarweb.com/'><h4>InQuick Sticks</h4></a>

                                
                            </div>
                            <div className="seo_solcontents">
                                <div>

                                <ModeStandbyIcon />
                                </div>
                                <a href='https://www.softwaredevbytes.com/blog '> <h4>SDB-Tutors</h4></a>


                               
                            </div>

                            </div>
                      </div>
            </div>

                      <div className="adverts">
                          <div className="placeholder">
                              <h4>
                                  place your adverts here
                                  holders
                              </h4>
                              <div className="placeholder_content">
                                  <img
                                   src="sdbnew6.png"
                                    alt="adverts"
                                     />
                                     <p>Arabian leather</p>
                              </div><div className="placeholder_content">
                                  <img
                                   src="sdbnew6.png"
                                    alt="leather"
                                     />
                                     <p>Travel the world.</p>
                              </div>
                              <div className="placeholder_content">
                                  <img
                                   src="sdbnew2.png"
                                    alt="content"
                                     />
                                     <p>Contents.</p>
                              </div>
                              <div className="placeholder_content">
                                  <img
                                   src="sdbnew4.png"
                                    alt="refactoring"
                                     />
                                     <p>Refactorinng.</p>
                              </div>
                              <div className="placeholder_content">
                                  <img
                                   src="sdbnew5.png"
                                    alt="freelancing"
                                     />
                                     <p>Finance for freelancer.</p>
                              </div>
                          </div>
                      </div>
        </div>
       
        
        
       


    </div>
  )
}

export default Utilities