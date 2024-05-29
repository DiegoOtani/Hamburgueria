import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import formatProduct from '../hooks/useFormat';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const requestApi = async () => {
      try {
        const response = await axios.get(`https://apihamburgueria.onrender.com/api/product/${id}`);
        const formattedProduct = formatProduct(response.data);
        setProduct(formattedProduct);
      } catch (error) {
        console.error(error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    requestApi();
  }, [id]);

  const handleBuyClick = () => {
    // Lógica para comprar o produto
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (!product) {
    return (
      <div className="error">
        <h1>Ocorreu um erro ao carregar o produto. Por favor, tente novamente mais tarde.</h1>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="products">
      <div className="products__info">
        <h1 className="name">{product.name}</h1>
        <div className="info">
          <img src={product.urlImg} alt={product.name} />
          <h2 className="description">{product.description}</h2>
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
