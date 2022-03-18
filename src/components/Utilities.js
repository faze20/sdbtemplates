import React , {useEffect} from 'react'
import TextTransition, { presets } from "react-text-transition";

// import '../App.css'
import '../Utilities.css';
import { Link } from 'react-router-dom'


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
                    <li>
                        <Link to='#'>
                        <p>SEO</p>
                            
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                        <p > Youtube</p>
                           
                        </Link>

                    </li>
                    <li>
                        <Link href='#'>
                            <p > Email</p>
                           
                        </Link>

                    </li>
                    <li>
                        <Link href='#'>
                        <p > Webtools</p>
                           
                        </Link>

                    </li>
                    <li>
                        <Link href='#'>
                        <p >Discover</p>
                           
                        </Link>

                    </li>
                    <li>
                        <Link href='#'>
                        <p > AI</p>
                          
                        </Link>
                    </li>
                </ul>
            </div>
        <div className='utility_pagecontent'  style= {{ background :"url('/assets/sdbnew.png') center center" } }>
           <div className='content_left'>

               <h1>
                   Free SEO & Digital Marketing Tools
               </h1>
               <h2>
                   The Best Free Seo and Digital Marketing Solution Your Business Will Ever Need.
               </h2>
               <button>Image optimiser</button>
           </div>

        </div>
        <div className="countdowns">
            <div className="countdown_content">
                <h4> 264M</h4>
                <p>Emails verified</p>

            </div>
            <div className="countdown_content">
            <h4> 705M</h4>
                <p>Keyword Analyzed</p>

            </div>
            <div className="countdown_content">
            <h4> 117K</h4>
                <p>Happy Users</p>

            </div>
        </div>
        <div className="seo_solutions">
            <div className="seo_solcontents">
                <h4>Keyword Research Tool</h4>
            </div>
            <div className="seo_solcontents">
                <h4>Keyword Research Tool</h4>
            </div>
            <div className="seo_solcontents">
                <h4>Keyword Research Tool</h4>
            </div>
            <div className="seo_solcontents">
                <h4>Keyword Research Tool</h4>
            </div>
            <div className="seo_solcontents">
                <h4>Keyword Research Tool</h4>
            </div>
            <div className="seo_solcontents">
                <h4>Keyword Research Tool</h4>
            </div>
            <div className="seo_solcontents">
                <h4>Keyword Research Tool</h4>
            </div>
            <div className="seo_solcontents">
                <h4>Keyword Research Tool</h4>
            </div>
            <div className="seo_solcontents">
                <h4>Keyword Research Tool</h4>
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