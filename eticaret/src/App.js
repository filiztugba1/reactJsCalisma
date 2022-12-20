
import './App.css';

import Login from './FirmaKullanicisi/WebSitesi/Pages/Login/Login';
import Ecommerce from './FirmaKullanicisi/WebSitesi/Pages/Ecommerce/Ecommerce';
import SingUp from './FirmaKullanicisi/WebSitesi/Pages/SingUp/SingUp';
import HomePage from './FirmaKullanicisi/WebSitesi/Pages/HomePage';
import ForgetPassword from './FirmaKullanicisi/WebSitesi/Pages/ForgetPassword/ForgetPassword';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './FirmaKullanicisi/Eticaret/components/Sidebar/Sidebar';
import AdminLogin from './SuperAdmin/Pages/AdminLogin/adminLogin';
import SidebarAdmin from './SuperAdmin/Components/Sidebar/Sidebar';
function App() {
  return (
   <>
 
 
 
  {/* süper admin*/}
     {/* <AdminLogin/> */}
     <Router>
        <SidebarAdmin/>
       </Router>

  {/* Firma Kullanıcısı*/}
        {/* <Router>
        <Sidebar/>
        </Router> */}
   
        {/*    
          <Router>

              <Switch>
              <Route path='/' component={HomePage} exact/>
                <Route path='/login' component={Login} exact/>
                <Route path='/ecommerce' component={Ecommerce} exact/>
                <Route path='/singup' component={SingUp} exact/>
                <Route path='/forgetpassword' component={ForgetPassword} exact/>
              </Switch>
              
              
              </Router> */}
            
  
 
    
   </>
   
  );
}

export default App;
