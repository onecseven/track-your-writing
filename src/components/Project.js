class Calendar {
  constructor(date) {
    this.year = date.getFullYear()
    this.calendar = {}
    this.calendar[this.year] = Array(12)
    for (let i = 0; i < this.calendar[this.year].length; i++) {
      let array = this.calendar[this.year]
      if (i === 1) {
        array[i] = Array(28)
        array[i].fill(null)
      }
      if (i % 2 === 0) {
        array[i] = Array(31)
        array[i].fill(null)
      } else if (i % 2 !== 0) {
        array[i] = Array(30)
        array[i].fill(null)
      }
    }
  }
  addToDate(month, day, value) {
    month = Number(month) - 1
    day = Number(day)
    this.calendar[this.year][month][day] = value
    return
  }
  getMonth(month) {
    month = Number(month) - 1
    return this.calendar[this.year][month]
  }
  getDay(month, day) {
    month = Number(month) - 1
    day = Number(day)
    return this.calendar[this.year][month][day]
  }

}

export default class Project {
  constructor(name) {
    this.name = name
    this.date = new Date()
    this.year = this.date.getFullYear()
    this.calendar = new Calendar(this.date)
  }
  getCurrentMonth(){
    let da = new Date()
    let month = da.getMonth()
    this.currentMonth = month
    return this.calendar.getMonth(month)
  }
  addToDate(day, value){
    this.calendar.addToDate(this.currentMonth, day, value)
  }
}
