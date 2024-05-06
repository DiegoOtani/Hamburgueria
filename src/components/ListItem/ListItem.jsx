import { Link } from "react-router-dom"

const ListItem = ({ FaIcon, Item, linkTo }) => {
  return (
    <li>
      <Link to={linkTo}>
        <FaIcon className="icon"/>
        <span>{Item}</span>
      </Link>
  </li>
  )
}

export default ListItem
