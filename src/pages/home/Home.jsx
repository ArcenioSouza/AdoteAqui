import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import * as S from "./home.module.css"

const Home = () => {
   return (
      <div className={S.container}>
         <Header/>
         <Main/>
         <Footer/>
      </div>
   )
}

export default Home
