'use strict'

const Sequelize = require('sequelize')
const moment = require('moment')
const db = require('../db')

moment().format()

const CalDate = db.define('caldate', {
  fullDate: {
    type: Sequelize.STRING,
    defaultValue: () => {
      const today = new Date()
      const year = today.getFullYear().toString()
      const month = today.getMonth().toString()
      const date = today.getDate().toString()
      return (year + '-' + month + '-' + date)
    },
    allowNull: false,
    unique: true
  },
  year: {
    type: Sequelize.VIRTUAL,
    get () {
      return moment(this.getDataValue('fullDate')).year()
    }
  },
  month: {
    type: Sequelize.VIRTUAL,
    get () {
      return (moment(this.getDataValue('fullDate')).month() + 1) // Months in moment start at index 0 (Jan = 0, Feb = 1, etc.) so 1 must be added to get the traditional month number
    }
  },
  date: {
    type: Sequelize.VIRTUAL,
    get () {
      return moment(this.getDataValue('fullDate')).date()
    }
  }
})

module.exports = CalDate
