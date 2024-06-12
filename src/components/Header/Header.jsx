import {FaSearch} from 'react-icons/fa';
import LoginLink from '../generalComponents/LoginLink';
import './Header.css'

import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const Header = ({setSearch}) => {
  const { user, setUser} = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  }

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
        <LoginLink to="/product/register" text="Cadastar Produto"/>
        {user? (
          <HeaderLogout handleLogout={handleLogout}/>
        ) : (
          <HeaderLogin/>
        )}
      </nav>
    </header>
  </>
}

const HeaderLogout = ({ handleLogout }) => {
  return (
    <div className="header__logout">
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

const HeaderLogin = () => {
  return <div className="header__login">
    <LoginLink to="/login?haveLogin=false" text="Registre-se"/>
    <LoginLink to="/login?haveLogin=true" text="Login"/>
  </div>
}

export default Header
