import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login/Login.jsx'
import User from './pages/User/User.jsx'
import Error from './pages/Error.jsx'
import Register from './pages/Register/Register.jsx'
import Product from './pages/Product.jsx'
import UserEdit from './pages/UserEdit/UserEdit.jsx'
import AdminError from './pages/AdminError.jsx'

import { ThemeProvider } from 'styled-components'
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
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/admin/error",
        element: <AdminError />
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
])

import { UserProvider } from './context/userContext.jsx'
import { AdminProvider } from './context/adminContext.jsx'

const theme = {
  primaryColor: '#b3b3b3',
  secondColor: "#000"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <AdminProvider>
          <RouterProvider router={router}/>
        </AdminProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
