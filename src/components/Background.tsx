import React, { ReactNode } from 'react'
import style from '../styles/Background.module.css'

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className={style.register_bg}>
      <div className={style.container}>
        {children}
      </div>
    </div>
  )
}

export default Background