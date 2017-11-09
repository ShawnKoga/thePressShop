import React, { Component } from 'react';
import logo from '../../assets/logo-01.png';

import './Landing.css';

class Landing extends Component {
    render() {
        return (
            <section>
                <div className="hero-splash">
                    <div className="banner">
                        <img src={logo} alt="app-logofe"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing;