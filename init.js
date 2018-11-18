chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.get(["KTProject"], (result) => {
    if (result.KTProject) {
      console.log('exists')
      return
    } else {
      let cal = Array(12)
      for (let i = 0; i < cal.length; i++) {
        let array = cal
        if (i === 1) {
          array[i] = Array(28)
          array[i].fill(null)
        }
        if (i % 2 === 0) {
          array[i] = Array(30)
          array[i].fill(null)
        } else if (i % 2 !== 0) {
          array[i] = Array(31)
          array[i].fill(null)
        }
      }
      let year = new Date().getFullYear()
      let obj = {}
      obj[year] = cal
      let temp = {
        name: "Placeholder",
        date: new Date(),
        calendar: obj
      }
      let str = JSON.stringify(temp)
      chrome.storage.local.set({ KTProject: str })
    }
  })
})
