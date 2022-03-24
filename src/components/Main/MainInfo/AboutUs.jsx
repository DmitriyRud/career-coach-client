import './aboutUs.css';
import { Card, Col, Row } from 'antd';
import React from 'react';


const AboutUs = () => {
  return (
    <div>
      <h1 className='help-text'>Чем наш сайт может помочь?</h1> 
    <section className='section-main-info'>
           <div class="about-cards-list">
  
  <div class="about-card 1">
    <div class="about-card_image" style={{backgroundColor:'#222745'}}> </div>
    <div class="about-card_title title-white">
      <p style={{fontSize:"50px"}}>👩‍💻</p>
      <p className='about-text'>Просматривай 1000 вакансий за минуту!</p>
    </div>
  </div>
  
    <div class="about-card 2">
    <div class="about-card_image" style={{backgroundColor:"#ffa1a2"}}>
      </div>
    <div class="about-card_title title-white">
      <p style={{fontSize:"50px"}}>🧑‍🎓</p>
      <p>Узнай, каких навыков не хватает</p>
    </div>
  </div>
  <div class="about-card 3">
    <div class="about-card_image" style={{backgroundColor:'#222745'}}>
      </div>
    <div class="about-card_title title-white">
      <p style={{fontSize:"50px"}}>🙋‍♂️</p>
      <p>"Lorem ipsum dolor sit amet"</p>
    </div>
  </div>
    </div>
    </section>
    </div>
  );
}
 
export default AboutUs;
