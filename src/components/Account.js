import React , { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Account.css';
import { Link } from 'react-router-dom';



function Account() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
    
        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
     }

    return (
        <div className='wrap'>
             <div className="form_container">
                <div className="wrapper">
                    <div className="wrapper_header">

                    <h1>Login </h1>
                    <button>Register</button>
                    </div>
                    {submitting &&
                    <div>Submtting Form...</div>
                    }
                </div>
                <div className="form_content">
                    <div className="contain">

                    <div className="section1">
                        <form onSubmit={handleSubmit}>
                            <div className="section_content">
                                {/* <label htmlFor="name">Name</label> */}
                                <input type='text' name="name" placeholder='Username' required/>
                            </div>
                            <div className="section_content">
                                <input type='password' placeholder='Password' required/>
                            </div>
                            
                                <button className='btn_submit' type="submit">Login</button>
                                <div className="forgot_pword">
                                    <div className="checkbox">
                                        <input type="checkbox" name="" id="" />
                                        <span>Stay signed in</span>
                                    </div>
                                    <Link> Forgot your password?</Link>
                                </div>

                           
                        </form>
                    </div>
                    <div className="mid_section"> / </div>
                    <div className="section2">
                        <div className="section_content">
                            <div className="section_icon">
                                <GitHubIcon />
                            </div>
                            
                            <button>Sign In With Github</button>
                        </div>
                        <div className="section_content">
                            <div className="section_icon">
                                <GoogleIcon />
                            </div>
                            <button>Sign In With Google</button>
                        </div>
                        <div className="section_content">
                            <div className="section_icon">
                                <FacebookIcon />
                            </div>
                            <button>Sign In With Facebook</button>
                        </div>
                    </div>
                    </div>
                    <div className="not_registered">
                        <div className="terms_condition">
                            <p>
                            By clicking Sign in or Continue with Google, 
                            Facebook, or Apple, you agree to Softwaredevbytes's Terms 
                            of Use and Privacy Policy. 
                            
                            </p>
                            <p>

                                Softwaredevbytes may send you 
                                communications; you may change your preferences 
                                in your account settings. We'll never post without 
                                your permission.
                            </p>
                        </div>
                        <div className="register">
                            <p>
                            Don't have an account ?
                            <Link href="/blog">
                                register
                            </Link>

                            </p>
                        </div>
                    </div>

                </div>
             </div>
        </div>
    )
}

export default Account

