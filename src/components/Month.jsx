import React, { Component } from "react"

const Month = ({ month }) => {
  return (
    <div>
      {month.map((elem, index) => {
        let check = "x"
        if (elem !== null) {
          check = "y"
        }
        return (<div>
          <span>{index}</span>
          {check}
        </div>)
      })}
    </div>
  )
}

export default Month