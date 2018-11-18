/* global chrome */

import React, { Component } from "react"
import Month from "./components/Month"
import Year from "./components/Year"
import Draft from "./components/Draft"
import Calendar from "./components/Project"

class App extends Component {
  constructor() {
    super()
    this.state = {
      view: "month",
      calendar: null,
      month: new Date().getMonth()
    }
    this.edit = this.edit.bind(this)
    this.getProject = this.getProject.bind(this)
    this.chromeSave = this.chromeSave.bind(this)
    this.current = null
    this.buttons = (
      <div className="button-container">
      <div className="calendarButton"
        onClick={() => {
          let newM = this.state.month - 1
          this.setState({ month: newM })
        }}
      >
        <span>{"<"}</span>
      </div> 
      <div className="calendarButton"
        onClick={() => {
          let newM = this.state.month + 1
          this.setState({ month: newM })
        }}
      >
        <span>{">"}</span>
      </div>
      </div>)
    this.getProject()
  }
  chromeSave() {
    chrome.storage.local.set({ KTProject: this.state.calendar.export() })
  }
  edit(month, day) {
    this.setState({ view: "edit" })
    let value = this.state.calendar.getDay(month, day)
    this.current = (
      <Draft
        chromeSave={this.chromeSave}
        value={value}
        save={this.state.calendar.curryAddToDate(month)(day)}
        date={`${+month + 1}/${+day + 1}`}
      />
    )
  }
  getProject() {
    chrome.storage.local.get(["KTProject"], result => {
      if (result.KTProject) {
        let temp = new Calendar("KTProject")
        let cal = temp.import(result.KTProject)
        this.setState({ calendar: cal })
      } else if (!result.KTProject) {
        this.setState({ calendar: new Calendar("KTProject") })
      }
    })
  }
  render() {
    if (!this.state.calendar) {
      return null
    }
    return (
      <div className="App">
        <div>
        {this.state.view === "edit" ? (
        <div 
            className="calendarButton"
            onClick={() => {
              this.current = null
              this.setState({ view: "month" })
            }}>
            <span>{"<-"}</span>
          </div>) : null}
        </div>
        {this.state.view === "month" ? (
          <Month
            month={this.state.calendar.getMonth(this.state.month)}
            buttons={this.buttons}
            mindex={this.state.month}
            edit={this.edit}
          />
        ) : null}
        {this.state.view === "edit" ? this.current : null}
      </div>
    )
  }
}

export default App
