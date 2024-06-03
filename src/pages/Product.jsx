import { useParams, useNavigate } from 'react-router-dom';
import { Messages } from '../styles/Messages';
import axiosInstance from '../helpers/axiosInstance';
import useAxios from '../hooks/useAxios';
import formatProduct from '../hooks/useFormat';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  var [ product, loading, error] = useAxios({
    axiosInstance: axiosInstance,
    method: 'get',
    url: `/api/product/${id}`
  })
  console.log(product);

  const handleBuyClick = () => {
    // Lógica para comprar o produto
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if(error !== "") {
    return <Messages errors medium>
        <p> {error} </p>
      </Messages>
    }

  if (!product) {
    return (
      <div className="error">
        <h1>Ocorreu um erro ao carregar o produto. Por favor, tente novamente mais tarde.</h1>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
    );
  }

  product = formatProduct(product);

  return (
    <div className="products">
      <div className="products__info">
        <h1 className="name">{product.name}</h1>
        <div className="info">
          <img src={product.urlImg} alt={product.name} />
          <p className="description">{product.description}</p>
          <span>{product.price}</span>
          <button className="buy" onClick={handleBuyClick}>
            Comprar
          </button>
          <button className="back" onClick={() => navigate(-1)}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
