import '../../styles/auth.css';

function SignIn() {
  return (
        <>
        <div className='image-container'>
            <div className='image-wrapper'>
                
            </div>
        </div>
        <div className='auth-container'>
            <div className='auth-wrapper'>
                <h2>Login</h2>
                <p>Don't have an account? <a href='/signup'>Create an Account</a></p>
                <form>
                    <div className='input-group'>
                        <input type='email' id='email' name='email' placeholder='Email' required />
                    </div>
                    <div className='input-group'>
                        <input type='password' id='password' name='password' placeholder='Password' required />
                    </div>
                    <div className='submit-btn'>
                        <button type='submit'>SUBMIT</button>
                    </div>
                    <div className='social-account-divider'>
                        <span>or continue with</span>
                    </div>
                    <div className='social-account-btns'>
                        <button type='button' className='google-btn'>Google</button>
                        <button type='button' className='facebook-btn'>Facebook</button>
                    </div>
                </form>
            </div>
        </div>
        </>
        
  );
}

export default SignIn;