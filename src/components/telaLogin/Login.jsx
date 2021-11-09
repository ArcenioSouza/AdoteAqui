import React from "react";
import { useState } from "react";

const Login = () => {
  const [isRegistered, setisRegistered] = useState(true);
  return (
    <div>
      {isRegistered ? (
        <form>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" />
          <button>Entrar</button>
          <hr />
          <p>Não possui cadastro ainda?</p>
          <button onClick={() => setisRegistered(false)}>Cadastre-se</button>
        </form>
      ) : (
        <form>
           <label htmlFor="nome">Nome</label>
           <input type="text" name="nome" id="nome" />
           <label htmlFor="celular">Celular</label>
           <input type="tel" name="celular" id="celular" />
           <label htmlFor="cidade">Cidade</label>
           <input type="text" name="cidade" id="cidade" />
           <label htmlFor="estado">Estado</label>
           <input type="text" name="estado" id="estado" />
           <label htmlFor="email">Email</label>
           <input type="email" name="email" id="email" />
           <label htmlFor="senha">Senha</label>
           <input type="password" name="senha" id="senha" />
           <label htmlFor="confirmSenha">Confirme sua senha</label>
           <input type="password" name="confirmSenha" id="confirmSenha" />
           <button onClick={() => setisRegistered(true)}>Cadastrar</button>
        </form>
      )}
    </div>
  );
};

export default Login;
