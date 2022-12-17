import React, { Component } from 'react'
import './Template.css';
import Template1 from '../../../../Assets/Template/Template1.jpg'
export class Template extends Component {
  render() {
    return (
      <>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
            <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>Template</h2>
            </div>
            <div className="col-sm-6">
            <button className="btn btn-secondary btn-sm table-button" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Build your site yourself</span></button>
            </div>
          </div>
        </div>



              <div className='row'>
                
                  <div className="col-xl-3">
                    <div className="card">
                      <img src={Template1} alt="Avatar" />
                      <div className="containerCard">
                        <p>Ecommerce Template1</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <div className="card">
                      <img src={Template1} alt="Avatar" />
                      <div className="containerCard">
                        <p>Ecommerce Template2</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <div className="card">
                      <img src={Template1} alt="Avatar" />
                      <div className="containerCard">
                        <p>Ecommerce Template3</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <div className="card">
                      <img src={Template1} alt="Avatar" />
                      <div className="containerCard">
                        <p>Ecommerce Template3</p>

                      </div>
                    </div>
                  </div>

             
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Template