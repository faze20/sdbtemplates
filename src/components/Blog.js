import React , {useEffect} from 'react'
// import { Link } from 'react-router-dom'
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

             <div className="header">
                    <div className="backdrop" style= {{ background :"url('/blogbackground.jpg') center center " ,
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
            </div>



         </div>
    )
}

export default Blog