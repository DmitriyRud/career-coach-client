import './contact.css';
import emailjs from '@emailjs/browser';

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
        <img src="/img/bg-env-deepblue.jpg" alt="картинки не найдена" style={{height:"15vw", padding:"3%"}}/>
      </div>  
      <form onSubmit={sendEmail}>
      <label for="name">Имя</label>
      <input name="name" type="text"/>
      <label for="email">Почта</label>
      <input name="email" type="email"/>
      <label for="message">Сообщение</label>
      <textarea name="message" type="text"></textarea>
      <div class="send-btn">
        <button type="submit">Отправить<i class="fa fa-paper-plane"></i></button>
      </div>
      </form>
    </div>
    </div>
  );
}
 
export default ContactForm;
