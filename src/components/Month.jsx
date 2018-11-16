import React, { Component } from "react"

/*
        <Draft title=/>
*/

class Month extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <h1>Month</h1>
        <br/>
        {this.props.month.map((elem, index) => {
          return (
            <div key={index} className="calendarBox" onClick={() => {
              this.props.edit(new Date().getMonth(), index)}}>
              {+index+1}
              {elem !== null ? "y" : "x"}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Month
