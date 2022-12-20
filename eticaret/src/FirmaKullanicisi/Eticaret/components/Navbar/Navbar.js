import * as React from 'react';
import NavbarProfile from './NavbarProfile';
import NavbarBildirim from './NavbarBildirim';
import NavbarMessageBox from './NavbarMessageBox';
import './Navbar.css';
function Navbar() {

  return (
    <React.Fragment>
      <div className="kolon">
      <NavbarMessageBox className="messagebox" />
      </div>
      <div className="kolon">
      <NavbarBildirim className="bildirim" />
      </div>
      <div className="kolon">
      <NavbarProfile className="profile" />
      </div>
      
     
    </React.Fragment>
  )
}

export default Navbar
