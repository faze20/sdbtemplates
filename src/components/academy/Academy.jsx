import React, { useEffect , useState } from 'react'
import {Helmet} from 'react-helmet'
import TextTransition, { presets } from "react-text-transition";
import { Link , useNavigate } from 'react-router-dom'
import CodingLab from './CodingLab'
import Editor from './Editor'
import Flappy from './Flappy'
import Projects from './Projects'
import Tictac from './Tictac'
import './Academy.css'


const Academy = () => {
    const[showComponent , setShowComponent] = useState('home')

    const TEXTS = [
        "One-on-One coding classes",
        "Real world practical examples and Lab Practices.",
        "Online coding challenges."
    ]
    const [index, setIndex] = React.useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
  return (
    <div className='academy-container'>
            <Helmet>
               <meta name='Online coding' content='on-line coding classes'/>
                <meta name='keyword' content='one-on-one tutoring'/>
                <meta  name="description" content="Online zoom coding classes." />
                <title>Online Coding|  Best online individual coding classes</title>
            </Helmet>
            <div className='utility_divider'></div>
            <div className="utilities_subheader">
                <TextTransition
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.gentle }
                />
                <div className="donate_button">
                    <button onClick={()=> navigate("/utilities")}>Utilities</button>
                </div>
            </div>
            <div className='utility_divider'></div>
            <div className="utility_subnav">
                <ul className='utility_ul'>
                    <li className='academy-li'>
                        <button 
                            className={showComponent === 'home' ? 'active_link' : ''}
                            onClick={()=>setShowComponent('home')}> 
                            Home 
                        </button>
                    </li>
                    <li className='academy-li'>
                        <button 
                        className={showComponent === 'editor' ? 'active_link' : ''}
                        onClick={()=>setShowComponent('editor')}>
                            Editor
                        </button>
                    </li>
                    <li className='academy-li'>
                        <button 
                        className={showComponent === 'tictac' ? 'active_link' : ''}
                        onClick={()=>setShowComponent('tictac')}>
                            Challenges
                        </button>
                    </li>
                    <li  className='academy-li'>
                        <button 
                        className={showComponent === 'flappy' ? 'active_link' : ''}
                        onClick={()=>setShowComponent('flappy')}>
                            Curricullum
                        </button>
                    </li>
                    <li className='academy-li'>
                        <button
                        className={showComponent === 'projects' ? 'active_link' : ''}
                        onClick={()=>setShowComponent('projects')}>
                            Projects
                        </button>
                    </li>
                </ul>
            </div>
            <div className="academy_main">
                {showComponent === 'home' &&
                    <div className="academyleft_side">
                        <div className='utility_pagecontent'  
                            style= {{ background :"url('homePhoto.jpg') center center" ,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                            } }
                        >
                            <div className='content_left'>
                              
                                    <h1>
                                    #1 Coding <span className='span-orange'>Academy</span>  for Kids &amp; <span className='span-orange'>Teens</span>
                                    </h1>
                                    <div>
                                    <div className='academybanner-header'>
                                        <h1>Online classes</h1>
                                        <div className='academybanner-subheader' >
                                            <h2>Group</h2>
                                            <div className='academybanner-subheaderdiv'>
                                                <h3>small Group</h3>
                                                <h3>Private classes</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='academybanner-header'>
                                        <h1>Online classes</h1>
                                        <div className='academybanner-subheader' >
                                            <h2>Group</h2>
                                            <div className='academybanner-subheaderdiv'>
                                                <h3>small Group</h3>
                                                <h3>Private classes</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
        
                                <button>Enrol Now</button>
                            </div>
                        </div>
                        <h1>Academy</h1>
                        <h1>Academy</h1>
                        <h1>Academy</h1>
                        <h1>Academy</h1>
                        <h1>Academy</h1>
                        <h1>Academy</h1>
                        <h1>Academy</h1>
                    </div> 
                }
                {showComponent === 'lab' && 
                        <CodingLab />
                  
                }
                {showComponent === 'editor' && 
                           <Editor />
                 
                }

                {showComponent === 'flappy' && 
                         <Flappy />
                
                }

                {showComponent === 'projects' && 
                         <Projects />
                    
                }

                {showComponent === 'tictac' && 
                        <Tictac />
                
                 }

            </div>
        
    </div>
  )
}

export default Academy
