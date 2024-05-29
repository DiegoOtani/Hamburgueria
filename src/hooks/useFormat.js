export default function formatProduct(product) {
  const formattedPrice = product.price.startsWith('R$') ? product.price : `R$ ${product.price}`;
  return {
    ...product,
    name: formatText(product.name),
    description: formatText(product.description),
    price: formattedPrice,
  };
};

const formatText = (text) => {
  if (!text) return '';
  const words = text.split(' ');
  const formattedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return formattedWords.join(' ');
};
