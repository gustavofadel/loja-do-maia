import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import '../../styles/entry.scss';


function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <img src={logo} alt="Loja do Maia" title="Loja do Maia" />
      <form>
        <label htmlFor="email">E-mail</label>
        <input 
          name="email"
          id="email"
          type="email"
          placeholder="Seu endereço de e-mail"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input 
          name="password"
          id="password"
          type="password"
          placeholder="Sua senha"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button 
          className="button" 
          type="submit"
        >
          Entrar
        </button>
      </form>
      <Link to="/register" id="link">Não tem uma conta? Clique aqui</Link>
    </>
  );
}

export default Login;