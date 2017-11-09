import React, { Component } from 'react';
import logo from '../../assets/logo-01.png';
import Fade from 'react-fade';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <Fade>
            <header>
                <div>&#9776;</div>
                <img src={logo} alt="logo" />
                <a>Login</a>
            </header>
            </Fade>
        )
    }
}

export default Header