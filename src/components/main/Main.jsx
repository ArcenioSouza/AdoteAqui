import React from "react";
import image1 from "../../assets/img/animais/Cachorro1.jpg";
import image2 from "../../assets/img/animais/Cachorro2.jpg";
import image3 from "../../assets/img/animais/Cachorro3.jpg";
import image4 from "../../assets/img/animais/Cachorro4.jpg";
import image5 from "../../assets/img/animais/Cachorro5.jpg";
import image6 from "../../assets/img/animais/Cachorro6.jpg";
import image7 from "../../assets/img/animais/Cachorro7.jpg";
import image8 from "../../assets/img/animais/Cachorro8.jpg";
import image9 from "../../assets/img/animais/Cachorro9.jpeg";
import image10 from "../../assets/img/animais/Cachorro10.jpeg";
import image11 from "../../assets/img/animais/Cachorro11.jpeg";
import image12 from "../../assets/img/animais/Gato1.jpeg";
import image13 from "../../assets/img/animais/Gato2.jpg";
import image14 from "../../assets/img/animais/Gato3.jpg";
import * as S from './main.module.css'

const Main = () => {
  
  return (
    <div className={S.container}>
      <img src={image1} alt="Animais" />
      <img src={image2} alt="Animais" />
      <img src={image3} alt="Animais" />
      <img src={image4} alt="Animais" />
      <img src={image5} alt="Animais" />
      <img src={image6} alt="Animais" />
      <img src={image7} alt="Animais" />
      <img src={image8} alt="Animais" />
      <img src={image9} alt="Animais" />
      <img src={image10} alt="Animais" />
      <img src={image11} alt="Animais" />
      <img src={image12} alt="Animais" />
      <img src={image13} alt="Animais" />
      <img src={image14} alt="Animais" />
    </div>
  );
};

export default Main;
