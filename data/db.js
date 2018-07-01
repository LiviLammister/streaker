const Sequelize = require('sequelize')

const db = new Sequelize('streaker', null, null, {
  logging: false,
  dialect: 'sqlite',
  storage: './db.sqlite'
})

module.exports = db
