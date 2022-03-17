import React , { useState } from 'react'
import styled from 'styled-components'
import  MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectNavs } from '../features/navheads/navSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
  

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const navs = useSelector(selectNavs)

    return (
       
        <Container>
           <Link to="/">
                <img src="/assets/logo145.png" alt="Logo" />
            </Link>
            <Menu>
                {navs && navs.map((car,index)=> (
                      <Link key={index} to= {`/${car}`}>
                           <Grow> { car}  </Grow>
                      </Link> 
                ))}
            </Menu>

            <RightMenu>
                <Link to="/quote">
                    <Grow>Quote  </Grow>
                </Link>  

                <Link to="/account">
                    <Grow> Account </Grow>
                </Link>

                <CustomMenu onClick={()=> setBurgerStatus(true)}/>
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                < CustomClose onClick={()=> setBurgerStatus(false)} />

                </CloseWrapper>
                {navs && navs.map((car,index)=> (
                    <li> <Link key={index} to= {`/${car}`}> {car} </Link> </li>

                ))}            
                
                <ul>
                <li> <Link  to="/about">  Who We Are</Link> </li>
                <li> <Link   to="/debug">  Refactoring |Debugging </Link> </li>
                <li> <Link   to="/contents"> Content Management Systems  </Link> </li> 
                <li> <Link   to="/ecommerce">   E-commerce | SEO </Link> </li>
                <li> <Link   to="/portfolio">  Portfolios</Link> </li>
                <li> <Link  to="/blockchain">  Blockchain </Link> </li>
                <li> <Link  to="/blog">  Blog </Link> </li>
                </ul>

            </BurgerNav>


           
        </Container> 
    )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
top:0;
left:0;
right:0;
display:flex;
align-items: center;
justify-content:space-between;
padding: 0 20px;
background:white;
opacity: 0.85;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items :center;
justify-content:center;
flex:1;
a {
    font-weight:600;
    text-transform :uppercase;
    padding : 0 10px;
    flex-wrap: nowrap;
}

@media (max-width: 768px){
    display:none
}

`
const RightMenu = styled.div`
display:flex;
align-items: center;
cursor:pointer;

p{
    font-weight:600;
    text-transform :uppercase;
    margin-right:10px;  
    padding:2px;  
};
`
const CustomMenu = styled(MenuIcon)`
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:10;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ;
li{
    padding: 15px 0;
    border-bottom:1px solid rgba(0,0,0,0.2);
}
a{
    font-weight:600;
}

`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;

`
const Grow = styled.p`
background:transparent;
transition : 0.5s;
:hover{
    transform:translateY(-10px)
};
`
