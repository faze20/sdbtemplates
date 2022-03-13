import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'


function Section({title, description, leftBtnText, rightBtnText,backgroundImg ,color,route }) {
    
    return (
        <Wrap bgImg={backgroundImg} >
            <Fade bottom>
                <ItemText color={color}>
                    <h1> { title }</h1>
                    <p>{ description }</p>
                    
                </ItemText>
           </Fade>
           
           <Buttons>
               <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                        <Link to= {`/${route}`}>  { leftBtnText }</Link>                      
                        </LeftButton>

                        <RightButton>
                        <Link to= {`/${route}`}>   { rightBtnText }</Link>
                           
                        </RightButton>
                    </ButtonGroup>
                </Fade>

                <DownArrow src="/assets/down-arrow.svg" />
           </Buttons>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    // background-image:url('/assets/bacground.jpg');
    object-fit:contain;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-image: ${props => `url("/assets/${props.bgImg}")`};

`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
h1 ,p {
    color : ${props => `${props.color}` } ;
}
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px) {
    flex-direction:column;
}
`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
a{
    font-size:12px;
    color:white;
};
`
const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
a{
    color:black;
};
`
const DownArrow = styled.img`
margin-top:20px;
height:40px;
animation: animateDown infinite 1.5s;
overflow-x: hidden;
`
const Buttons = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

