import React from 'react'
import style from './loader.module.css'

const Loader = () => {
  return (
    <div className={style.loading}>
      <div className={style.spinner}></div>
      <p>Loading...</p>
    </div>
  )
}

export default Loader