import React , {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useParams } from "react-router-dom";
import '../Blog.css';
import blogDatas from '../data/blogData'



function Blog() {
    const params = useParams();
    const blogItem = blogDatas.find((blog)=> {
        if(blog.id === params.id)
            return blog ;
    });
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
             <div className="header">
                    <div className="backdrop blogPage" style= {{ background :"url('/blogbackground.jpg') center center " ,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        
                        } }>
                        <div className="blog_textcontent">
                            <h2>
                            5 Tips for Successful E-commerce store
                            </h2>
                        </div>
                    </div>
             </div>

             <div className="blogItemList_content">
                 {params.id}{blogItem}
                    <h4>5 Tips for Successful E-commerce store</h4>
                    {/* <Link to="/blogs/1">
                        <img src="shopping.jpg" alt="online shopping" />
                    </Link> */}
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



         </div>
    )
}

export default Blog