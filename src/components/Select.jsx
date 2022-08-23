import React from 'react'
import style from "../styles/select.module.css"

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

const Select = (props) => {
  return (
    <select className={style.select} onChange={(e) => props.onChangeSmt(e.target.value)}>
        { semesters.map((semester, index) => {
            return <option key={index} value={semester.path}>{semester.name}</option>
        })}
    </select>
  )
}

export default Select