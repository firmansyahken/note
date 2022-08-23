import React, { useState } from 'react'
import { AnimeImage } from '../assets'
import style from "../styles/fab.module.css"

const Fab = () => {
  return (
    <div className={style.fab}>
        <img src={AnimeImage} alt="niconi"/>
        <div className={style.message}>
            <p>Ganbatte Yo! <br/><b>Oniichan</b></p>
        </div>
    </div>
  )
}

export default Fab