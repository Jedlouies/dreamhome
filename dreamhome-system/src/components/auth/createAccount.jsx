import React from 'react';
import { useState } from 'react';
import { supabase } from '../../supabaseClient';
import '../../styles/auth.css';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
    const navigate = useNavigate();

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleCreateAccount = async (e) => {
        e.preventDefault();

        const { data, error} = await supabase.rpc('create_account_staff', {
            p_first_name: formData.fname,
            p_last_name: formData.lname,
            p_email: formData.email,    
            p_password: formData.password
        });

        if (error) {
            console.error('Error creating account:', error.message);
        } else if (data && data[0].success) {
            console.log('Account created successfully:', data[0].message);
            navigate('/dashboard');
        } else {
            console.error('Unexpected response:', data.message);
        }

    }
    
  return (
        <>
        <div className='image-container'>
            <div className='image-wrapper'>
                
            </div>
        </div>
        <div className='auth-container'>
            <div className='auth-wrapper'>
                <h2>Create Account</h2>
                <p>Already have an account? <a href='/'>Login</a></p>
                <form onSubmit={handleCreateAccount}>
                    <div className='input-groupv2'>
                        <input type='text' id='fname' name='fname' placeholder='First Name' required value={formData.fname} onChange={handleInputChange}/>
                        <input type='text' id='lname' name='lname' placeholder='Last Name' required value={formData.lname} onChange={handleInputChange}/>
                    </div>
                    <div className='input-group'>
                        <input type='email' id='email' name='email' placeholder='Email' required value={formData.email} onChange={handleInputChange}/>
                    </div>
                    <div className='input-group'>
                        <input type='password' id='password' name='password' placeholder='Password' required value={formData.password} onChange={handleInputChange}/>
                    </div>
                    <div className='input-groupv3'>
                        <input type="checkbox" id="terms" name="terms" checked={isChecked} onChange={handleCheckboxChange} />
                        <label htmlFor="terms">I agree to the <a href='/terms'>Terms of Service</a> and <a href='/privacy'>Privacy Policy</a></label>
                    </div>
                    <div className='submit-btn'>
                        {isChecked ? <button type='submit'>CREATE ACCOUNT</button> : <button type='submit' disabled style={{opacity: '50%', cursor: 'normal'}}>CREATE ACCOUNT</button>}
                    </div>
                    <div className='social-account-divider'>
                        <p>or continue with</p>
                    </div>
                    <div className='social-account-btns'>
                        <button type='button' className='google-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                              <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                            </svg>
                            Google
                        </button>
                        <button type='button' className='facebook-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8-8-8s-8 3.554-8 8c0 4.017 2.995 7.492 7 8.187V11.5a6.5 6.5 0 1 1-1.329-3.779C6.239 7.922 5.543 7.534 5.023 7H3v-.5a2.5 2.5 0 0 1 .79-1.6L4.999 .67L6 .78V3h-.001l-.002-.002c-.4-.4-.9-.6-1.4-.6H3v-.5a2.5 2.5 0 0 1 .79-1.6L4.999 .67L6 .78V3h-.001l-.002-.002c-.4-.4-.9-.6-1.4-.6H3v-.5a2.5 2.5 0 0 1 .79-1.6L4.999 .67L6 .78V3h-.001l-.002-.002c-.4-.4-.9 -.6-1." />
                            </svg>
                            Facebook
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
        
  );
}

export default CreateAccount;