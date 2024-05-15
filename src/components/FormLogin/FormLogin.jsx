import { useState } from "react"
import { FaUser,  FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const FormLogin = ({setHaveLogin, setUser}) => {
  const navigate = useNavigate();

  const [dataLogin, setDataLogin] = useState({
    email:"",
    password:""
  });
  const [errors, setErrors] = useState([]);;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataLogin({
      ...dataLogin,
    [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);

    try {
      const response = await axios.post('http://localhost:3000/api/user/login', dataLogin);

      setUser(response.data.user);
      navigate(-1);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    };

    setDataLogin({
      email: "",
      password: ""
    });
  };

  return <div className="FormLogin">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <p>Caso já tenha uma conta, faça o login:</p>

      {errors.length > 0 && (
        <div className="errors">
          {errors.map((error, index) => (
            <p key={index}> {error} </p>
          ))}
        </div>
      )}

      <div className="input-field">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={dataLogin.email}
          onChange={handleInputChange}
        />
        <FaUser className="icon"/>
      </div>

      <div className="input-field">
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={dataLogin.password}
          onChange={handleInputChange}
        />
        <FaLock className="icon"/>
      </div>

      <button type="submit">Entrar</button>

      <button
        type="button"
        onClick={() => setHaveLogin(false)}>
        Registre-se:
      </button>
    </form>
  </div>
};

export default FormLogin;
