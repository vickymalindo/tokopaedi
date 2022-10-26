import React from 'react'
import { useNavigate } from 'react-router-dom'
import Product from './Product'

const User = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  if (!token) {
    console.log('null')
    // navigate('/login')
    return (
      <h1>asdasdasd</h1>
    )
  }
  return (
    <div>
      <Product />
    </div>
  )
}

export default User