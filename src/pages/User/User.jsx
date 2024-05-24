import {useContext, useEffect, useState} from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './User.css'

const User = () => {
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      navigate('/login?haveLogin=true');
    }
  }, [user, navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = async() => {
    try {
      const response = await axios.delete(`https://apihamburgueria.onrender.com/api/user/delete/${user._id}`);
      console.log(response.data);
      alert(response.data);
      setUser(null);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='User'>
      {user && <UserInfo user={user}/>}
      <div className="action-buttons">
        <Link
          to="/user/edit"
          className='edit'>
          Editar
        </Link>
        <button onClick={handleBack}>
          Voltar
        </button>
        <button
          className='delete'
          onClick={handleDelete}>
          Excluir
        </button>
      </div>
    </div>
  )
};

const UserInfo = ({user}) => {
  if(!user) return null;

  return (
    <div className='user__info'>
      <h1>Informações do Usuário:</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Endereço: {user.address}</p>
    </div>
  )
};

export default User;