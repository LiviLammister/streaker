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

    it('Correctly returns the year', () => {
      expect(testDate.year).to.be.equal(referenceDate.getFullYear())
    })

    it('Correctly returns the month', () => {
      expect(testDate.month).to.be.equal(referenceDate.getMonth())
    })

    it('Correctly returns the day', () => {
      expect(testDate.date).to.be.equal(referenceDate.getDate())
    })

  }) // end 'Creating with describe default values'

  // describe('Creating with YYYY-MM-DD date format', () => {
  // }) // end 'Creating with YYYY-MM-DD date format'
}) // end 'Describe date model'
