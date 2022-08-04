import React, { Component } from 'react'

import './App.css';
import {BrowserRouter,Route,Routes,Outlet,Link,NavLink} from 'react-router-dom';
const news=({match})=>{
  // console.log(route)
  return (<h1>Yeni sayfa:{match.params.id}</h1>)
}

 class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <div>
          <div className="App">
          <NavLink activestyle={{color:'blue'}} to="/">Anasayfa</NavLink><br/>
          <NavLink activestyle={{color:'yellow'}} to="/iletisim">İletişim</NavLink><br/>
          <Link to="/news/6">Yeni sayfa</Link><br/>
          <Routes>
            
            <Route path='/' exact render={()=>{
               return ( 
                <div>
                 <div>Anasayfa</div>
                 <Outlet />
               </div>
               );
            }}/>
            <Route path='/iletisim' exact strict render={()=>{
                return ( 
                   <div>
                    <div>İletişim</div>
                    <Outlet />
                  </div>
                  );
              }}/>
                 <Route path='/news/:id' exact strict component={news}/>
            </Routes>
          </div>
      </div>
      
      </BrowserRouter>
    )
  }
}

export default App;


