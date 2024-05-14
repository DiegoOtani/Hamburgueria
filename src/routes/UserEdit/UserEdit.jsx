import { useContext} from 'react'
import { UserContext } from '../../context/userContext';
import { FaUser,  FaLock } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GrRefresh } from "react-icons/gr";
import "./UserEdit.css"

const UserEdit = () => {
  const {user} = useContext(UserContext);

  return (
    <div className='User-edit-form'>
      <form>
        <h1>Edite suas informações:</h1>
        <InputField type="text" placeholder="Nome:" value={user.name} name="name" Icon={FaUser}/>
        <InputField type="email" placeholder="E-mail:" value={user.email} name="email" Icon={MdEmail}/>
        <InputField type="text" placeholder="Endereço:" value={user.adress} name="adress" Icon={FaHouse}/>
        <InputField type="password" placeholder="Senha:" name="password" Icon={FaLock}/>
        <InputField type="password" placeholder="Confirmar senha:" name="confirmPassword"
          Icon={GrRefresh}
        />
        <button
          type='submit'>
            Editar
        </button>
      </form>
    </div>
  )
}

const InputField = ({type, placeholder, value, name, Icon}) => {
  return (
    <div className="input-field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
      />
      <Icon className='icon'/>
    </div>
  )
};

export default UserEdit
