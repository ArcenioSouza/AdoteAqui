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
import * as S from "./main.module.css";

const Main = () => {
  return (
    <div className={S.container}>

      <div className={S.images}>
        <img src={image1} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou o <strong>Ozzy</strong><br/>Quero tanto um amigo pra brincar 🥺</p>
          <button>Adotar agora</button>
        </div>
      </div>

      <div className={S.images}>
        <img src={image2} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou o <strong>Buddy</strong><br/>Vou adorar brincar contigo. Quero ir embora com você 🤗</p>
          <button>Adotar agora</button>
        </div>
      </div>

      <div className={S.images}>
        <img src={image3} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou o <strong>Max</strong><br/>Prometo que vou ser seu melhor amigo 🥺</p>
          <button>Adotar agora</button>
        </div>
      </div>

      <div className={S.images}>
        <img src={image4} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou o <strong>Marley</strong><br/>Deve ser divertido morar com você 🥺</p>
          <button>Adotar agora</button>
        </div>
      </div>

      <div className={S.images}>
        <img src={image5} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou a <strong>Maya</strong><br/>Eu ia adorar morar em uma casa quentinha 🥺</p>
          <button>Adotar agora</button>
        </div>
      </div>

      <div className={S.images}>
        <img src={image6} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou a <strong>Pandora</strong><br/>Eu adoro correr e brincar 😃</p>
          <button>Adotar agora</button>
        </div>
      </div>

      <div className={S.images}>
        <img src={image7} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou a <strong>Cacau</strong><br/>Você vai me levar hoje, adoro conhecer lugares novos 🤗</p>
          <button>Adotar agora</button>
        </div>
      </div>

      <div className={S.images}>
        <img src={image8} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou a <strong>Belinha</strong><br/>Você vai se divertir muito comigo 😜</p>
          <button>Adotar agora</button>
        </div>
      </div>

      <div className={S.images}>
        <img src={image9} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou a <strong>Flora</strong><br/>Eu adoro carinho 🥰</p>
          <button>Adotar agora</button>
        </div>
      </div>

      <div className={S.images}>
        <img src={image10} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou o <strong>Bob</strong><br/>Eu vou adorar se você me levar para suas aventuras 😎</p>
          <button>Adotar agora</button>
        </div>
      </div>
      <div className={S.images}>
        <img src={image11} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou a <strong>Luna</strong><br/>Adoro praia, quando nós vamos juntos 😗</p>
          <button>Adotar agora</button>
        </div>
      </div>

      <div className={S.images}>
        <img src={image12} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou a <strong>Paçoca</strong><br/>Onde eu vou dormir é macio assim, já quero 😌</p>
          <button>Adotar agora</button>
        </div>
      </div>

      <div className={S.images}>
        <img src={image13} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou a <strong>Nina</strong><br/>Quero carinho 🙃</p>
          <button>Adotar agora</button>
        </div>
      </div>
      <div className={S.images}>
        <img src={image14} alt="Animais" />
        <div className={S.description}>
          <p><strong>Oi ♥</strong><br/>Eu sou a <strong>Mel</strong><br/>Você vai sempre me encontrar do seu lado, quentinha debaixo das cobertas 😁</p>
          <button>Adotar agora</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
