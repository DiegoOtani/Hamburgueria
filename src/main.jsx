import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login/Login.jsx'
import User from './routes/User/User.jsx'
import Error from './routes/Error.jsx'
import Register from './routes/Register/Register.jsx'
import UserEdit from './routes/UserEdit/UserEdit.jsx'
import AdminError from './routes/AdminError.jsx'

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
        path: "/product/register",
        element: <Register />
      },
      {
        path: "/admin/error",
        element: <AdminError />
      }
    ]
  }
])

import { UserProvider } from './context/userContext.jsx'
import { AdminProvider } from './context/adminContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <AdminProvider>
        <RouterProvider router={router}/>
      </AdminProvider>
    </UserProvider>
  </React.StrictMode>,
)
