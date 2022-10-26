import React from 'react'
import style from '../styles/TitleForm.module.css'

interface TitleFormProps {
  name1: string,
  name2: string
}

const TitleForm = ({ name1, name2 }: TitleFormProps) => {
  return (
    <div className={style.wrapper_title}>
      <h2 className={style.sign}>{name1}</h2>
      <h2 className={style.up}>{name2}</h2>
    </div>
  )
}

export default TitleForm