import { useState } from "react"
import { useLocation } from "react-router-dom"
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

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className='Login'>
      {user?(
        <LoggedIn handleLogout={handleLogout}/>
      ): (
      haveLogin
        ? <FormLogin setHaveLogin={setHaveLogin}/>
        : <FormRegister setHaveLogin={setHaveLogin}
      />
      )}
    </div>
  )
}

const LoggedIn = ({ handleLogout}) => {
  return (
    <div className="logout">
      <h2>Usuário já está logado.</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Login