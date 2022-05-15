import React , { useEffect} from 'react'
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
    const blogItem = blogDatas[(parseInt(params.id)- 1)]
    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='blog' content='article reports'/>
        `
        document.title =`${blogItem.title}`;
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
                                {blogItem.title}
                            </h2>
                        </div>
                    </div>
             </div>
            <div className="blogging_container">
                <div className="blogging_right">
                    <div className="bloggingItem_content">
                        <h2>{blogItem.title}</h2>
                        <p>
                                {blogItem.article}
                        </p>
                        <div className="blogging_created">
                            <p>{blogItem.date}</p>
                            <p>By <span className='created_by'>{blogItem.author}</span></p>
                        </div>
                    </div>
                </div>
                <div className="blogging_left">
                    <div className="blogging_advert">
                        <div className="advert_content">
                            <span>advert <br /> placeholder</span>
                        </div>
                        <div className="advert_content">
                            <span>advert <br /> placeholder</span>
                        </div>
                        <div className="advert_content">
                            <span>advert <br /> placeholder</span>
                        </div>
                        <div className="advert_content">
                            <span>advert <br /> placeholder</span>
                        </div>
                    </div>

                </div>
            </div>

         </div>
    )
}

export default Blog