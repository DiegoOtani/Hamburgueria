import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

const Products = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [prodInfo, setProdInfo] = useState("");

  const requestApi = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      const formattedProducts = formatProducts(response.data);
      setProducts(formattedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestApi();
  }, []);

  const formatProducts = (products) => {
    return products.map((product) => formatProduct(product));
  };

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

  const filteredProds = search.length > 0
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  if (prodInfo === "") {
    return (
      <div className="products">
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
                {filteredProds.map((product, index) => (
                  <ListItemProd
                    key={index}
                    name={product.name}
                    price={product.price}
                    urlImg={product.urlImg}
                    setProdInfo={setProdInfo}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <h1 className="not-found">Produto não encontrado</h1>
        )}
      </div>
    );
  }

  const selectedProd = products.find((product) => product.name === prodInfo);

  return (
    <div className="products">
      <div className="products__info">
        <h1 className="name">{selectedProd.name}</h1>
        <div className="info">
          <ListItemProd
            urlImg={selectedProd.urlImg}
            description={selectedProd.description}
            price={selectedProd.price}
          />
          <button className="buy">Comprar</button>
          <button className="back" onClick={() => setProdInfo("")}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

const ListItemProd = ({ urlImg, name, description, price, setProdInfo }) => {
  return (
    <a onClick={() => setProdInfo(name)}>
      <img src={urlImg} alt={name} />
      <span>{name}</span>
      <span className="description">{description}</span>
      <span>{price}</span>
    </a>
  );
};

export default Products;
