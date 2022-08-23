import React, { useEffect, useState } from 'react'
import style from "./style.module.css"
import { List, Select, Semester } from "../../components"

const Home = () => {
  const [subjects, setSubjects] = useState([])
  const [semester, setSemester] = useState("smt1")

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/db.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(r => r.json())
    .then(response => {
      const data = response[semester]
      setSubjects(data)
    })
  }, [semester])

  const handleChangeSmt = id => {
    setSemester(id)
  }


  return (
    <>
      <div className={style.container}>
        <Select onChangeSmt={(id) => handleChangeSmt(id)}/>
        <div className={style.main}>
          { subjects.map((subject, index) => {
            return <List key={index} name={subject.matkul} path={subject.path} smt={semester}/>
          }) }
        </div>
        <div className={style.side}>
          <Semester onChangeSmt={(id) => handleChangeSmt(id)}/>
        </div>
      </div>
    </>
  )
}

export default Home