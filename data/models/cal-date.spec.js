'use strict'

const { expect } = require('chai')
const db = require('../db')
const CalDate = require('./cal-date')

describe('Date model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Default value tests', () => {
    let testDate
    let referenceDate = new Date()

    beforeEach(() => {
      return CalDate.create()
        .then(newDate => {
          testDate = newDate
        })
    })

    it('Sets the default date to today', () => {
      expect(testDate.fullDate).to.be.equal(referenceDate.getFullYear().toString() + '-' + referenceDate.getMonth().toString() + '-' + referenceDate.getDate().toString())
    })

    it('Returns correct year', () => {
      expect(testDate.year).to.be.equal(referenceDate.getFullYear())
    })

    it('Returns correct month', () => {
      expect(testDate.month).to.be.equal(referenceDate.getMonth())
    })

    it('Returns correct date', () => {
      expect(testDate.date).to.be.equal(referenceDate.getDate())
    })

    it('Returns correct day', () => {
      expect(testDate.day).to.be.equal(referenceDate.getDay())
    })

  }) // end 'Creating with describe default values'

  describe('Creating with YYYY-MM-DD date format', () => {
    let testDate

    beforeEach(() => {
      return CalDate.create({ fullDate: '1989-03-27' })
        .then(newDate => {
          testDate = newDate
        })
    })

    it('Returns correct year', () => {
      expect(testDate.year).to.be.equal(1989)
    })

    it('Returns the correct month', () => {
      expect(testDate.month).to.be.equal(3)
    })

    it('Returns the correct date', () => {
      expect(testDate.date).to.be.equal(27)
    })
  }) // end 'Creating with YYYY-MM-DD date format'
}) // end 'Describe date model'
