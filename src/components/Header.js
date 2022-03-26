import React , { useState , useEffect } from 'react'
import styled from 'styled-components'
import  MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import { selectNavs } from '../features/navheads/navSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
  



function Header({userPayload}) {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showSubProfileMenu, setShowSubProfileMenu] = useState(false);

    const[ user , setUser ] = useState('')
    const navs = useSelector(selectNavs)
    const loggedInUser = JSON.parse(localStorage.getItem("user")) 

    useEffect(() => {
        if (loggedInUser === undefined || loggedInUser === null ) {
            setUser('')
        }else{
            setUser(loggedInUser);
            setIsLoggedIn(false)
            console.log("header change storage")
        }
       }, [])

    console.log(user.firstName)

    const logout = (e)=>{
        localStorage.clear();
        setIsLoggedIn(true)

    }
    const dropProfileMenu = ()=>{
        setShowSubProfileMenu(prev => !prev)
    }

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
                {isLoggedIn ?  (
                    <Link to="/account">
                       <Grow> Account </Grow>
                    </Link>
                ) 
                : (
                    
                    <Profile>
                        <PersonIcon />
                        <div onClick={dropProfileMenu} >

                        <span>{user.firstName}</span>
                        <ArrowDropDownIcon />

                        </div>
                        {showSubProfileMenu && 
                            <SubProfile>
                                <ul>
                                    <li><Link  to="/dashboard"> Profile</Link> </li>
                                    <li><Link  to="/dashboard"> Dashboard</Link> </li>
                                    <li><Link  to="/dashboard">  Pricing</Link> </li>
                                    <li><Link  to="/dashboard">  Delete Account</Link> </li>
                                </ul>
                            </SubProfile>
                        }
                        <button onClick={logout}> Logout </button>

                    </Profile>
                )
                }

                

                <CustomMenu onClick={()=> setBurgerStatus(true)}/>
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                < CustomClose onClick={()=> setBurgerStatus(false)} />

                </CloseWrapper>
                {navs && navs.map((car,index)=> (
                    <li key={index} > 
                        <Link to= {`/${car}`}>
                            {car}
                        </Link>
                    </li>

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
const Profile = styled.div`
display:flex;
align-items:center;
span{
font-size:0.8rem;
color:green;

}
button{
padding:0 0.3rem;
margin:0 0.8rem;
background:red;
color:#fff;
border:none;
height: 25px;
cursor:pointer;
border-radius:0.2rem;
:hover{
    background:transparent;
    color:green;
    border:1px solid red;
}
}
div{
    display:flex;
    flex-direction:column;
    justify-contents:center;
    margin:0 0.5rem;
   
}
`

const SubProfile = styled.div`
position:absolute;
top:3rem;
color:green;
background:#fff;
ul{
    display:flex;
    flex-direction:column;
    color:green;
    margin-top:2rem;
    li{
        margin:0.3rem;
        padding:0.2rem;
        :hover{
            text-decoration:underline;
            color:green;
        }
    }
}
`


