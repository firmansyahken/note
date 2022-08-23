import React from 'react'
import style from "../styles/list.module.css"
import { useNavigate } from "react-router-dom"

const List = (props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    const data = {
      "name": props.name,
      "path": props.path,
      "semester": props.smt
    }
    navigate("/detail", {state:data})
  }
  return (
    <div className={style.list}>
        <p onClick={handleClick}>{props.name}</p>
    </div>
  )
}

export default List