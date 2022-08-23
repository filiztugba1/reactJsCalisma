import React from 'react';
import './App.css';
import {Home} from './components/Home';
import {Departments} from './components/Departments';
import {Employee} from './components/Employee';
import {Navigation} from './components/Navigation';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
function App() {
  return (
  

<Router>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/departments">departments</Link>
      </li>
      <li>
        <Link to="/employee">employee</Link>
      </li>
    </ul>
  </nav>

  <h3 className='m-3 d-flex justify-content-center'>React with Bootstrap</h3>
  <h5 className='m-3 d-flex justify-content-center'>Employee Management Portal</h5>
  <Navigation/>
  {/* 👇️ Wrap your Route components in a Routes component */}
  <Routes>
  <Route path='/' element={<Home/>} exact />
        <Route path='/departments' element={<Departments/>}  />
        <Route path='/employee' element={<Employee/>}  />
  </Routes>
</div>
</Router>

  );
}

export default App;

