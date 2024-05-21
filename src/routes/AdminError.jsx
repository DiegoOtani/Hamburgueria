import React from 'react'
import { Link } from 'react-router-dom'
const AdminError = () => {
  return (
    <div className='content-admin-error'>
      <h1>Usuário não é ADMIN</h1>
      <Link to="/">
        Página Inicial
      </Link>
    </div>
  )
}

export default AdminError
