import emailjs from '@emailjs/browser';
import './contact.css';

const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m5tjgwr', 'template_gw9reo8', e.target, 'gNDSWmBBg0cXmorHe')
      .then((result) => {
          console.log(result.text);
          console.log(e.target)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <div className="contact-form">
      <span style={{color: "white"}}>Свяжитесь с нами</span>
      <div className="back-form">
      <div className="img-back">
        <p style={{color: "white"}}>Если у Вас возникли технические проблемы или появились пожелания по работе сайта, отравьте нам сообщение!</p>
      </div>  
      <form className="pre-form" onSubmit={sendEmail}>
      <label for="name">Имя</label>
      <input className='pre-input' name="name" type="text"/>
      <label for="email">Почта</label>
      <input className='pre-input' name="email" type="email"/>
      <label for="message">Сообщение</label>
      <textarea className='pre-input' name="message" type="text"></textarea>
      <div class="send-btn">
        <button className="contact-btn" type="submit">Отправить<i class="fa fa-paper-plane"></i></button>
      </div>
      </form>
    </div>
    </div>
  );
}
 
export default ContactForm;
