import React, { useState } from 'react';
import { Link as LinkRouter} from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../../Assets/logo.png';
import Navbar from '../Navbar/Navbar';
import { Switch, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import Template from "../../pages/Template/Template";
import ProductCategory from "../../pages/ProductCategory/productcategory";
import Product from "../../pages/Product/product";
import WebDesign from "../../pages/WebDesign/webdesign";
import MobileView from "../../pages/MobileView/mobileview";
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
            <LinkRouter to='/template' className='nav-link active'>
              <i className={`fas fa-th-large nav-link-icon`}></i>
              <span className='nav-link-name'>Template</span>
            </LinkRouter>
              <LinkRouter to='/productcategory' className='nav-link'>
                <i className='fa-solid fa-pen-to-square nav-link-icon'></i>
                <span className='nav-link-name'>Product Category</span>
              </LinkRouter>
              <LinkRouter to='/product' className='nav-link'>
                <i className='fa-solid fa-bag-shopping nav-link-icon'></i>
                <span className='nav-link-name'>Products</span>
              </LinkRouter>
              <LinkRouter to='/webdesign' className='nav-link'>
                <i className='fas fa-palette nav-link-icon'></i>
                <span className='nav-link-name'>Web Design</span>
              </LinkRouter>
              <LinkRouter to='/mobileview' className='nav-link'>
                <i className='fas fa-mobile-alt nav-link-icon'></i>
                <span className='nav-link-name'>Mobile View</span>
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
    <Route exact path='/template' render={() => <Template/>} />
      <Route exact path='/productcategory' render={() => <ProductCategory />} />
      <Route exact path='/product' render={() => <Product />} />
      <Route exact path='/webdesign' render={() => <WebDesign />} />
      <Route exact path='/mobileview' render={() => <MobileView />} />         
      {/* <Route exact path='/logout' render={() => <Logout />} /> */}
    </Switch>
 
    </main>
  
   
    
  );
};

export default Sidebar;