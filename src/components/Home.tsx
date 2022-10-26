import React from 'react'
import style from '../styles/Home.module.css'
import LogoTP from '../images/LogoTP.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  React.useEffect(() => {
    setTimeout(() => {
      navigate('login')
    }, 3000);
  })
  return (
    <div className={style.home}>
      <div className={style.home_bg}>
        <div className={style.container}>
          <img src={LogoTP} alt="gambarLogo" className={style.logo_img} />
          <div>
            <h3 className={style.logo_name}>TOKOPAEDI</h3>
            <div className={style.line}></div>
          </div>
        </div>
      </div>
      {/* upper */}
      <div className={style.dot_upper_large}></div>
      <div className={style.dot_upper_medium}></div>
      <div className={`${style.dot_upper_medium} ${style.another}`}></div>
      <div className={style.dot_upper_small}></div>
      <div className={`${style.dot_upper_small} ${style.another}`}></div>
      {/* Bottom */}
      <div className={style.dot_bottom_large}></div>
      <div className={style.dot_bottom_medium}></div>
      <div className={`${style.dot_bottom_medium} ${style.another}`}></div>
      <div className={style.dot_bottom_small}></div>
    </div>
  )
}

export default Home