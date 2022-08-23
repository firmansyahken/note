import React from 'react'
import style from "../styles/semester.module.css"

const semesters = [
    {
        "name": "Semester 1",
        "path": "smt1",
    },
    {
        "name": "Semester 2",
        "path": "smt2",
    },
    {
        "name": "Semester 3",
        "path": "smt3",
    },
    {
        "name": "Semester 4",
        "path": "smt4",
    },
    {
        "name": "Semester 5",
        "path": "smt5",
    },
    {
        "name": "Semester 6",
        "path": "smt6",
    },
    {
        "name": "Semester 7",
        "path": "smt-7",
    },
    {
        "name": "Semester 8",
        "path": "smt-8",
    },
]

const Semester = (props) => {
  return (
    <div className={style.semester}>
        <div className={style.container}>
            <ul>
                { semesters.map((smt, index) => {
                    return <li key={index} onClick={() => props.onChangeSmt(smt.path)}><a>{smt.name}</a></li>
                }) }
            </ul>
        </div>
    </div>
  )
}

export default Semester