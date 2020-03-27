let createEmployeeRecord = function(employeeArray) {
  let employee = {}
  employee.firstName = employeeArray[0]
  employee.familyName = employeeArray[1]
  employee.title = employeeArray[2]
  employee.payPerHour = employeeArray[3]
  employee.timeInEvents = []
  employee.timeOutEvents = []
  return this
}

let createEmployeeRecords = function(employeeArrays){
  let employees = []
  employeeArrays.forEach((employee) => {
    employees.push(createEmployeeRecord(employee))
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

function createTimeInEvent(employeeRecord, dateStamp) {
  let eventType = 'TimeIn'
  let updatedRecord = clockPunch(employeeRecord, dateStamp, eventType)
  return updatedRecord
}

function createTimeOutEvent(employeeRecord, dateStamp) {
  let eventType = 'TimeOut'
  let updatedRecord = clockPunch(employeeRecord, dateStamp, eventType)
  return updatedRecord
}

function hoursWorkedOnDate(employeeRecord, dateStamp) {
  const eventOnDate = function(event) { return event.date === dateStamp }
  const timeIn = employeeRecord.timeInEvents.find(eventOnDate).hour;
  const timeOut = employeeRecord.timeOutEvents.find(eventOnDate).hour;
  let hoursWorked = (timeOut - timeIn) / 100
  return this
}

function wagesEarnedOnDate(employeeRecord, dateStamp) {
  let payRate = employeeRecord.payPerHour
  let hoursWorked = hoursWorkedOnDate(employeeRecord, dateStamp)
  let wagesEarned = payRate * hoursWorked
  return wagesEarned
}


function findEmployeeByFirstName(employees, firstName){
    return employees.find( (employee) => {
        return employee.firstName === firstName
    });
}

function calculatePayroll(employeeRecords){

    const reducer = (totalWages, employeeRecords) => {
        return totalWages + allWagesFor(employeeRecords)
    }

    return employeeRecords.reduce(reducer, 0)
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
