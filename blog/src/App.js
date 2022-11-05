import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Post from './components/Post';


function App(){
  return (
    <Router>
    <div>
      <Navbar/>
        {/* 👇️ Wrap your Route components in a Routes component */}
        <Switch>
        <Route path='/' component={Home} exact />
            <Route path='/contact' component={Contact}  />
            <Route path='/about' component={About}  />
            <Route exact  path={'/:post_id'}  component={Post}  />
        </Switch>
 
      </div>
    </Router>
  );
}

export default App;