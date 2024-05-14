import {useContext, useEffect, useState} from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './User.css'

const User = () => {
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const [ errors, setErrors] = useState([]);

  useEffect(() => {
    if(!user) {
      navigate('/login?haveLogin=true');
    }
  }, [user, navigate]);

  const handleDelete = async() => {
    setErrors([]);

    try {
      const response = await axios.delete(`http://localhost:3000/api/user/delete/${user._id}`);
      console.log(response.data);
      alert(response.data);
      setUser(null);
      navigate('/');
    } catch (error) {
      setErrors(error);
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
      <p>Endereço: {user.adress}</p>
    </div>
  )
};

export default User;