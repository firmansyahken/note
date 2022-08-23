import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { marked } from 'marked';
import { Fab, List } from '../../components';
import style from "./style.module.css"

const Detail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = location.state

  const [data, setData] = useState("")
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/${params.path}`).then(r => r.text())
    .then(response => {
      setData(marked.parse(response))
    })
  }, [params])
  
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/db.json`).then(r => r.json())
    .then(response => {
      const data = response[params.semester]
      setSubjects(data)
    })
  }, [params])

  return (
    <>
      <div className={style.container}>
        <div className={style.main}>
          <div dangerouslySetInnerHTML={{__html: data}}></div>
        </div>
        <div className={style.side}>
          { subjects.map((subject, index) => {
            return subject.matkul === params.name ? "" : 
            <List key={index} name={subject.matkul} path={subject.path} smt={params.semester}/>
          }) }
          <button onClick={() => navigate("/")}>Kembali</button>
        </div>
      </div>
      <Fab/>
    </>
  )
}

export default Detail