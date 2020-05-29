import React from 'react';
import logo from './../../logo.png';

export default function Header() {
    return (
        <div className="Header">
            <img src={logo}width="50px" height="50px" alt="logo" className="header-logo" />
            <h1 className="header-title">Shelfie</h1>
        </div>
    )
}