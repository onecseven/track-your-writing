import React, { Component } from "react"
import Month from "./components/Month"
import Year from "./components/Year"
import Draft from "./components/Draft"
import Project from "./components/Project"

class App extends Component {
  constructor() {
    super()
    this.writing = new Project("FUNDIO")
    this.writing.getCurrentMonth();
    this.writing.addToDate(11, 'hi')
  }
  render() {
    return (
      <div className="App">
        {/* <Month month={this.writing.getCurrentMonth()} /> */}
        <Draft />
      </div>
    )
  }
}

export default App
