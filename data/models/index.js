const CalDate = require('./cal-date')
const Task = require('./task')

CalDate.belongsToMany(Task, { through: 'cal-dates_tasks' })
Task.belongsToMany(CalDate, { through: 'cal-dates_tasks' })

module.exports = {
  CalDate,
  Task
}
