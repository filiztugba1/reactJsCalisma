import React, { Component } from 'react';
import logo from '../../../../Assets/logo.png';
import './ForgetPassword.css';
export class ForgetPassword extends Component {
  render() {
    return (
      <div className='containerForget'>
        <section id="section-wrapperForget">
          <div className="box-wrapperForget">
            <div className="form-boxForget">
              <form action="#" method="POST">
                <img className='etiyoLogoForget' src={logo} />
                <div className="form-fieldsForget">
                <div className="form-groupForget">
                    <input type="text" className="Email" placeholder="Email" />
                  </div>

                </div>
                <input type="submit" value="Forget Password" className="submit-buttonForget" />
              </form>

            </div>

          </div>
        </section>
      </div>
    )
  }
}

export default ForgetPassword