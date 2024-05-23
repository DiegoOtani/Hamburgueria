import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserForm from "./UserForm";

const FormRegister = ({setHaveLogin, setUser}) => {
  const navigate = useNavigate();

  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const [ errors, setErrors] = useState([]);
  const [ msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);

    try {
      const response = await axios.post('http://localhost:3000/api/user/register', formData);
      console.log(response);
      setMsg(response.data.msg);
      setTimeout(()=>{
        setUser(response.data.user);
        navigate(-1);
      }, 2000)
    } catch (error) {
      setErrors(error.response.data);
    }

    setFormData({
      name: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: ""
    });
  };

  return <UserForm
    formData= {formData}
    setFormData = {setFormData}
    className="FormRegister"
    onSubmit={handleSubmit}
    title="Registre-se"
    description="Se não possui conta, crie uma abaixo:"
    errors={errors}
    msg={msg}
    submitButton="Registrar"
    secondButton="Já tem login?"
    secondButtonAction={() => setHaveLogin(true)}
  />

};

export default FormRegister;
