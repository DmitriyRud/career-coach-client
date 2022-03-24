import "./mainInfo.css";
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import React from "react";

const MainInfo = () => {
  return (
    <>
      <div className="picture-container">
        <div className="speech-bubble">
          Как же много вакансий на рынке! Не знаю, на что откликнуться 😑
        </div>
        <div className="speech-bubble2">
          Так много требований у работодателей! Что мне необходимо подтянуть для
          идеального прохождения собеседования? 😟
        </div>
        <div className="speech-bubble3">
          Эх было бы приложение, которое помогло бы мне разобраться во всем 🙂
        </div>
      </div>
    </>
  );
};

export default MainInfo;
