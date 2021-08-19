import React from 'react';
import logo from '../images/logo.svg'

function Header () {
    return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип с белым текстом Место Россия"
      />
    </header>
    )
}

export default Header;