import React , {useEffect} from 'react'
import TextTransition, { presets } from "react-text-transition";
import Fade from 'react-reveal/Fade'




function About() {
    const TEXTS = [
        " Hi, my name is Afeez",
        "and I'm the founder and",
        "CEO of Software Dev Bytes."
    ]
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
    

    return (
        <div className="aboutapp"  >
            <div className="aboutcontext_container" style= {{ background :"url('banner1.jpg') center center" } } >
                <div className="about_details">
                <TextTransition
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.gentle }
                />

                    
                </div>
                <div className="about_buttons">
                    <Fade left>
                        <a href="https://afeez-portfolio.herokuapp.com/"> PortFolio </a>
                        {/* <Link   to="/contact"> Contact </Link>  */}
                    </Fade>

                </div>

            </div>
            <div className="aboutcontext_staff">
                <div className="staff_container">
                    <img className='user_image image1' src="profile-pic.png" alt="Afeez Badmos" />
                    <img className='user_image image2' src="profileme.jpg" alt="Afeez Badmos" />
                    <img className='user_image image3' src="profile-pic.png" alt="Afeez Badmos" />
                    <img className='user_image image4' src="profileme.jpg" alt="Afeez Badmos" />
                </div>
                <div className="staff_container">
                    <div className='user_image div1' ></div>
                    <div className='user_image div2'   ></div>
                    <div className='user_image div3'   ></div>
                    <div className='user_image div4'   ></div>
                    <div className='user_image div5'   ></div>
                </div>
            </div>



        </div>
    )
}

export default About
