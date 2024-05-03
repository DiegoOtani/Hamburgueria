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
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul>
          <ListItem
            FaIcon={FaHome}
            Item="Home"
          />
          <ListItem
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
