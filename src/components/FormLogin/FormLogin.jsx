import { useState } from "react"
import { FaUser,  FaLock } from "react-icons/fa"

const FormLogin = ({setHaveLogin}) => {

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(dataLogin);

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
