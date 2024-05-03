import React from 'react'

const ListItem = ({ FaIcon, Item }) => {
  return (
    <li>
      <a>
        <FaIcon className="icon"/>
        <span>{Item}</span>
      </a>
  </li>
  )
}

export default ListItem
