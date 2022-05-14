import React , { useEffect } from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom';
import '../App.css'

function Footer() {
    const location = useLocation();

    const page = (location.pathname.replace('/', ''))
   // `${process.env.REACT_APP_BACKEND_API}/pagevisitcount`  'http://localhost:8000/pagevisitcount'
    useEffect( async () => {
        const response = await fetch('http://localhost:8000/pagevisitcount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ page:page , pageCount:1})
        })
        return  await response.json()
    }, [page])


  

    return (
        <div className="footer">
            <div className="footer_group">

            <div className="footer_subsection">
                <h3>Software Dev Bytes </h3>
                <div className="sub">
                    <LocationOnIcon />
                    <p>
                    25630 Felicia Avenue, 
                     Menifee,California,
                      CA 92586,United States</p>
                </div>
                <div className="sub">
                    <EmailIcon />
                    <a href="mailto:toafeez20@gmail.com" target="_top">
                    afeez20@softwaredevbytes.com
                    </a>
                </div>
              

            </div>
            <div className="footer_subsection">
                <h3>Services</h3>
                <ul>
                    <li><Link  to="/data"> Data Scopes and Analysis </Link></li>
                    <li><Link  to="/websites"> Website Application </Link></li>
                    <li><Link  to="/websites"> UX | UI Design </Link></li>
                    <li><Link  to="/softwares"> Software Management </Link></li>
                    <li><Link  to="/data"> Cloud Integration </Link></li>
                </ul>

            </div>
            <div className="footer_subsection">
                <h3>Expertise</h3>
                <ul>
                    <li><Link  to="/softwares"> Customised Applications </Link></li>
                    <li><Link  to="/softwares"> Saas Development </Link> </li>
                    <li><Link  to="/applications"> Mobile Applications </Link></li>
                    <li><Link  to="/websites">  Optimisation</Link></li>
                    <li><Link  to="/data">Data Migration  </Link></li>
                </ul>
            </div>

            <div className="footer_subsection">
                <h3>Industries</h3>
                <ul>
                    <li><Link  to="/websites">  E-Commerce</Link></li>
                    <li><Link  to="/websites">Finance  </Link> </li>
                    <li><Link  to="/data">Data Automation  </Link></li>
                    <li><Link  to="/websites"> Blockchain </Link></li>
                    <li><Link  to="/websites"> WEB </Link></li>
                </ul>
                
            </div>
            </div>
            <div className="footer_social">
                Other ways to reach us 
                <div className="footer_socialitems">
                    <a href="www.facebook.com"> <FacebookIcon /></a>
                    <a href="https://www.linkedin.com/in/afeez-badmos-19962333"> <LinkedInIcon /></a>
                    <a href="www.twitter.com"><TwitterIcon /></a>
                    <a href="https://www.instagram.com/hakhoredeh"><InstagramIcon /></a>
                    <a href="www.pinterest.com"><PinterestIcon /></a>
                    <a href="www.youtube.com"><YouTubeIcon /></a>
                </div>
            </div>

            <hr className="footer_divide"/>
            <div className="copyright">
                <p>Privacy Policy | Terms </p>
                <p>&copy;  {`${new Date().getFullYear()}`} SOFTWARE DEVELOPMENT BYTES. </p>
                <p>All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
