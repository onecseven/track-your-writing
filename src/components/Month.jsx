import React, { Component } from "react"
class Month extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
    return (
      <div>
        <h1>{months[this.props.mindex]}</h1>
        {this.props.buttons}
        <div className="container">
          <br />
          {this.props.month.map((elem, index) => {
            let turn = "x"
            let classes = "calendarBox"
            if (elem) {
              turn = elem.split(" ").length
              if (elem.length > 999) {
                classes += " finished "
              } else [
                classes += " unfinished"
              ]
            }
            if (index === new Date().getDate() && this.props.mindex === new Date().getMonth()){
              classes += " today"
            }
            return (
              <div
                key={index}
                className={classes}
                onClick={() => {
                  this.props.edit(this.props.mindex, index)
                }}
              >
                <span>{+index + 1}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Month
