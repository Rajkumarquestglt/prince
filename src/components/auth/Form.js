import FormCard from './FormCard';

const Form=({handleLogin,handleEmail,handlePassword,err})=>{
    return(<>
           <FormCard>
           <div className="login__box">
                        <i className='bx bx-user login__icon'></i>
                        <input type="text" onChange={handleEmail} id="email"  placeholder="Username" className="login__input"autoComplete="off"/>
                    </div>

                    <div className="login__box">
                        <i className='bx bx-lock-alt login__icon'></i>
                        <input type="password" onChange={handlePassword} id="password"  placeholder="Password" className="login__input"autoComplete="off"/>
                    </div>

                    <a href="/" className="login__forgot">Forgot password?</a>

                    <a href="/" onClick={handleLogin} className="login__button">Sign In</a>
                   <span>{err}</span>
                     <div>
                        <span className="login__account">Don't have an account ?</span>
                        <span className="login__signin" id="sign-up">Sign Up</span>
                    </div>
              
           </FormCard>
                    </>);
}
export default Form;