import ListItem from '../generalComponents/ListItem'

import { FaHome, FaUser, FaShoppingBasket, FaLinkedin, FaGithub, FaHistory, FaRegClock } from 'react-icons/fa'
import { MdEmail, MdDeliveryDining } from 'react-icons/md'
import { MenuOptions } from '../../styles/MenuOptions'

const Routes = () => {
  return <MenuOptions>
    <h1>Menus:</h1>
    <ul>
      <ListItem FaIcon={FaHome} Item="Página inicial" linkTo="/"/>
      <ListItem FaIcon={FaUser} Item="Meu Perfil" linkTo="/user"/>
      <ListItem FaIcon={FaShoppingBasket} Item="Meus Pedidos" linkTo=""/>
    </ul>
  </MenuOptions>
}

const Requests = () => {
  return <MenuOptions>
    <h1>Pedidos:</h1>
    <ul>
      <ListItem FaIcon={FaHistory} Item="Pedidos anteriores" linkTo=""/>
      <ListItem FaIcon={FaRegClock} Item="Em andamento" linkTo=""/>
      <ListItem FaIcon={MdDeliveryDining} Item="A caminho" linkTo=""/>
    </ul>
  </MenuOptions>
}

const Contacts = () => {
  return <MenuOptions>
    <h1>Contato:</h1>
    <ul>
      <ListItem FaIcon={MdEmail} Item="diegootanidev@gmail.com" linkTo="mailto:diegootanidev@gmail.com"/>
      <ListItem FaIcon={FaLinkedin} Item="Linkedin" linkTo="https://www.linkedin.com/in/diego-otani-361254277/"/>
      <ListItem FaIcon={FaGithub} Item="GitHub" linkTo="https://github.com/DiegoOtani"/>
    </ul>
  </MenuOptions>
}

const Footer = () => {
  return (
    <footer>
      <Routes />
      <Requests/>
      <Contacts />
    </footer>
  )
}

export default Footer
