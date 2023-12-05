import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='Navi_col'>
        <h3 className='head'>AmazCart</h3>

        <div className='search_btn'>
          <input
            className='form-control'
            type='search'
            placeholder='search..'
          />
        </div>
        <div className='button'>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/cart')}>Cart</button>
        </div>
      </div>
      <div className='Add'>
      
      </div>
    </div>
  );
}
