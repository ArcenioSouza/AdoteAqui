import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Login from "../../components/telaLogin/Login";
import { useState } from "react";

import * as S from "./home.module.css";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={S.container}>
      <Header setIsLogin={setIsLogin}/>
      {isLogin ? <Login /> : <Main />}
      <Footer />
    </div>
  );
};

export default Home;
