import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login/Login.jsx'
import User from './routes/User/User.jsx'
import Error from './routes/Error.jsx'
import Register from './routes/Register/Register.jsx'
import UserEdit from './routes/UserEdit/UserEdit.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/user",
        element: <User/>
      },
      {
        path: "/user/edit",
        element: <UserEdit/>
      },
      {
        path: "/admin/register",
        element: <Register />
      }
    ]
  }
])

import { UserProvider } from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>,
)
