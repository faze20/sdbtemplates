import React from 'react'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import blogDatas from '../data/blogData'

import '../Blog.css';


function BlogHome() {
    
    return (
        <div className="blog_container">
            <Helmet>
              <meta name='description' content='Learn more on Twitter&apos;s Official Blog' />
              <meta name='keyword' content='ICT ,NFT, Nextjs , Reactjs , fullstack , frontend, backend'/>
                <title>Software Development Bytes Blog</title>
            </Helmet>
            <div className="blogSubheader">
                <div>
                <span>Blog &#8594; </span> <span>Category &#8594;</span> <span>Title</span>
                </div>
                <div className="social_media">
                    <ul className='socialmedia_ul'>
                        <li><a href='https://www.facebook.com/badmos.hakoredeh'><FacebookIcon /></a></li>
                        <li><a href="https://www.twitter.com/afeez20"><TwitterIcon /></a></li>
                        <li><a href="https://www.instagram.com/softwaredev__bytes"><InstagramIcon /></a></li>
                        <li><a href="https://www.linkedin.com/in/afeez-badmos-19962333"><LinkedInIcon/></a></li>
                    </ul>
                </div>
            </div>
            <div className="blog_app"  >
                <div className="header">
                    <div className="backdrop" style= {{ background :"url('blogbackground.jpg') center center " ,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        } }>
                        <div className="blog_textcontent">
                            <h2>
                                Hello! Welcome to Software Dev Bytes Blog With
                                    Creative Contents and multiple use cases.
                                
                            </h2>
                        </div>
                    </div>
                    <div className="side_backdrop">
                        <div className="news_list">
                            <h2 className='newlist_h2'><span className='created_by'>LATEST</span> STORIES</h2>
                            <ul className='stories_list'>
                                <li className='list_item'>
                                    <h4>MOMS</h4>
                                    <p>3 Steps to Raising an Adventurous Non-Picky Eater</p>
                                </li>
                                <li className='list_item'>
                                    <h4>TECH</h4>
                                    <p>10 Suprisinggly Classy Ways to Throw a PSL-Themed Wedding</p>
                                </li>
                                <li className='list_item'>
                                    <h4>NFTS</h4>
                                    <p>This Startup Wants to Help You Find Mistakes on Your Medical Bills</p>

                                </li>
                                <li className='list_item'>
                                    <h4>NEWS</h4>
                                    <p>Fans Are Loving The New Gilmore Girls Poster for One Classic Reason</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="blog_gallery">
                    <h2>OUR <span className='created_by'> ARTICLES</span></h2>
                    <div className="blog_sectionArena">
                        <div className="blog_sectionContent">
                            <div className="blog_image">
                                <div className="imageBlog_overlay"></div>
                                <h4>Websites Ethics</h4> 
                                <img src="laptop.jpg" alt="laptop" />
                            </div>
                            <h3>Best Web Practices</h3>
                            <div className="blog_description">
                                <p>To begin with, what is WEB?...and how</p>
                            </div>
                        </div>
                        <div className="blog_sectionContent">
                            <div className="blog_image">
                                <div className="imageBlog_overlay"></div>
                                <h4>Software Solutions</h4>
                                <img src="ecommercenew.png" alt="online shopping" />
                            </div>
                            <h3>Solutions Online</h3>
                            <div className="blog_description">
                                <p>To begin with, what are the Methods ...</p>
                            </div>
                        </div>
                        <div className="blog_sectionContent">
                            <div className="blog_image">
                                <div className="imageBlog_overlay"></div>
                                <h4>SEO Indexing</h4> 
                                <img src="seo.jpg" alt="Seo" />
                            </div>
                            <h3>Best Seo Practices</h3>
                            <div className="blog_description">
                                <p>To begin with, what is SEO?...and how</p>
                            </div>
                        </div>
                    </div>
                    <div className="blogItemlist_container">
                        <h2> <span className='created_by'>LATEST</span> ARTICLES </h2>
                        <div className="blogItemList">
                            {
                                blogDatas.map((blogData, index) =>(
                                    <div key ={index} className="blogItemList_content">
                                        <h4>{blogData.title}</h4>
                                        <Link   to={'/blogs/'+blogData.id}>
                                            <img src={blogData.image} alt="ai" />
                                        </Link>
                                        <p>
                                        {blogData.article}
                                        </p>
                                        <div className="blog_created">
                                            <p>{blogData.date}</p>
                                            <p>By <span className='created_by'>{blogData.author}</span></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHome
