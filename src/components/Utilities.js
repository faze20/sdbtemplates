import React , {useEffect} from 'react'
import TextTransition, { presets } from "react-text-transition";

// import '../App.css'
import '../Utilities.css';
// import { Link } from 'react-router-dom'


function Utilities() {
    const TEXTS = [
        "  This our way of giving back to the community",
        "Free Seo Checklist",
        "7 Ways to Optimise Email list."
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
    <div className="utilities" >
                    <div className='utility_divider'></div>

        <div className="utilities_subheader">
            <p >
                <TextTransition
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.gentle }
                    
                />
               
            </p>
        </div>
        <div className='utility_divider'></div>

            <div className="utility_subnav">
                <ul className='utility_ul'>
                 <li>SEO</li>
                <li>Youtube</li>
                <li>Email</li>
                <li>Webtools</li>
                <li>Discover</li>
                <li>AI</li>
                <li></li>
                </ul>
            </div>
        <div className='utility_pagecontent'  style= {{ background :"url('/assets/sdbnew.png') center center" } }>
           <div className='content_left'>

                Utilities
           </div>

        </div>
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fuga
             temporibus magnam sit necessitatibus dolor aut dolore ex ea quibusdam
              adipisci veritatis dolorum molestiae, eaque inventore corrupti minus,
               sapiente dolorem?
        </div>
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fuga
             temporibus magnam sit necessitatibus dolor aut dolore ex ea quibusdam
              adipisci veritatis dolorum molestiae, eaque inventore corrupti minus,
               sapiente dolorem?
        </div>
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fuga
             temporibus magnam sit necessitatibus dolor aut dolore ex ea quibusdam
              adipisci veritatis dolorum molestiae, eaque inventore corrupti minus,
               sapiente dolorem?
        </div>
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fuga
             temporibus magnam sit necessitatibus dolor aut dolore ex ea quibusdam
              adipisci veritatis dolorum molestiae, eaque inventore corrupti minus,
               sapiente dolorem?
        </div>
        
        
       


    </div>
  )
}

export default Utilities