import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './Header.css';
import HeaderCart from '../HeaderCart/HeaderCart';
import Logo from '../../img/fl.jpg'

const Header = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container">
          <a class="navbar-brand" href="">
            <img style={{borderRadius:"50%",width:"50px", height:"50px"}}  src={Logo} alt=""/>
            </a>    
          <button 
          class="navbar-toggler" type="button" 
          data-toggle="collapse"
           data-target="#navbarNav" 
           aria-controls="navbarNav" aria-expanded="false" 
           aria-label="Toggle navigation"
           >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/home'>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
              </li>
            </ul>
            </div>
              <HeaderCart></HeaderCart>
          </div>
      </nav>
    );
};

export default Header;

