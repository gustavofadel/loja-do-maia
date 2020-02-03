import React, { useState } from 'react';

import './styles.scss';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>Login</h1>

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
          placeholder="Uma senha segura"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="button" type="submit">Entrar</button>

      </form>
    </>
  );
}

export default Login;