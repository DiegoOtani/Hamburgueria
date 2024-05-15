import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import FormRegister from "../../components/FormRegister/FormRegister"
import FormLogin from "../../components/FormLogin/FormLogin"

import { useContext } from "react"
import { UserContext } from "../../context/userContext"

import "./Login.css"

const Login = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [ haveLogin, setHaveLogin ] = useState( searchParams.get('haveLogin') === 'true');

  const {user, setUser} = useContext(UserContext);

  return (
    <div className='Login'>
      {user?(
        <LoggedIn />
      ): (
      haveLogin
        ? <FormLogin setHaveLogin={setHaveLogin} setUser={setUser}/>
        : <FormRegister setHaveLogin={setHaveLogin} setUser={setUser}
      />
      )}
    </div>
  )
}

const LoggedIn = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
  };

  const handleHome = () => {
    navigate("/");
  };


  return (
    <div className="logout">
      <h2>Usuário já está logado.</h2>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleHome}>
        Página inicial
      </button>
    </div>
  )
}

export default Login