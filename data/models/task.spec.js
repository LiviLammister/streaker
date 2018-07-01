'use strict'

const { expect } = require('chai')
const db = require('../db')
const Task = require('../models/task')

describe('Task model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Default value tests', () => {
    let testTask

    beforeEach(() => {
      return Task.create({name: 'test'})
        .then(newTask => {
          testTask = newTask
        })
    })

    it('Sets default value of currentStreak to 0', () => {
      expect(testTask.currentStreak).to.be.equal(0)
    })

    it('Sets default value of longestStreak to 0', () => {
      expect(testTask.longestStreak).to.be.equal(0)
    })

  }) // end 'Default value tests'
}) // end 'Task model'
