import { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { FaUser,  FaLock } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GrRefresh } from "react-icons/gr";
import axios from 'axios';
import "./UserEdit.css"

const UserEdit = () => {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);
  const [ formData, setFormData ] = useState({
    name: user.name,
    email: user.email,
    address:user.address,
    password: "",
    confirmPassword: ""
  });
  const [ errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]:value});
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);

    setErrors([]);

    try {
      const response = await axios.put(`http://localhost:3000/api/user/edit/${user._id}`, formData);
      console.log(response.data);
      setUser(response.data.user);
      setFormData({
        name: "",
        email: "",
        address: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      setErrors(error.response.data);
    }
  }

  return (
    <div className='User-edit-form'>
      <form onSubmit={handleSubmit}>
        <h1>Edite suas informações:</h1>

        {errors.length > 0 && (
        <div className="errors">
          {errors.map((error, index) => (
            <p key={index}> {error} </p>
          ))}
        </div>
      )}

        <InputField
          type="text"
          placeholder="Nome:"
          value={formData.name}
          name="name" Icon={FaUser}
          onChange={handleChange}
        />
        <InputField
          type="email"
          placeholder="E-mail:"
          value={formData.email}
          name="email"
          Icon={MdEmail}
          onChange={handleChange}
        />
        <InputField
          type="text"
          placeholder="Endereço:"
          value={formData.address}
          name="address"
          Icon={FaHouse}
          onChange={handleChange}
        />
        <InputField
          type="password"
          placeholder="Senha:"
          name="password"
          value={formData.password}
          Icon={FaLock}
          onChange={handleChange}
        />
        <InputField
          type="password"
          placeholder="Confirmar senha:"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          Icon={GrRefresh}
        />
        <button
          type='submit'>
            Editar
        </button>
        <button onClick={handleBack}>
          Voltar
        </button>
      </form>
    </div>
  )
}

const InputField = ({type, placeholder, value, name, Icon, onChange}) => {
  return (
    <div className="input-field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      <Icon className='icon'/>
    </div>
  )
};

export default UserEdit
