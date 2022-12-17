import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Components/Home/Home';
import FirmaUrunleri from '../Components/FirmaUrunleri/FirmaUrunleri';
import Hakkimizda from '../Components/Hakkimizda/Hakkimizda';
import Iletisim from '../Components/Iletisim/Iletisim';
export class HomePage extends Component {
  render() {
    return (
       <>
        <Navbar/>
        <Home/>
      <FirmaUrunleri/>
      <Hakkimizda/>
      <Iletisim/>
       </>
    )
  }
}

export default HomePage