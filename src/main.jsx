import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Error from './routes/Error.jsx'

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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
