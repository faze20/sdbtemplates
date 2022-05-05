import React , { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Account.css';
import { Link , useNavigate } from 'react-router-dom';



function Account() {
    const [submitting, setSubmitting] = useState(false);
    const [input, setInput] = useState({ email: '', password : ''});
    const navigate = useNavigate();


    const handleChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    }); 

    const refreshPage = (e) =>{
        navigate("/")
        window.location.reload(true)

    }
    const handleSubmit =  async (e) => {
        e.preventDefault();
        setSubmitting(true);
        //`${process.env.REACT_APP_BACKEND_API}/users/login`
        const response = await fetch('http://localhost:8000/users/login' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)

        });
        const result = await response.json()
        localStorage.setItem('user', JSON.stringify(result))
        refreshPage()
        
    }
    
 

    return (
        <div className='wrap'>
             <div className="form_container">
               
                <div className="form_content">
                <div className="wrapper">
                    <div className="wrapper_header">

                    <h1>Login </h1>
                    <button onClick={() => navigate("/register")}>Register</button>
                    </div>
                    {submitting &&
                    <div>Submtting Form...</div>
                    }
                </div>
                    <div className="contain">
                       
                    <div className="section1">
                        <form onSubmit={handleSubmit}>
                            <div className="section_content">
                                <input onChange={ handleChange } value={input.email}
                                type='email' name="email" placeholder='Enter your Email' required/>
                            </div>
                            <div className="section_content">
                                <input onChange={ handleChange } value={input.password}
                                type='password' name="password" placeholder='Password' required/>
                            </div>
                            
                                <button className='btn_submit' type="submit">Login</button>
                                <div className="forgot_pword">
                                    <div className="checkbox">
                                        <input type="checkbox" name="" id="" />
                                        <span>Stay signed in</span>
                                    </div>
                                    <Link to="/forgotpassword"> Forgot your password?</Link>
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
                            Facebook, or Apple, you agree to <Link to="/terms">Softwaredevbytes's Terms of Use </Link> 
                             and <Link to="/privacy">Privacy Policy.</Link>  
                            
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
                            <Link to="/register">
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

