export default class Calendar {
  /** @description generates a calendar given a name. it starts on $currentYear
   * @param {string} name the project's name
   */
  constructor(name) {
    this.name = name
    this.date = new Date()
    this.year = this.date.getFullYear()
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
  /** @description generates a calendar given a name. it starts on $currentYear
   * @param {number} month starts at 0
   * @param {number} day starts at 0
   * @param {string} value what you want to store 
   */
  addToDate(month, day, value) {
    month = Number(month) 
    day = Number(day)
    this.calendar[this.year][month][day] = value
    return
  }
  /** @description takes in a month, return a function that takes a day, returns a function that writes to that day
   * @param {number} month the month starting at 0.
   * @return {Function} function that takes in a day
   */
  curryAddToDate(month) {
    return day => {
      return value => {
        this.addToDate(month, day, value)
      }
    }
  }

  getMonth(month) {
    month = Number(month)
    return this.calendar[this.year][month]
  }
  getDay(month, day) {
      /** @description 
   * @param {number} month the month starting at 0.
   * @param {number} day the month starting at 0.
  * @return {string} 
   */
    month = Number(month)
    day = Number(day)
    return this.calendar[this.year][month][day]
  }
}
