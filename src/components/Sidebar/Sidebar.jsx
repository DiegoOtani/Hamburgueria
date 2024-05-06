import React from 'react'
import logo from '../../img/logo.webp'
import { FaHome, FaUser } from 'react-icons/fa'
import ListItem from '../ListItem/ListItem';
import Requests from '../Requests/Requests';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <nav className="sidebar__navigation">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <ListItem
            linkTo="/"
            FaIcon={FaHome}
            Item="Home"
          />
          <ListItem
          linkTo="/user"
            FaIcon={FaUser}
            Item="Meu Perfil"
          />
        </ul>
      </nav>
      <Requests/>
    </div>
  )
}

export default Sidebar
