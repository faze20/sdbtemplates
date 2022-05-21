import React , {useState } from 'react'
import '../App.css'
import {Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Contents() {
    const [showItem , setShowItem] = useState(false)
    const [showItem1 , setShowItem1] = useState(false)
    const [showItem2 , setShowItem2] = useState(false)
    const [displayImage, setDisplayImage] = useState('content.png')
    
    const dropProfileMenu = ()=>{
        setShowItem(prev => !prev)
        setDisplayImage('content.png')
    }
    const dropProfileMenu1 = ()=>{
        setShowItem1(prev => !prev)
        setDisplayImage('content2.png')
    }
    const dropProfileMenu2 = ()=>{
        setShowItem2(prev => !prev)
        setDisplayImage('content3.png')
    }
    return (
        <>
             <Helmet>
                <meta name='cms' content='wix shopify wordpress squarespace'/>
                <meta name='description' 
                content=
                'Our CMS Development Services.Our custom CMS developers help your company to achieve your business and tech goals.CMS Integration. Seamless communication'
                />
                <meta name='keyword' content='Headless CMS contentful build launch iterate '/>
                <title>Content Management-Create Digital Experience faster | Contentful</title>
            </Helmet>
            <div  className="mainsection_container" style= {{ background :"url('contentms.png') center center ",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            } }>
                <div className="submainsection_container">
                    <h2 className='submainsection_title'>CONTENT MANAGEMENT SYSTEMS </h2>
                    <div className="submainsection_items">
                        <p>We manage,update and create your contents so you can meet the needs of your customer </p>
                        <Fade bottom>
                            <div className="submainsection_list">
                                <li> <Link   to="/contact">  WORDPRESS</Link> </li>
                                <li> <Link   to="/contact">  ETSY</Link> </li>
                                <li> <Link   to="/contact">  OTHERS </Link> </li>
                            </div>
                        </Fade>
                        <div className='submainsection_link'>
                            <Link   to="/contact">  
                                Ready for your optimised contents?Contact us.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainsection_otherscontainer ">
                <div className="fixed_link">
                    <Link to='/contact'>Get In Touch</Link>
                </div>
                <div className="mainsub_contents content_margin">
                    <div className="mainsub_items">
                        <img src="content1.png" alt="online classes" />
                        <div className="item_description_nft">
                            <h2>What is a <span className='headin_span'>content platform?</span> </h2>
                            <div className="description_nft">
                                <h3>Platform</h3>
                                <p>
                                    A content platform is the heart of a modern tech stack. It aggregates,
                                    structures and delivers content across an organization&apos;s digital
                                    footprint. It has flexible APIs that enable businesses to build 
                                    engaging experiences across markets and channels.
                                </p>
                                <Link to='/contact'>Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fancy_tabs">
                   
                    <div className="fancylist_container">
                        <div className="fancylist_items">
                            <div onClick={dropProfileMenu} className='fancy_item'>
                                <h4>Expand your influence</h4>
                                {showItem ? <ExpandLessIcon />  :<ExpandMoreIcon />  }
                              
                            </div>
                            <p className={showItem ? 'fancytab_noshow' : 'fancytab_show' } >
                            Ensure the right content reaches your customers at every touchpoint.
                             With a content platform, you have the flexibility to deliver any message
                              across multiple digital channels.
                            </p>
                        </div>
                        <div className="fancylist_items">
                                <div onClick={dropProfileMenu1} className='fancy_item'>
                                    <h4>Connect your stack</h4>
                                    {showItem1 ? <ExpandLessIcon /> : <ExpandMoreIcon />  }
                                </div>
                                <p className={showItem1 ? 'fancytab_noshow' : 'fancytab_show' }>
                                An API-first platform integrates all your technologies with a unified 
                                content hub that uses the MACH approach (microservices, API-first,
                                composable and headless). This improves content orchestration across 
                                internal teams, as well as the customer journey.
                                </p>
                            </div>
                        <div className="fancylist_items">
                                 <div onClick={dropProfileMenu2} className='fancy_item'>
                                    <h4>Evolve your business</h4>
                                    {showItem2 ? <ExpandLessIcon /> :  <ExpandMoreIcon /> }
                                </div>
                                <p className={showItem2 ? 'fancytab_noshow' : 'fancytab_show' }>
                                Contentful adapts to changing business needs with tools that help
                                 digital teams iterate quickly and efficiently manage and deliver 
                                 content, apps, products and more.
                                </p>
                        </div>
                    </div>
                    <div className="fancytabs_image">
                        <img  src={displayImage} alt="online classes"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contents
