import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.style.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo-txt'>HoliDuplicate</span>
        </Link>
        <form className='search-form'>
          <input className='search-txt'  type='text' placeholder='Where we go?' />
        </form>
      </div>
    )
  }
}
