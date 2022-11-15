
import Navbar from './WebSitesi/Components/Navbar/Navbar';
import Home from './WebSitesi/Components/Home/Home';
import Hakkimizda from './WebSitesi/Components/Hakkimizda/Hakkimizda';

import FirmaUrunleri from './WebSitesi/Components/FirmaUrunleri/FirmaUrunleri';
import Iletisim from './WebSitesi/Components/Iletisim/Iletisim';
import './App.css';

function App() {
  return (
   <>
   <Navbar/>
    <Home/>
    <FirmaUrunleri/>
    <Hakkimizda/>
    <Iletisim/>
   
   </>
  );
}

export default App;
