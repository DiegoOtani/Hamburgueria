import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { AdminContext } from '../../context/adminContext';

import axios from 'axios'

import { MdDescription} from "react-icons/md";
import { FaMoneyCheckDollar, FaTag } from "react-icons/fa6";

import "./Register.css"

const Register = () => {
  const { isAdmin } = useContext(AdminContext);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if(!isAdmin) navigate('/admin/error');
  }, [user])

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    file: null
  });
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccess([]);

    const form = new FormData();

    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('file', formData.file);

    try {

      const response = await axios.post("http://localhost:3000/api/product/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setSuccess([response.data]);
    } catch (e) {
      setErrors([e.response.data]);
      console.log(e.response.data);
    }

    setFormData({
      name: "",
      description: "",
      price: "",
      file: null
    })

    document.getElementById('file-input').value = null;
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value.toLowerCase()
    });
  };

  return (
    <div className='product-form'>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de Produtos:</h1>

        {errors.length > 0 && (
          <div className="errors">
            {errors.map((error, index) => (
              <p key={index}> {error} </p>
            ))}
          </div>
        )}

        {success.length > 0 && (
          <div className="success">
            {success.map((error, index) => (
              <p key={index}> {error} </p>
            ))}
          </div>
        )}

        <div className="input-field">
          <input
            key='name'
            type="text"
            name='name'
            placeholder='Nome:'
            value={formData.name}
            onChange={handleInputChange}
          />
          <FaTag className='icon'/>
        </div>

        <div className="input-field">
          <input
            key='description'
            type="text"
            name='description'
            placeholder='Descrição:'
            value={formData.description}
            onChange={handleInputChange}
          />
          <MdDescription className='icon'/>
        </div>

        <div className="input-field">
          <input
            key='price'
            type="text"
            name='price'
            placeholder='Preço:'
            value={formData.price}
            onChange={handleInputChange}
          />
          <FaMoneyCheckDollar className='icon'/>
        </div>

        <div className="input-field">
          <div className='input-image'>
            <h2>Imagem:</h2>
            <input
              key="file"
              id="file-input"
              type="file"
              name='file'
              accept='image/jpeg, image/png image/webp'
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Register
