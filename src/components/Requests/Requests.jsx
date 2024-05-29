import {  FaHistory, FaRegClock } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md"
import ListItem from '../generalComponents/ListItem'
import { MenuOptions } from "../../styles/MenuOptions";

const Requests = () => {
  return (
    <MenuOptions maior='true'>
      <h1>Pedidos:</h1>
      <ul>
        <ListItem
          linkTo=""
          FaIcon={FaHistory}
          Item="Pedidos anteriores"/>
        <ListItem
          linkTo=""
          FaIcon={FaRegClock}
          Item="Em andamento"/>
        <ListItem
          linkTo=""
          FaIcon={MdDeliveryDining}
          Item="A caminho "/>
        </ul>
    </MenuOptions>
  )
}

export default Requests;

