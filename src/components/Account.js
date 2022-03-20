import React , { useState } from 'react'
import '../Account.css';



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
             Create Account
             <div className="form_container">
             <div className="wrapper">
                <h1>Login </h1>
                {submitting &&
                <div>Submtting Form...</div>
                }
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>
                         Name  
                    </label>
                        <input type='text' name="name" placeholder='Afeez' />
                    </div>
                    <div>
                    <label>
                         password  
                    </label>
                        <input type='password' placeholder='*****' />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                </div>

             </div>
        </div>
    )
}

export default Account

