import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/entry.scss';

function Register () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="name">Nome</label>
        <input 
          name="name"
          id="name"
          type="text"
          placeholder="O seu nome"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
          placeholder="Uma senha segura"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="button" type="submit">Cadastrar-se</button>
      </form>
      <Link to="/" id="link">Já tem uma conta? Faça o login</Link>
    </>
  );
}

export default Register;