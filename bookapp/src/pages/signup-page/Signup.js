import React from 'react';
import './signup.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg';


const Signup = () => {
    return (
        <React.Fragment>
            <section className="signup-container">
                <div className='signup-img-container'>
                    <img src={AuthBgImg} alt="authentication-background" />
                </div>
                <div className="signup-content-container">
                    <div className="container">
                        <div className="content-wrapper">
                            <h2>Signup</h2>
                            <p>Create a new account with email and password.</p>

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Signup;