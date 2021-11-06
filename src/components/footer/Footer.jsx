import React from "react";
import * as S from "./footer.module.css";
import Logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <div className={S.container}>
      <div className={S.logoTitle}>
        <img src={Logo} alt="Logotipo" />
        <h1> Adote Aqui</h1>
      </div>
      <div className={S.footerText}>
         <p>Criado por Arcenio Souza</p>
         <p>© Todos os direitos reservados</p>
      </div>
    </div>
  );
};

export default Footer;
