import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './styles.scss';
import logo from '../../assets/images/logo.png';

function Header () {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  return (
    <div id="container">
      <img src={logo} alt="Loja do Maia" title="Loja do Maia" />
      <div id="search">
        <select name="filter" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="product" title="Produto" defaultChecked>Produto</option>
          <option value="user" title="Usuário">Usuário</option>
        </select>
        <input 
          name="searchinput" 
          id="searchinput"
          type="text"
          placeholder="Sua busca..."
          required
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Header;