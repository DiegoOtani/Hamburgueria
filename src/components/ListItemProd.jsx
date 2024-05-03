const ListItemProd = ({urlImg, name, description, price, setProdInfo}) => {
  return (
    <a
      onClick={() => setProdInfo(name)}
    >
      <img src={urlImg} alt={name} />
      <span>{name}</span>
      <span className='description'>{description}</span>
      <span>{price}</span>
    </a>
  )
}

export default ListItemProd