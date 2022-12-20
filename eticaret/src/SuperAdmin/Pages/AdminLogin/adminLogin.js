import React, { Component } from 'react'
import './adminLogin.css';
import logo from '../../../Assets/logo.png';
import {Link as LinkRouter} from 'react-router-dom';

export class adminLogin extends Component {
  render() {
    return (
        <div className='containerAdminlogin'>
        <section id="section-wrapperAdminlogin">
          <div className="box-wrapperAdminlogin">
            <div className="form-boxAdminlogin">
              <form action="#" method="POST">
                <img className='etiyoLogoAdminlogin' src={logo} />
                <div className="form-fieldsAdminlogin">
              
                  <div className="form-group">
                    <input type="text" className="username" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="user-pass" placeholder="Password" />
                  </div>
                 
  
                </div>
                <input type="submit" value="Sign Up" className="submit-buttonAdminlogin" />
              </form>
            
            </div>
  
          </div>
        </section>
      </div>
    )
  }
}

export default adminLogin