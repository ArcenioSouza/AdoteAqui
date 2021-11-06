import React from "react";
import * as S from "./header.module.css";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <div className={S.container}>
      <div className={S.logoTitle}>
        <img src={Logo} alt="Logotipo" />
        <h1> Adote Aqui</h1>
      </div>

      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </div>
  );
};

export default Header;
