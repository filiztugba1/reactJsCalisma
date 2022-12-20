import React, { Component } from 'react'
import './SingUp.css';
import logo from '../../../../Assets/logo.png';
import {Link as LinkRouter} from 'react-router-dom';
export class SingUp extends Component {
  render() {
    return (
      <div className='containerSingup'>
      <section id="section-wrapperSingUp">
        <div className="box-wrapperSingUp">
          <div className="form-boxSingUp">
            <form action="#" method="POST">
              <img className='etiyoLogoSingUp' src={logo} />
              <div className="form-fieldsSingUp">
              <div className="form-group">
                  <input type="email" className="Email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="username" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="password" className="user-pass" placeholder="Password" />
                </div>
                <div className="form-group">
                  <input type="password" className="user-pass" placeholder="Password Again" />
                </div>

              </div>
              <input type="submit" value="Sign Up" className="submit-buttonSingUp" />
            </form>
            <p className="signin-here">Do you want to login? <LinkRouter to="/login">Sing In</LinkRouter></p>

          </div>

        </div>
      </section>
    </div>
    )
  }
}

export default SingUp