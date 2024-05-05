import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
                    <Link to="/login?haveLogin=false" className='subscribe'>
                      Inscreva-se
                    </Link>
                    <Link to="/login?haveLogin=true" className='login'>
                      Entrar
                    </Link>
                </div>

            </nav>
        </header>
  </>
}

export default Header
