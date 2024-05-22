import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Product = () => {
  const { id } = useParams();
  const [ product, setProduct ] = useState(null);
  const navigate = useNavigate();

  const requestApi = async() => {
    try {
      const response = await axios.get(`http://localhost:3000/api/product/${id}`);
      console.log(response.data);
      const formattedProduct = formatProduct(response.data);
      setProduct(formattedProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestApi();
  }, []);

  const formatProduct = (product) => {
    const formattedPrice = product.price.startsWith("R$")
      ? product.price
      :`R$ ${product.price}`
    return {
      ...product,
      name: formatText(product.name),
      description: formatText(product.description),
      price: formattedPrice,
    };
  };

  const formatText = (text) => {
    if (text) {
      const words = text.split(" ");
      const formattedWords = words.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
      });
      return formattedWords.join(" ");
    }
    return "";
  };

  if(!product){
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className="products">
      {!product
        ? <div className="loading">
            <h1>Loading...</h1>
          </div>
        : <div className="products__info">
          <h1 className="name">{product.name}</h1>
          <div className="info">
            <img src={product.urlImg} alt={product.name} />
            <h2 className="description">{product.description}</h2>
            <span>{product.price}</span>
            <button className="buy">Comprar</button>
            <button className="back" onClick={() => navigate(-1)}>
              Voltar
            </button>
          </div>
        </div>
      }

    </div>
  );
}

export default Product;
