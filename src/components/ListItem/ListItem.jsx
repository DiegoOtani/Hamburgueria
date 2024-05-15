import { Link } from "react-router-dom";

const ListItem = ({ FaIcon, Item, linkTo }) => {
  const isMailto = linkTo.startsWith('mailto:');
  return (
    <li>
      {isMailto ? (
        <a href={linkTo}>
          <FaIcon className="icon" />
          <span>{Item}</span>
        </a>
      ) : (
        <Link to={linkTo}>
          <FaIcon className="icon" />
          <span>{Item}</span>
        </Link>
      )}
    </li>
  );
};

export default ListItem;
