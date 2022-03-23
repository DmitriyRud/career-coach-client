import './mainInfo.css';
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";

const MainInfo = () => {
  return (
    <>
  <div className="picture-container">
    {/* <img src="/img/searchJob.jpeg" alt="Картинка не найдена"/> */}
   <div className="speech-bubble">Как же много вакансий на рынке! Не знаю, на что откликнуться 😑</div>
   <div className="speech-bubble2">Так много требований у работодателей! Что мне необходимо подтянуть для идеального прохождения собеседования? 😟</div>    
   <div className="speech-bubble3">Эх было бы приложение, которое помогло бы мне разобраться во всем 🙂</div>     
    {/* <div className="oval">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>     */}
  </div> 
  {/* <h1 className='help-text'>Чем наш сайт может помочь?</h1> 
   <AboutUs/> */}
  {/* <ContactForm/> */}
    </>);
}
 
export default MainInfo;
