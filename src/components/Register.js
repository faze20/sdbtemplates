import React , { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import '../Register.css';


function Register() {

    const [input, setInput] = useState(
        {
            firstName: '', 
            userName : '',
            email: '', 
            phoneNumber : '',
            password : '',
            confirmPassword: '',

        });

    const { firstName, userName , email , phoneNumber , password, confirmPassword } = input

    const handleChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    }); 

    const navigate = useNavigate()

    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if (password === confirmPassword && input.password.length > 6) {
            const userData = {
                firstName,
                userName,
                email,
                phoneNumber,
                password,
            }
            const response = await fetch('http://localhost:8000/users' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const result = await response.json()
            toast.success(`Welcome ${firstName} to the community .`)
            navigate("/account")
            return result.token
        } else {
            toast.error('Passwords do not match | less than six characters')
        }

    }

    return (
        <div className="register">
            <h2 className='register_header'>
                Sign Up
            </h2>

            <div className='register_box'>
                <form onSubmit={handleSubmit}>
                    <div className="register_container">
                        <div className="register_content">
                            <input
                            onChange={ handleChange } value={input.firstName}
                            type='text' name="firstName" placeholder='First Name' required/>
                            <input
                            onChange={ handleChange } value={input.userName}
                            type='text' name="userName" placeholder='username' required/>
                        </div>
                        <div className="register_content">
                            <input
                            onChange={ handleChange } value={input.email}
                            type="email" name="email" id="email" placeholder='Email' required /> 
                            <input
                            onChange={ handleChange } value={input.phoneNumber}
                            type="number" name="phoneNumber" id="phone" placeholder='phone'/>  
                        </div>
                        <div  className="register_content">
                            <input
                            onChange={ handleChange } value={input.password}
                            type="password" name="password" id="password" placeholder='Password' required/>
                            <input
                            onChange={ handleChange } value={input.confirmPassword}
                            type="password" name="confirmPassword" id="confirmpassword" placeholder='Confirm Password' required/>
                        </div>
                    </div>
                    <button className='btn_signup' type="submit">Sign Up</button>
                </form>

            </div>
            <div className="forgot_pword">
                Already a member ? <Link to='/account'>  Login </Link>
            </div>
        </div>
    )
}

export default Register



