import React from 'react'
import {FaSearch} from 'react-icons/fa';
import './Header.css'

const Header = ({setSearch}) => {
  return <>
    <header>
            <nav className="header__navigation">
                <div className="header__search">
                    <FaSearch className="icon"/>
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      id="search-input"
                      type="text"
                      maxLength={800}
                      placeholder="Informe o que procura..."
                    />
                </div>
                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>

            </nav>
        </header>
  </>
}

export default Header
