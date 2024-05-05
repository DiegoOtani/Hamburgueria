import { useState } from "react"
import { useLocation } from "react-router-dom"
import FormRegister from "../../components/FormRegister/FormRegister"
import FormLogin from "../../components/FormLogin/FormLogin"

import "./Login.css"

const Login = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [haveLogin, setHaveLogin] = useState( searchParams.get('haveLogin') === 'true');

  return <div className='Login'>
    {haveLogin
      ? <FormLogin setHaveLogin={setHaveLogin}/>
      : <FormRegister setHaveLogin={setHaveLogin}
    />}
  </div>
}

export default Login