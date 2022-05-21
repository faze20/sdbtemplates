import React from 'react'
import { Link } from 'react-router-dom';
import '../Dashboard.css';

function Forgotpassword() {
  return (
    <div className='container'>
       <div className="utility_content">
         
          <div>
            <div className="dashboard_nolog">
                <div className="nolog_content">
                    <h2>Forgot your password.....</h2>
                    <p>Let us reset it for you ...</p>
                    <div className="dashboard_login">
                        <Link  to="/quote"> Send us a query !</Link>
                        {/* <Link  to="/register">  Sign Up</Link> */}
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Forgotpassword