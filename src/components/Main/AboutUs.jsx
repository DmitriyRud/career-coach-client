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
    
      {/* <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div> */}
      {/* <div className="about-us">
        <div className="about-container">
          <div className="wrapper-about">
            <article className="about1">
              <div className="about-card">
                <div className="about-text">
                  dgedgege
                  </div>
              </div>
            </article>
          </div>
        </div>
      </div> */}
    </section>
    </div>
  );
}
 
export default AboutUs;
