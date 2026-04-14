import '../../styles/auth.css';

function CreateAccount() {
  return (
        <>
        <div className='image-container'>
            <div className='image-wrapper'>
                
            </div>
        </div>
        <div className='auth-container'>
            <div className='auth-wrapper'>
                <h2>Create Account</h2>
                <p>Already have an account? <a href='/'>Sign In</a></p>
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