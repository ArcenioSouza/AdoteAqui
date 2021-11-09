import React from "react";
import * as S from "./login.module.css"
import { useState } from "react";

const Login = () => {
  const [isRegistered, setisRegistered] = useState(true);
  return (
    <div className={S.container}>
      {isRegistered ? (
        <form className={S.formContainer}>
          <h2>Faça seu login</h2>
          <label className={S.label} htmlFor="email">E-mail</label>
          <input className={S.input} type="email" name="email" id="email" />
          <label className={S.label} htmlFor="senha">Senha</label>
          <input className={S.input} type="password" name="senha" id="senha" /><br />
          <button className={S.button}>Entrar</button>
          <hr />
          <p className={S.paragraph}>Não possui cadastro ainda?</p><br />
          <button className={S.BCadastrar} onClick={() => setisRegistered(false)}>Cadastre-se</button>
        </form>
      ) : (
        <form className={S.formContainerCadastro}>
           <label className={S.label} htmlFor="nome">Nome</label>
           <input className={S.input} type="text" name="nome" id="nome" />
           <label className={S.label} htmlFor="celular">Celular</label>
           <input className={S.input} type="tel" name="celular" id="celular" />
           <label className={S.label} htmlFor="cidade">Cidade</label>
           <input className={S.input} type="text" name="cidade" id="cidade" />
           <label className={S.label} htmlFor="estado">Estado</label>
           <input className={S.input} type="text" name="estado" id="estado" />
           <label className={S.label} htmlFor="email">Email</label>
           <input className={S.input} type="email" name="email" id="email" />
           <label className={S.label} htmlFor="senha">Senha</label>
           <input className={S.input} type="password" name="senha" id="senha" />
           <label className={S.label} htmlFor="confirmSenha">Confirme sua senha</label>
           <input className={S.input} type="password" name="confirmSenha" id="confirmSenha" /><br />
           <button className={S.BCadastrar2} onClick={() => setisRegistered(true)}>Cadastrar</button>
        </form>
      )}
    </div>
  );
};

export default Login;
