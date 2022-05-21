import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../Dashboard.css';

const Dashboard = () => {
    const loggedInUser = JSON.parse(JSON.stringify(localStorage.getItem("user"))) 
    const[ user , setUser ] = useState('')
    useEffect( async () => {
        if (loggedInUser === undefined || loggedInUser === null ) {
            setUser('')
        }else{
            setUser(loggedInUser.split('"')[7]);
        }
       }, [])

    return (
        <div className='container'>
            <div className="utility_content">
            {
                user ? 
                    <div className="utility_container">
                        
                    <h1>Dashboard</h1>
                        <div className='utility_item'>
                           <div className="ut_item"><button onClick={()=>alert('upgrade membership')} className='ut_button'>Post+</button></div>
                           <div className="ut_item one"><button onClick={()=>alert('upgrade membership')} className='ut_button'>edit Profile</button></div>
                           <div className="ut_item"><button onClick={()=>alert('upgrade membership')} className='ut_button'>all posts</button> </div>
                           <div className="ut_item"><button onClick={()=>alert('Ask for a Quote')} className='ut_button'>Upgrade</button>  </div>
                           <div className="ut_item one"><button onClick={()=>alert('Visit FAQs')} className='ut_button'>Help &amp; Support</button></div>
                           <div className="ut_item one"><button onClick={()=>alert('Pls contact us')} className='ut_button'>Close Account</button></div>
                        </div>
                
                    </div>
                :
                <div className="dashboard_nolog">
                    <div className="nolog_content">
                        <h2>You are not logged in....</h2>
                        <p>Please log in below or sign up ...</p>
                        <div className="dashboard_login">
                            <Link  to="/account"> Login</Link>
                            <Link  to="/register">  Sign Up</Link>
                        </div>
                            <Link to='/contact'>You can also Contact us </Link>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

export default Dashboard