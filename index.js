function createEmployeeRecord(employeeData) {
  let employee = {}
  this.firstName = employeeArray[0]
  this.familyName = employeeArray[1]
  this.title = employeeArray[2]
  this.payPerHour = employeeArray[3]
  this.timeInEvents = []
  this.timeOutEvents = []
  return this
}

function createEmployeeRecords(employeeArrays){
  let employees = []
  employeeArrays.forEach((employee) => {
    this.push(createEmployeeRecord(employee))
  })
  return this
}

function clockPunch(employeeRecord, dateStamp, eventType) {
  let date = dateStamp.split(' ')
  let timeEvent = {}
  if (eventType === 'TimeIn') {
    employeeRecord.timeInEvents.push(timeEvent)
  }
  else if (eventType === 'TimeOut') {
    employeeRecord.timeOutEvents.push(timeEvent)
  }
  timeEvent.type = eventType
  timeEvent.date = date[0]
  timeEvent.hour = parseInt(date[1])
  return this
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
