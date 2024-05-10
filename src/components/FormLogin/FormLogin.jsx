import { useState } from "react"
import { FaUser,  FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const FormLogin = ({setHaveLogin}) => {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    email:"",
    password:""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataLogin({
      ...dataLogin,
    [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(dataLogin);
      const response = await axios.post('http://localhost:3000/api/user/login', dataLogin);
      console.log(response.data)

      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      console.log(error.response.data)
    }

    setDataLogin({
      email: "",
      password: ""
    })
  }

  return <div className="FormLogin">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <p>Caso já tenha uma conta, faça o login:</p>

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
}

export default FormLogin
