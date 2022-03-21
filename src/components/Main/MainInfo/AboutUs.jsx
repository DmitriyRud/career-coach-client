import './aboutUs.css';
import { Card, Col, Row } from 'antd';

const AboutUs = () => {
  return (
    <div>
    <section className='section'>
           <div class="cards-list">
  
  <div class="card 1">
    <div class="card_image" style={{backgroundColor:'#222745'}}> </div>
    <div class="card_title title-white">
      <p>Card Title</p>
      <p>"Lorem ipsum dolor sit amet"</p>
    </div>
  </div>
  
    <div class="card 2">
    <div class="card_image" style={{backgroundColor:"#ffa1a2"}}>
      </div>
    <div class="card_title title-white">
      <p>Card Title</p>
      <p>"Lorem ipsum dolor sit amet"</p>
    </div>
  </div>
  <div class="card 3">
    <div class="card_image" style={{backgroundColor:'#222745'}}>
      </div>
    <div class="card_title title-white">
      <p>Card Title</p>
      <p>"Lorem ipsum dolor sit amet"</p>
    </div>
  </div>
    </div>
    </section>
    </div>
  );
}
 
export default AboutUs;
