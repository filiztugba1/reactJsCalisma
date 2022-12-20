import React, { Component } from 'react'
import './Anasayfa.css';
import Widget from './Widget/Widget';
import Chart from './Charts/Chart';
import Featured from './Featured/Featured';
const Anasayfa = () => {

    return (
      <>
      <div className='widgets'>
       <Widget type="user"/>
       <Widget type="order"/>
       <Widget type="earning"/>
       <Widget type="blance"/>
       </div>
       <div className='charts'>
        <Featured/>
        <Chart/>
       </div>
       </>
    )
  
}

export default Anasayfa