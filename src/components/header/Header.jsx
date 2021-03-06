import React from "react";
import * as S from "./header.module.css";
import Logo from "../../assets/img/logo.png";

const Header = ({setIsLogin}) => {
  return (
    <div className={S.container}>
      <div className={S.logoTitle}>
        <img src={Logo} alt="Logotipo" />
        <h1> Adote Aqui</h1>
      </div>
      <ul>
        <li onClick={() => setIsLogin(false)}>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
        <li onClick={() => setIsLogin(true)}>Login</li>
      </ul>
    </div>
  );
};

export default Header;
