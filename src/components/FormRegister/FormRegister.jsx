import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser,  FaLock } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GrRefresh } from "react-icons/gr";
import axios from "axios";

const FormRegister = ({setHaveLogin}) => {
  const navigate = useNavigate();
  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    adress: "",
    password: "",
    confirmPassword: ""
  });

  const [ errors, setErrors] = useState([]);
  const [ success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    setSuccess("");

    try {
      const response = await axios.post('http://localhost:3000/api/user/register', formData);
      setSuccess(response.data);
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    } catch (error) {
      setErrors(error.response.data);
    }

    console.log(errors);

    setFormData({
      name: "",
      email: "",
      adress: "",
      password: "",
      confirmPassword: ""
    });
  };

  return <div className="FormRegister">
    <form onSubmit={handleSubmit}>
      <h1>Registre-se</h1>
      <p>Se não possui contar crie uma abaixo:</p>

      {success &&(
        <div className="success">
          <p>{success}</p>
        </div>
      )}

      {errors.length > 0 && (
        <div className="errors">
          {errors.map((error, index) => (
            <p key={index}> {error} </p>
          ))}
        </div>
      )}

      <div className="input-field">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleInputChange}
        />
        <FaUser className="icon"/>
      </div>

      <div className="input-field">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
        />
        <MdEmail className="icon"/>
      </div>

      <div className="input-field">
        <input
          type="text"
          name="adress"
          placeholder="Endereço"
          value={formData.adress}
          onChange={handleInputChange}
        />
        <FaHouse className="icon"/>
      </div>

      <div className="input-field">
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleInputChange}
        />
        <FaLock className="icon"/>
      </div>

      <div className="input-field">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repetir senha"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <GrRefresh className="icon"/>
      </div>

      <button type="submit">Registrar</button>
      <button
        type="button"
        onClick={() => setHaveLogin(true)}>
          Já tem login?
        </button>

    </form>

  </div>
};

export default FormRegister;
