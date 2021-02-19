import React from 'react'
import './Header.css';

import logo from './logo.png';

const Header = () => {
    return (
        <>
            <header >
                <div>
                    <div className="header">
                        <div className="container">
                            <div className="grid-container" >
                                <div className="item2">
                                    <span class="icon icon-phone"></span>
                                    <p className="header-phone">Televendas: 0800 727 9767</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav>
                <div className="container">
                    <div className="grid-container" >
                        <div className="logo-img item1">
                            <img src={logo} alt="" />
                        </div>
                        <div className="header-menu">
                            <a href="#" target="_blank" rel="noopener noreferrer">QUEM SOMOS</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">COMO FUNCIONA</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">LOJAS</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">MUPAY</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">BAIXE O APP</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
