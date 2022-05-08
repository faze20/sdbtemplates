import React , { useState , useEffect } from 'react'
import axios from 'axios'
import  MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import { selectNavs } from '../features/navheads/navSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import '../Header.css'
  



function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showSubProfileMenu, setShowSubProfileMenu] = useState(false);

    const[ user , setUser ] = useState('')
    const navs = useSelector(selectNavs)
    const loggedInUser = JSON.parse(JSON.stringify(localStorage.getItem("user"))) 
   

    useEffect( async () => {
        if (loggedInUser === undefined || loggedInUser === null ) {
            setUser('')
        }else{
            setUser(loggedInUser.split('"')[7]);
            setIsLoggedIn(false)
        }
        // api to get user ip and location `${process.env.REACT_APP_BACKEND_API}/visits` 'http://localhost:8000/visits'
        const res = await axios.get('https://geolocation-db.com/json/')
        const response = await fetch(  'http://localhost:8000/visits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({state: res.data.state,country: res.data.country_code, count:1, ip_addr:res.data.IPv4})
        })
        const result = await response.json()
        return result ;
       }, [])


    const logout = (e)=>{
        localStorage.clear();
        setIsLoggedIn(true)

    }
    const dropProfileMenu = ()=>{
        setShowSubProfileMenu(prev => !prev)
    }

    return (
       
        <div className='header_container' >
           <Link to="/">
                <img src="logonew3.png"  alt="Logo" />
            </Link>

            <div className='header_menu'>
                {navs && navs.map((car,index)=> (
                      <Link key={index} to= {`/${car}`}>
                           { car} 
                      </Link> 
                ))}
            </div>
           

            <div className='header_rightmenu'>
                <Link to="/quote">
                   Quote 
                </Link>  
                {isLoggedIn ?  (
                    <Link to="/account">
                       Account
                    </Link>
                ) 
                : (
                    
                    <div className='header_profile'>
                        <PersonIcon /> 
                        <div onClick={dropProfileMenu} >
                            <span>{user}</span>
                            <ArrowDropDownIcon />
                        </div>
                        {showSubProfileMenu && 
                            <div className='header_subprofile'>
                                <ul className='subprofile_ul'>
                                    <li><Link  to="/dashboard"> Profile</Link> </li>
                                    <li><Link  to="/dashboard"> Dashboard</Link> </li>
                                    <li><Link  to="/dashboard">  Pricing</Link> </li>
                                    <li><Link  to="/dashboard">  Delete Account</Link> </li>
                                </ul>
                            </div>
                        }
                        <button onClick={logout}> Logout </button>

                    </div>
                )
                }

                <MenuIcon  onClick={()=> setBurgerStatus(true)} />

                {/* <CustomMenu /> */}
            </div>

            <div className='header_burger' show={burgerStatus}>
                <div className='header_wrapper'>
                 < CloseIcon onClick={()=> setBurgerStatus(false)} />

                </div>
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

            </div>


           
        </div> 
    )
}

export default Header

// const BurgerNav = styled.div`
// position:fixed;
// top:0;
// bottom:0;
// right:0;
// background:white;
// width:300px;
// z-index:10;
// padding:20px;
// display:flex;
// flex-direction:column;
// text-align:start;
// transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
// transition: transform 0.2s ;
// li{
//     padding: 15px 0;
//     border-bottom:1px solid rgba(0,0,0,0.2);
// }
// a{
//     font-weight:600;
// }

// `



