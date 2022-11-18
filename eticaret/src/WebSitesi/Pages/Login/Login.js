import React, { Component } from 'react'
import logo from '../../../Assets/logo.png';
import './Login.css';
import {Link as LinkRouter} from 'react-router-dom';
export class Login extends Component {
  
  render() {
    return (
      <div className='containerLogin'>
          <section id="section-wrapper">
        <div className="box-wrapper">
            <div className="bg-box">
                <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=740&t=st=1668701765~exp=1668702365~hmac=696224ebea5bdfa86a9b2a7b80d01b4c01187bb7406dd525a8f87d56750c9122" alt=""/>
            </div>
            <div className="form-box">
                <form action="#" method="POST">
                    <img className='etiyoLogo' src={logo}/>
                    <div className="form-fields">
                        <div className="form-group">
                            <input type="text" className="user-email" placeholder="Username/Email"/>

                        </div>
                        <div className="form-group">
                            <input type="password" className="user-pass" placeholder="Password"/>
                            
                        </div>
                        <div className="fpass">
                            <span className="fpass-btn"><LinkRouter className="fpassBtnLink" to="/forgetpassword">Forget Password?</LinkRouter></span>
                        </div>
                    </div>
                    <input type="submit" value="Sign In" className="submit-button"/>
                </form>
                <p className="signin-here">Don't have an account ? <LinkRouter to="/singup">Sing Up</LinkRouter></p>
            </div>
         
        </div>
    </section>
      </div>
    )
  }
}

export default Login