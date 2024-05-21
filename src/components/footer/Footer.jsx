import ListItem from '../ListItem/ListItem'
import Requests from '../Requests/Requests'

import { FaHome, FaUser, FaShoppingBasket, FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <Routes />
      <div>
        <Requests/>
      </div>
      <Contacts />
    </footer>
  )
}

const Routes = () => {
  return <div className='routes-menu'>
    <h1>Menus:</h1>
    <ul>
      <ListItem FaIcon={FaHome} Item="Página inicial" linkTo="/"/>
      <ListItem FaIcon={FaUser} Item="Meu Perfil" linkTo="/user"/>
      <ListItem FaIcon={FaShoppingBasket} Item="Meus Pedidos" linkTo=""/>
    </ul>
  </div>
}

const Contacts = () => {
  return <div className="contacts-menu">
    <h1>Contato:</h1>
    <ul>
      <ListItem FaIcon={MdEmail} Item="diegootanidev@gmail.com" linkTo="mailto:diegootanidev@gmail.com"/>
      <ListItem FaIcon={FaLinkedin} Item="Linkedin" linkTo="https://www.linkedin.com/in/diego-otani-361254277/"/>
      <ListItem FaIcon={FaGithub} Item="GitHub" linkTo="https://github.com/DiegoOtani"/>
    </ul>
  </div>
}
export default Footer
