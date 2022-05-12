import React , {useState,useEffect} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';




function Portfolio() {
    const [showItem , setShowItem] = useState(false)
    const [showItem1 , setShowItem1] = useState(false)
    const [showItem2 , setShowItem2] = useState(false)
    const [showItem3 , setShowItem3] = useState(false)
    const [showItem4 , setShowItem4] = useState(false)

    const [displayImage, setDisplayImage] = useState('portfoli4.png')

    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='portfolio' content='vision  mission'/>
        <meta name='description' 
        content='We help you Connect with people based on real projects
         you've done and what they want to work on..
         You can go through any CMS platform like WordPress, Wix, or Squarespace.'
        />
        `
        document.title = "Portfolio Website builders - Showcase Your Work Beautifully";
      }, []);
    
    const dropProfileMenu = ()=>{
        setShowItem(prev => !prev)
        setDisplayImage('portfolio1.png')
    }
    const dropProfileMenu1 = ()=>{
        setShowItem1(prev => !prev)
        setDisplayImage('portfolio3.png')
    }
    const dropProfileMenu2 = ()=>{
        setShowItem2(prev => !prev)
        setDisplayImage('portfolio4.png')
    }
    const dropProfileMenu3 = ()=>{
        setShowItem3(prev => !prev)
        setDisplayImage('portfolio15.png')
    }

    const dropProfileMenu4 = ()=>{
        setShowItem4(prev => !prev)
        setDisplayImage('portfolio2.png')
    }


    return (
        <>
            <div className="mainsection_container"  style= {{ background :"url('portfolio22.png') center center ",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            } }>
                <div className="submainsection_container">
                <h2 className='submainsection_title'>BEST PORTFOLIO SERVICES</h2>
                <div className="submainsection_items">
                    <p>
                        We develop a customised portfolio to secure that job or project
                    </p>

                    <Fade bottom>
                    <div className="submainsection_list">
                        <li> <Link   to="/contact">  Entrepreneurs</Link> </li>
                        <li> <Link   to="/contact">  For Developers</Link> </li>
                        <li> <Link   to="/contact">  For Designers </Link> </li>
                    </div>
                    </Fade>
                    <div className='submainsection_link'>
                            <Link   to="/contact">  
                            Ready for your next career move?Contact us.
                            </Link>
                        </div>
                </div>
                </div>
            </div>
            <div className="mainsection_otherscontainer">
            <div className="mainsub_contents">

                 <div className="fixed_link">
                    <Link to='/contact'>Get In Touch</Link>
                </div>
                <div className="mainsub_otheritems nft ">
                        <img src="ourprocess.jpg" alt="process" />
                        <div className="item_description_nft">
                            <h2>How We Build Your Professional <span className='headin_span'>Portfolio</span> </h2>
                            <div className="description_nft">
                                <h3>Right Resume for the Job</h3>
                                <p>
                                Once you've identified an internship or job, the common practice of applying is
                                 submitting your resume and cover letter. The resume is a professional document
                                  that briefly describes your previous educational and professional experiences.
                                </p>
                                <p>
                                While the cover letter will compliment the resume by including information about
                                 specific experiences and interests that match up with the company&apos;s job 
                                 description. When drafting a cover letter, it's important to show the company 
                                 that you are familiar with their mission statement and other information
                                  included on the company's website.
                               </p>
                                <p>
                                By creating a professional portfolio, you will be providing the company with even
                                 more information and specific examples of your work. An impressive portfolio can
                                  often catch the interest of employers, which is your goal when applying for an
                                   internship or job, and then hopefully make them want to call you in for an 
                                   interview. Here are some helpful tips on how to make a professional portfolio.
                                </p>
                                <Link  to="/contact"> Talk to Us </Link>
                            </div>
                        </div>
                    </div>


                <div className="fancy_tabs">
                   <div className="fancylist_container">
                       <div className="fancylist_items">
                           <div onClick={dropProfileMenu} className='fancy_item'>
                               <h4>We Customise your Works</h4>
                               {showItem ? <ExpandLessIcon />  :<ExpandMoreIcon />  }
                           </div>
                           <p className={showItem ? 'fancytab_noshow' : 'fancytab_show' } >
                           Creating a professional portfolio begins by collecting examples of your work.
                            These examples may include evaluations, reports, surveys, specific materials
                             you have designed for a college course or previous employer, graphs, press 
                             releases, artwork, examples of spreadsheets, etc., that you designed to
                              complete certain projects or to improve the flow of the work.

                           If you are currently completing an internship, be sure to include some of the
                            work you are doing right now. The information you collect to include in your
                             portfolio primarily depends on the type of job you are looking to get. If
                              you are interested in graphic design or art, your portfolio should be put 
                              together with specific examples of your artistic work.
                           </p>
                       </div>
                       <div className="fancylist_items">
                               <div onClick={dropProfileMenu1} className='fancy_item'>
                                   <h4>Optimise Your Professional Photos</h4>
                                   {showItem1 ? <ExpandLessIcon /> : <ExpandMoreIcon />  }
                               </div>
                               <p className={showItem1 ? 'fancytab_noshow' : 'fancytab_show' }>
                               Including photos of yourself working on specific academic projects or
                                in previous internships or community service work will help the employer
                                 to see you in action. Sometimes these visual pictures can say a thousand
                                  words and do&apos;t often need any explanation. If you are currently
                                   completing an internship or volunteering for a company, be sure to
                                    take some photos to keep your portfolio current and to show employers
                                     what you're doing right now.
                               </p>
                           </div>
                       <div className="fancylist_items">
                                <div onClick={dropProfileMenu2} className='fancy_item'>
                                   <h4>Tell Your Story about Work Experiences</h4>
                                   {showItem2 ? <ExpandLessIcon /> :  <ExpandMoreIcon /> }
                               </div>
                               <p className={showItem2 ? 'fancytab_noshow' : 'fancytab_show' }>
                               If you have previously worked for prestigious and successful companies,
                                be sure to include information about them such as new products, annual
                                 reports, brochures, press releases, and newsletters to further impress 
                                 the employer by them just knowing that you played a part in helping the
                                  company achieve success.
                               </p>
                       </div>
                       <div className="fancylist_items">
                                <div onClick={dropProfileMenu4} className='fancy_item'>
                                   <h4>List Customised reccomendations you received in the past</h4>
                                   {showItem4 ? <ExpandLessIcon /> :  <ExpandMoreIcon /> }
                               </div>
                               <p className={showItem4 ? 'fancytab_noshow' : 'fancytab_show' }>
                               Any correspondence that you have received in the past from teachers, 
                               professors, previous employers describing your hard work and professionalism
                                should definitely be included as part of your portfolio. Having professionals
                                 in the field commenting on the outstanding work you contributed to any project
                                  can make a real positive impact on any employer.

                              Be sure to include an example of the outstanding piece of work 
                              (college paper, artwork, lesson plan) so they can actually see it and evaluate 
                              it for themselves. I understand that students sometimes feel that this may be
                               inappropriate and feel uncomfortable bragging about their work, BUT it&apos;s important
                                to understand that if you don&apos;t highlight your successful experiences no one will 
                                know and nobody else will.
                               </p>
                       </div>
                       <div className="fancylist_items">
                                <div onClick={dropProfileMenu3} className='fancy_item'>
                                   <h4>Show Your Skills</h4>
                                   {showItem3 ? <ExpandLessIcon /> :  <ExpandMoreIcon /> }
                               </div>
                               <p className={showItem3 ? 'fancytab_noshow' : 'fancytab_show' }>
                               If your area of expertise includes computer technology, writing, etc.,
                                where you can demonstrate your skills through the work you&apos;ve completed
                                 online, be sure to include the links to showcase the work you have done.
                                  Some students will include a DVD or CD attached to a plastic sleeve on
                                   front or back cover of the portfolio.
                               </p>
                       </div>
                     
                   </div>
                   <div className="fancytabs_image">
                       <img  src={displayImage} alt="portfolio"/>
                   </div>
               </div>



                    <div className="mainsub_items">
                        <img src="portfolio6.png" alt="portfolio" />
                        <div className="item_description">
                            <h2>We Build Coincise &amp; Organised <span className='headin_span'>Documents</span> </h2>
                            <div className="description_nft">
                                <h3>Last Step</h3>
                                <p>
                                Last but not least, you want your portfolio to look professional. 
                                Creating clear, concise documents that are organized well will let the
                                 employer know that you are serious about the job. Be sure to always keep
                                  copies of your work and make sure that you keep updating your portfolio
                                   so that some of the examples of your work are recent which can also
                                    illustrate the growth you&apos;ve made over the years.

                                This is important to do even after you&apos;ve gotten the job. Down the road,
                                 you may be in the job market again looking for a new job and the last 
                                 thing you want is to only have an outdated portfolio that needs to be 
                                 re-created from scratch.
                                </p>
                            </div>
                        </div>
                    </div>

                   </div>
                </div>
            </>
    )
}

export default Portfolio
