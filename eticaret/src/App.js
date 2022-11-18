
import './App.css';

import Login from './WebSitesi/Pages/Login/Login';
import Ecommerce from './WebSitesi/Pages/Ecommerce/Ecommerce';
import SingUp from './WebSitesi/Pages/SingUp/SingUp';
import HomePage from './WebSitesi/Pages/HomePage';
import ForgetPassword from './WebSitesi/Pages/ForgetPassword/ForgetPassword';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
   <>
   
   
   
   
   
   <Router>

      <Switch>
      <Route path='/' component={HomePage} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/ecommerce' component={Ecommerce} exact/>
        <Route path='/singup' component={SingUp} exact/>
        <Route path='/forgetpassword' component={ForgetPassword} exact/>
      </Switch>
      
    </Router>
    
  
 
    
   </>
   
  );
}

export default App;
