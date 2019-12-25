import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import history from '../../routes/history';
import './header.style.css';

const Header = () => {
  const [search, setSearch] = useState('');
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    history.push(`/search/${search}`, search);
  };

  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <span className='logo-txt'>HoliDuplicate</span>
      </Link>
      <form className='search-form' onSubmit={handleSubmit}>
        <input onChange={handleChange} className='search-txt' type='text' placeholder='Where we go?' />
      </form>
    </div>
  )
}

export default Header;
