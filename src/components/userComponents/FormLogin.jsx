import { useState } from "react"
import { FaUser,  FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Button from "../generalComponents/Button"
import InputField from "../generalComponents/InputField"
import { Messages } from "../../styles/Messages"

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
      const response = await axios.post('https://apihamburgueria.onrender.com/api/user/login', dataLogin);

      setUser(response.data.user);
      navigate("/");
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

      {errors?.length > 0 && (
        <Messages errors>
          {errors.map((error, index) => (
            <p key={index}> {error} </p>
          ))}
        </Messages>
      )}

      <InputField
        type="email"
        name="email"
        placeholder="E-mail"
        value={dataLogin.email}
        onChange={handleInputChange}
        Icon={FaUser}
      />

      <InputField
        type="password"
        name="password"
        placeholder="Senha"
        value={dataLogin.password}
        onChange={handleInputChange}
        Icon={FaLock}
      />

      <Button children="Entrar" type="submit"/>
      <Button children="Registre-se:" type="button" onClick={() => setHaveLogin(false)}/>
    </form>
  </div>
};

export default FormLogin;
