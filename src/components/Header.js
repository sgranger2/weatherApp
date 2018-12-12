import React from 'react';
import UpdateLocation from './UpdateLocation';
import logo from '../logo.svg';
const Link = require('react-router-dom').Link;

const Header = (props) => {
    return (
        <header className="App-header">
            <div className='logoText' >
                <img src={logo} className="App-logo" alt="logo"  />
                <Link className='title' to='/weatherApp'>Shane's ReactJS Weather App</Link>
            </div>
            <div>
                <UpdateLocation className='header-inputbox' layout='input-nav-container' inputStyle='input-nav' weatherStyle='btn-nav' />
            </div>
        </header>
    );
}

export default Header;