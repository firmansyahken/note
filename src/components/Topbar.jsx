import React from 'react'
import { Link } from "react-router-dom"
import { MusicIcon } from "../assets"
import sound from "../assets/lofi.mp3"
import style from "../styles/topbar.module.css"

const Topbar = () => {
  
  const music = new Audio(sound)
  music.loop = true
  
  const handleMusic = () => {
    if(music.paused) {
      music.play()
    } else {
      music.pause()
    }
  }

  return (
    <div className={style.topbar}>
      <div className={style.container}>
        <h1><Link to="/">Note</Link></h1>
        <div className={style.button_active}>
          <img onClick={() => handleMusic()} src={MusicIcon} alt="icon"/>
        </div>
      </div>
    </div>
  )
}

export default Topbar