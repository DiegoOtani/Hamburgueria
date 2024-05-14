import {useContext, useEffect} from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate, Link } from 'react-router-dom';
import './User.css'

const User = () => {
  const {user} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      navigate('/login?haveLogin=true');
    }
  }, [user, navigate]);

  return (
    <div className='User'>
      {user && <UserInfo user={user}/>}
      <div className="action-buttons">
        <Link
          to="/user/edit"
          className='edit'>
          Editar
        </Link>
        <Link
          to="/user/delete"
          className='delete'>
          Excluir
        </Link>
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