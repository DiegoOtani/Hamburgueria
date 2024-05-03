import { FaShoppingBasket, FaHistory, FaRegClock, FaAddressCard } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import ListItem from "../ListItem/ListItem";
import './Requests.css'

const Requests = ({ requests }) => {
  return (
    <div className='requests'>
      <div className="requests__logo">
        <FaShoppingBasket className="icon" />
        <h2>Meus Pedidos:</h2>
      </div>
      <div className="requests__content">
        <ul>
          <ListItem
            FaIcon={FaHistory}
            Item="Pedidos anteriores"/>
          <ListItem
            FaIcon={FaRegClock}
            Item="Em andamento"/>
          <ListItem
            FaIcon={MdDeliveryDining}
            Item="A caminho "/>
        </ul>
        <a className="address">
          <FaAddressCard/>
          <span>Cadastrar Endereço</span>
        </a>

      </div>
    </div>
  )
}

export default Requests;

