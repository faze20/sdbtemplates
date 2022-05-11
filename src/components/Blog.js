import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../Blog.css';


function Blog() {
    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='blog' content='article reports'/>
        `
        document.title = "Blog";
      }, []);
    return (
        <div className="blog_container">
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
                                       <h4>DECOR</h4>
                                       <p>10 Suprisinggly Classy Ways to Throw a PSL-Themed Wedding</p>
                                   </li>
                                   <li className='list_item'>
                                       <h4>NEWS</h4>
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
                               
                                    <div className="imageBlog_overlay">
                                        
                                    </div>
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
                                <div className="imageBlog_overlay">
                                        
                                    </div>
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
                              
                                <div className="imageBlog_overlay">
                                       
                                    </div>
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
                       
                
                    
                <div className="blogItemList_content">
                <h4>5 Tips for Successful E-commerce store</h4>
                    <Link to="/">
                        
                        <img src="shopping.jpg" alt="online shopping" />
                    </Link>
                        <p>
                        Whether you&apos;ve been running an online store for 6 months or 6+ years, it&apos;s a never-ending battle to win conversions.
                        For more Conversion, Develop a Loyalty Program, Focus on Building Consumer Trust, Don’t Invest in Paid Ads Too Early,
                        Answer All Questions on Every Platform, Over-Deliver in All You Do...more


                        </p>
                        
                        <div className="blog_created">
                                    <p>2/09/2021</p>
                                    <p>By <span className='created_by'>Faze59</span></p>
                                </div>
                </div>
                <div className="blogItemList_content">
                <h4>How to Blog 2021</h4>
                    <Link to="/">
                       
                        <img src="mobiledevblog.jpg" alt="mobile dev" />

                    </Link>
                        <p>
                           Blogging is about sharing your knowledge with the world,For a successful blog path, you need to 
                           pick a blog name, get your blog online, customize your blog , write and publish your first post,
                           promote your blog,engage with your audience and have a dep passion for your niche and keep learning.
                
                        </p>
                        <div className="blog_created">
                                    <p>2/09/2021</p>
                                    <p>By <span className='created_by'>Faze59</span></p>
                                </div>
                </div>
                <div className="blogItemList_content">
                <h4>Social Media New age</h4>
                    <Link to="/">
                       
                        <img src="virtualreality.jpg" alt="virtual reality" />
                    </Link>
                        <p>
                           Just your presence on Social media is not enough.WHY? over 4 billion users are on social meiums and businessess irrespective of the 
                           niche are using social media.A sensational hit on social media has a global peneteration rate of 57%.For effective marketing, define your goals,
                           learn about your target audiance, select social media platform wisely, set up a socail media calendar.

                        </p>
                        <div className="blog_created">
                                    <p>2/09/2021</p>
                                    <p>By <span className='created_by'>Faze59</span></p>
                                </div>
                </div>
                <div className="blogItemList_content">
                <h4>N F T new Crypto currency</h4>
                    <Link to="/">
                       
                        <img src="Technology.jpg" alt="tech" />
                    </Link>
                        <p>
                        A cryptocurrency, crypto-currency, or crypto is a binary data designed to work as a medium of exchange
                         wherein individual coin ownership records are stored in a ledger existing in a form of a computerized
                          database using strong cryptography to secure transaction records
                        </p>
                        <div className="blog_created">
                                    <p>2/09/2021</p>
                                    <p>By <span className='created_by'>Faze59</span></p>
                                </div>
                </div>
                <div className="blogItemList_content">
                <h4>How to Buy N F T</h4>
                    <Link to="/">
                        
                    <img src="art.png" alt="nft" />
                    </Link>
                        <p>
                          NFT- Non Fungible Token. You will need a Metamask wallet as this is the only wallet that supports NFT currently.
                          when you get your wallet, next step is to fund the wallet with eth, etherum for purchase.once these two steps
                          are completed, go to <a className="opensea io" href='https://www.opensea.com'>Open sea</a> to look for an NFT of your choice and DONE.
                        </p>
                        <div className="blog_created">
                                    <p>2/09/2021</p>
                                    <p>By <span className='created_by'>Faze59</span></p>
                                </div>
                </div>
                <div className="blogItemList_content">
                <h4>How to Get a  crypto Wallet 2021</h4>
                    <Link to="/">
                    <img src="crypto.jpg" alt="crypto" />
                       
                    </Link>
                        <p>
                            There are two types of Wallets basically.Custodial/Hosted  Walllet and Non-Custodial Wallet.
                            The most popular and easy-to-set-up crypto wallet is a hosted wallet. When you buy crypto using
                             an app like Coinbase, your crypto is automatically held in a hosted wallet
                        </p>
                        <div className="blog_created">
                                    <p>2/09/2021</p>
                                    <p>By <span className='created_by'>Faze59</span> </p>
                                </div>
                </div>
                <div className="blogItemList_content">
                <h4>Custodial Wallet VS Non Custodial Wallet</h4>
                    <Link to="/">
                       
                    <img src="crypto.jpg" alt="crypto" />
                    </Link>
                        <p>
                           Custodial Wallet or Hosted Wallet :it is when third party keep your crypto for you The main benefit of
                            keeping your crypto in a hosted wallet is if you forget your password, you won&apos;t lose your crypto. A 
                            drawback to a hosted wallet is you can&apos;t access everything crypto has to offer. However, that may
                             change as hosted wallets start to support more features.
                        </p>
                        <div className="blog_created">
                                    <p>2/09/2021</p>
                                    <p>By <span className='created_by'>Faze59</span></p>
                                </div>
                </div>
                <div className="blogItemList_content">
                <h4>How to Create N F T&apos;s</h4>
                    <Link to="/">
                       
                        <img src="artificial Intelligence.jpg" alt="ai" />
                    </Link>
                        <p>
                        Before you start, you will need to decide on which blockchain you want to issue your NFTs.Each blockchain has
                         its own separate NFT token standard, compatible wallet services and marketplaces.Since Ethereum has the largest
                          NFT ecosystem, here&apos;s what you&apos;ll need to mint your own NFT artwork, music or video on the Ethereum blockchain:..more
                        </p>
                        <div className="blog_created">
                                    <p>2/09/2021</p>
                                    <p>By <span className='created_by'>Faze59</span></p>
                                </div>
                </div></div> </div>
           
           
              
            </div>
            </div>

        </div>
         
    )
}

export default Blog
