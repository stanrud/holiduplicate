import React, { Component } from 'react'
import './header.style.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <span className='logo-txt'>HoliDuplicate</span>
        <form className='search-form'>
          <input className='search-txt'  type='text' placeholder='Where we go?' />
        </form>
      </div>
    )
  }
}
