import React, { useState } from 'react'
import axios from 'axios'
import "./Register.css"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    file: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('file', formData.file);

    try {

      const response = await axios.post("http://localhost:3000/admin/register", form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  return (
    <div className='product-form'>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de Produtos:</h1>
        <input
          key='name'
          type="text"
          name='name'
          placeholder='Nome:'
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          key='description'
          type="text"
          name='description'
          placeholder='Descrição:'
          value={formData.description}
          onChange={handleInputChange}
        />
        <input
          key='price'
          type="text"
          name='price'
          placeholder='Preço:'
          value={formData.price}
          onChange={handleInputChange}
        />
        <div className='input-image'>
          <h2>Imagem:</h2>
          <input
            key="file"
            type="file"
            name='file'
            accept='image/jpeg, image/png'
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Register
