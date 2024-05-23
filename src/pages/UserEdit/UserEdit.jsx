import { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import "./UserEdit.css"
import UserForm from '../../components/userComponents/UserForm';

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
  const [ msg, setMsg] = useState("");
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
      setMsg (response.data.msg);
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

  return <UserForm
    formData={formData}
    setFormData={setFormData}
    className="User-edit-form"
    onSubmit={handleSubmit}
    title="Edite suas informações:"
    errors={errors}
    msg={msg}
    submitButton="Editar"
    secondButton="Voltar"
    secondButtonAction={handleBack}
  />
}

export default UserEdit
