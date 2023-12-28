import React from 'react';
import AuthBgImg from '../../assets/auth-bg.jpg';
import AuthForm from '../../components/forms/authForm/AuthForm';

const Login= () => {
    return (
        <React.Fragment>
        
            <section className="signup-container">
                <div className='signup-img-container'>
                    <img src={AuthBgImg} alt="authentication-background" />
                </div>
                <div className="signup-content-container">
                    <div className="container">
                        <div className="content-wrapper">
                            <h2>Login</h2>
                            <p>Sign in with email and password.</p>

                            <AuthForm buttonName="Login" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Login;