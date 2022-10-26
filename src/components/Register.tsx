import React from 'react'
import LogoTP from '../images/LogoTP.png'
import { BsArrowBarRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import style from '../styles/Register.module.css'
import Background from './Background'
import TitleForm from './TitleForm'

const Register = () => {
  const handleRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('klik')
  }

  return (
    <Background>
      <Link to='/login' className={style.login}>
        <h3>Login</h3>
        <BsArrowBarRight />
      </Link>
      <TitleForm name1='SIGN' name2='UP' />
      <div className={style.bg_form}>
        <img src={LogoTP} alt="logo" />
        <form className={style.form} onSubmit={handleRegister}>
          <div className={style.form_control}>
            <label>Name</label>
            <input type="text" />
          </div>
          <div className={style.form_control}>
            <label>Username</label>
            <input type="text" />
          </div>
          <div className={style.form_control}>
            <label>Email</label>
            <input type="text" />
          </div>
          <div className={style.form_control}>
            <label>Password</label>
            <input type="password" />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </Background>
  )
}

export default Register