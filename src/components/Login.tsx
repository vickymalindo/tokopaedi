import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import LogoTP from '../images/LogoTP.png'
import style2 from '../styles/Login.module.css'
import style1 from '../styles/Register.module.css'
import Background from './Background'
import TitleForm from './TitleForm'

const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
      })
      console.log(response)
      if (response.status === 200) {
        const token = response.data.token
        localStorage.setItem('token', token)
        localStorage.setItem('username', username)
        navigate('/user')
      }
    } catch (error) {
      setMessage('Username or Password Invalid')
    }
  }

  return (
    <Background>
      <TitleForm name1='LOG' name2='IN' />
      <div className={style2.wrapper_form}>
        {message && <h2 className={style2.message}>{message}</h2>}
        <div className={style2.bg_login_form}>
          <img src={LogoTP} alt="logo" />
          <form className={style1.form} onSubmit={handleLogin}>
            <div className={style1.form_control}>
              <label>Username</label>
              <input type="text" onChange={(e: React.FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)} />
            </div>
            <div className={style1.form_control}>
              <label>Password</label>
              <input type="password" onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
        <div className={style2.account}>
          <h5>belom punya akun?</h5>
          <Link to='/register' className={style2.link}>Sign Up</Link>
        </div>
      </div>
    </Background>
  )
}

export default Login