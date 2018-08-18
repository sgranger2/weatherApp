import React from 'react';
import GetWeather from './GetWeather';
import logo from '../logo.svg';
const Link = require('react-router-dom').Link;

const Header = (props) => {
    return (
        <header className="App-header">
            <div className='logoText' >
                <img src={logo} className="App-logo" alt="logo"  />
                <Link className='title' to='/'>Shane's ReactJS Weather App</Link>
            </div>
            <div>
                <GetWeather className='header-inputbox' layout='input-nav-container' inputStyle='input-nav' weatherStyle='btn-nav' />
            </div>
        </header>
    );
}

export default Header;