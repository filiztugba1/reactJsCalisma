import React, { Component } from 'react'
import './firmaUruleri.css';
import {BsArrowLeftShort} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';
import {BsDot} from 'react-icons/bs';

import {Link as LinkRouter} from 'react-router-dom';
import img1 from '../../../../Assets/FirmaUrunResimleri/img1.jpeg';
import img2 from '../../../../Assets/FirmaUrunResimleri/img2.jpeg';
import img3 from '../../../../Assets/FirmaUrunResimleri/img3.jpeg';
import img4 from '../../../../Assets/FirmaUrunResimleri/img4.jpeg';
export class FirmaUrunleri extends Component {
   data=[
    {
      id:1,
      imgSrc:img1,
      UrunAdi:'Fotograf makinesi',
      Fiyat:'20000',
      FirmaAdi:'Trendyol'
    },
    {
      id:2,
      imgSrc:img2,
      UrunAdi:'Cep Telefonu',
      Fiyat:'10000',
      FirmaAdi:'Trendyol'
    },
    {
      id:3,
      imgSrc:img3,
      UrunAdi:'Laptop',
      Fiyat:'20000',
      FirmaAdi:'Trendyol'
    },
    {
      id:4,
      imgSrc:img4,
      UrunAdi:'Akıllı Saat',
      Fiyat:'7000',
      FirmaAdi:'Trendyol'
    },
    {
      id:5,
      imgSrc:img4,
      UrunAdi:'Akıllı Saat',
      Fiyat:'7000',
      FirmaAdi:'Trendyol'
    },
    {
      id:6,
      imgSrc:img3,
      UrunAdi:'Laptop',
      Fiyat:'20000',
      FirmaAdi:'Trendyol'
    },
    {
      id:7,
      imgSrc:img2,
      UrunAdi:'Cep Telefonu',
      Fiyat:'10000',
      FirmaAdi:'Trendyol'
    },
    {
      id:8,
      imgSrc:img1,
      UrunAdi:'Fotograf makinesi',
      Fiyat:'20000',
      FirmaAdi:'Trendyol'
    },
  ]
  render() {

    return (
     
     <section id='firmaUrunleri' className='firmaUrunleri section container'>
         <div className="secContainer">
           <div className="secHeader flex">
              <div className="textDiv">
                 <h2 className="secTitle">
                   Company Products
                 </h2>
                 <p>
                 The products of some companies whose ecommerce sites are developed with the Etiyo platform are listed. It is entirely at the request of the company or the user to advertise their products here. If he does not want, his products will not be shown.
                 </p>
              </div>
             {/* <div className="iconsDiv flex">
             <BsArrowLeftShort className="icon leftIcon"/>
             <BsArrowRightShort className="icon"/>
             </div> */}
           </div>

           <div className="firmaContent grid">
             {
              this.data.map((data)=>{
               return(
                <div className="singleDestination" key={data.id}>
                <div className="destImage">
                  <img src={data.imgSrc} alt="image title" />
                  <div className="overlayInfo">
                    
                    <h3>{data.FirmaAdi}</h3>
                    <p>{data.UrunAdi}</p>
                    <BsArrowRightShort className='icon'/>
                  </div>
                </div>
                <div className="destFooter">
                    <div className="number">
                     0{data.id}
                    </div>
                    <div className="destText flex">
                       <h4>{data.UrunAdi}</h4>
                       <h5>{data.Fiyat}TL</h5>
                    </div>
                </div>
              </div>
               )
              })
             }
           </div>
         </div>
         <button className='btn'>
        
         <LinkRouter className="a" to="/ecommerce">More Products</LinkRouter>
        
       </button>
      </section>
      
    )
  }
}

export default FirmaUrunleri
