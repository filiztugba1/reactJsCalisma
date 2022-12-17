import React, { useEffect } from 'react';
import './home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import img1 from '../../../../Assets/OrnekFirmaLogolari/img1.png';
import img2 from '../../../../Assets/OrnekFirmaLogolari/img2.jpeg';
import img3 from '../../../../Assets/OrnekFirmaLogolari/img3.png';
import img4 from '../../../../Assets/OrnekFirmaLogolari/img4.png';
import img5 from '../../../../Assets/OrnekFirmaLogolari/img5.jpeg';
import img6 from '../../../../Assets/OrnekFirmaLogolari/img6.png';
import img7 from '../../../../Assets/OrnekFirmaLogolari/img7.png';
import {Link as LinkRouter} from 'react-router-dom';

function Home() {
  return (
    <section id='home' className='home'>
      <div className="secContainer container">
        <div className="homeText">
          <h1  className="title">Build Your Own Site</h1>
          <p className="subTitle">Explore this platform that allows you to create, develop and design your website the way you want.</p>
          <LinkRouter className="LoginRouter" to="/login">
          <button  className='btn'>
          Explore Now
          </button>
          </LinkRouter>
        </div>
        <div className="Container py-4 px-4 justify-content-center bg-light">
        <Swiper
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      
      breakpoints={{
        0:{
          slidesPerView:1,
          spaceBetween:10
        },
        480:{
          slidesPerView:2,
          spaceBetween:10
        },
        768:{
          slidesPerView:3,
          spaceBetween:10
        },
        1024:{
          slidesPerView:4,
          spaceBetween:10
        },
        1280:{
          slidesPerView:5,
          spaceBetween:10
        }
      }}>
        
    <SwiperSlide>
    <Card id='FirmaLogocard' className="p-10 overflow-hidden h-100 shadow">
      <div className='overflow-hidden rounded p-0 bg-light'>
        <Card.Img className='Img' variant="top"  src={img1}/>
      </div>
    </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card id='FirmaLogocard' className="p-0 overflow-hidden h-100 shadow">
      <div className='overflow-hidden rounded p-0 bg-light'>
        <Card.Img className='Img' variant="top"  src={img2}/>
      </div>
    </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card id='FirmaLogocard' className="p-0 overflow-hidden h-100 shadow">
      <div className='overflow-hidden rounded p-0 bg-light'>
        <Card.Img className='Img' variant="top"  src={img3}/>
      </div>
    </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card id='FirmaLogocard' className="p-0 overflow-hidden h-100 shadow">
      <div className='overflow-hidden rounded p-0 bg-light'>
        <Card.Img className='Img' variant="top"  src={img4}/>
      </div>
    </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card id='FirmaLogocard' className="p-0 overflow-hidden h-100 shadow">
      <div className='overflow-hidden rounded p-0 bg-light'>
        <Card.Img className='Img' variant="top"  src={img5}/>
      </div>
    </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card id='FirmaLogocard' className="p-0 overflow-hidden h-100 shadow">
      <div className='overflow-hidden rounded p-0 bg-light'>
        <Card.Img className='Img' variant="top"  src={img6}/>
      </div>
    </Card>
    </SwiperSlide>

  </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Home


