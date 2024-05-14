import {useContext, useEffect} from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom';
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
        <ActionButton
          buttonName="Editar"
          className="edit"
        />
        <ActionButton
          buttonName="Excluir"
          className="delete"
        />
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

const ActionButton = ({handleClick, buttonName, className}) => {
  return <button className={className} onClick={handleClick}>{buttonName}</button>
}

export default User;