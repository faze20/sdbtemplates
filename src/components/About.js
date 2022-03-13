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
        <div className="aboutapp"  style= {{ background :"url('/assets/banner1.jpg') center center" } }>
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
    )
}

export default About
