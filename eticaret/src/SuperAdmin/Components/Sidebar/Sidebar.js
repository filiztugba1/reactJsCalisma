import React, { useState } from 'react';
import { Link as LinkRouter} from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../Assets/logo.png';
import Navbar from '../Navbar/Navbar';
import { Switch, Route } from "react-router-dom";
import Anasayfa from '../../Pages/Dashboard/Anasayfa';
import Destek from '../../Pages/Destek/Destek';
import Musteriler from '../../Pages/Musteriler/Musteriler';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
        <div>
            <Navbar/>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
            <img src={logo} className={`firmalogomuz ${show ? 'firmalogomuzshow' : null}`}/>
          <div>
           

            <div className='nav-list'>
            <LinkRouter to='/home' className='nav-link active'>
              <i className={`fas fa-th-large nav-link-icon`}></i>
              <span className='nav-link-name'>Anasayfa</span>
            </LinkRouter>
              <LinkRouter to='/musteriler' className='nav-link'>
                <i className='fa-solid fa-pen-to-square nav-link-icon'></i>
                <span className='nav-link-name'>Müşteriler</span>
              </LinkRouter>
              <LinkRouter to='/destek' className='nav-link'>
                <i className='fa-solid fa-bag-shopping nav-link-icon'></i>
                <span className='nav-link-name'>Destek</span>
              </LinkRouter>
             
            </div>
          </div>

          <LinkRouter to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </LinkRouter>
        </nav>
        
      </aside>
      <Switch>
    <Route exact path='/home' render={() => <Anasayfa/>} />
      <Route exact path='/musteriler' render={() => <Musteriler/>} />
      <Route exact path='/destek' render={() => <Destek/>} />
      
      {/* <Route exact path='/logout' render={() => <Logout />} /> */}
    </Switch>
 
    </main>
  
   
    
  );
};

export default Sidebar;