import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import axiosInstance from "../../helpers/axiosInstance";
import formatProduct from "../../hooks/useFormat";
import { Messages } from "../../styles/Messages";
import "./Products.css";

const Products = ({ search }) => {

  var [ products, loading, error ] = useAxios({
    axiosInstance: axiosInstance,
    method: 'get',
    url:'/api/products',
  })
  console.log(error)
  products = products.map((product) => formatProduct(product));

  if (loading) {
    return <div>Carregando...</div>;
  }

  if(error !== "") {
  return <Messages errors medium>
      <p> {error} </p>
    </Messages>
  }

  const filteredProds = search.length > 0
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  return (
    <>
      <h1 className="title">Verifique nosso cardápio:</h1>
      {filteredProds.length > 0 ? (
        <div className="products__content">
          <div className="products__info">
            {search !== "" ? (
              <h1>Produtos encontrados:</h1>
            ) : (
              <div>
                <h1>Produtos disponíveis:</h1>
              </div>
            )}
          </div>
          <div className="products__scroll-container">
            <div className="offer__list-item">
              {filteredProds.map((product) => (
                <ListItemProd
                  key={product._id}
                  {...product}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1 className="not-found">Produto não encontrado</h1>
      )}
    </>
  );
};

const ListItemProd = ({ _id, urlImg, name, price }) => {
  return (
    <Link to={`/product/${_id}`}>
      <img src={urlImg} alt={name} />
      <span>{name}</span>
      <span>{price}</span>
    </Link>
  );
};

export default Products;
