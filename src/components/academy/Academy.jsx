import React, { useEffect } from 'react'
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
                    <li>
                        <Link to="/ecommerce">
                        <p>Code Lab</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contents">
                        <p > TicTac</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contents">
                            <p >Editor</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/websites">
                        <p > Flappy</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ecommerce">
                        <p >Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ecommerce">
                        <p > Chat</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="academy_main">
                <div className="academyleft_side">
                <h1>Academy</h1>
                <h1>Academy</h1>
                <h1>Academy</h1>
                <h1>Academy</h1>
                <h1>Academy</h1>
                <h1>Academy</h1>
                <h1>Academy</h1>
                </div>
                <div className="academyright_side">
                    <CodingLab />
                    <Editor />
                    <Flappy />
                    <Projects />
                    <Tictac />

                </div>
            </div>
        
    </div>
  )
}

export default Academy
