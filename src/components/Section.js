import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import '../Header.css'

function Section({title, description, leftBtnText, rightBtnText,backgroundImg ,color,route }) {
    return (
        <div className='section_wrap' 
         style={{ 
             background : `url(${backgroundImg}) no-repeat`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
        }} 
         >
            <Fade bottom>
                <div className='section_itemtext' >
                    <h1 style={{color :  `${color}`}}> { title }</h1>
                    <p style={{color :  `${color}`}}>{ description }</p>
                </div>
           </Fade>
           <div className='section_buttons'>
               <Fade bottom>
                    <div className='section_buttongroup'>
                        <div className='section_leftbutton'>
                             <Link to= {`/${route}`}>  { leftBtnText }</Link>                      
                        </div>
                        <div className='section_rightbuttons'>
                            <Link to= {`/${route}`}>   { rightBtnText }</Link>
                        </div>
                    </div>
                </Fade>
                <img className='down_arrow' src="down-arrow.svg"  alt='down arrow'/>
           </div>
        </div>
    )
}

export default Section


