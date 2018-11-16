import React, { Component } from "react"
import Month from "./components/Month"
import Year from "./components/Year"
import Draft from "./components/Draft"
import Calendar from "./components/Project"

class App extends Component {
  constructor() {
    super()
    this.state = {
      /**
       * @type {view} can be 'month', 'year', or 'edit'
       */
      view: "month",
    }
    this.writing = new Calendar("FUNDIO")
    this.writing.addToDate(10,10, 'hi')
    this.edit = this.edit.bind(this)
    this.genRender = this.genRender.bind(this)
    this.current = null;
  }
  edit(month, day){
    this.setState({view: "edit"})
    let value = this.writing.getDay(month, day)
    this.current = (<Draft value={value} save={this.writing.curryAddToDate(month)(day)} date={`${+month+1}/${+day+1}`}/>)
  }
  genRender(){
    if (this.state.view === 'month'){
      return (<Month month={this.writing.getMonth(new Date().getMonth())} edit={this.edit}/>)
    } else if (this.state.view === 'edit'){
      return (this.current)
    }
  }
  render() {
    return (
      <div className="App">
      <div>
      <button onClick={() => {
        this.setState({view: "month"})
      }}>{"<-"}</button>
      </div>
      {this.genRender()}
      </div>
    )
  }
}

export default App
