'use strict'
import { Task } from '../data'

export const GET_ALL_TASKS = 'GET_ALL_TASKS'
export const GET_TASK = 'GET_TASK'
export const CREATE_TASK = 'CREATE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'

export const getAll = tasks => ({type: GET_ALL_TASKS, tasks})
export const get = task => ({type: GET_TASK, task})
export const create = name => ({type: CREATE_TASK, name})
export const update = task => ({type: UPDATE_TASK, task})
export const remove = id => ({type: REMOVE_TASK, id})

const reducer = (tasks = [], action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return action.tasks
    case GET_TASK:
      return action.task
    case CREATE_TASK:
      return [...tasks, action.task]
    case UPDATE_TASK:
      return tasks.map(task => (
        action.task.id === task.id ? action.task : task
      ))
    case REMOVE_TASK:
      return tasks.filter(task => task.id !== action.id)
    default:
      return tasks
  }
}

/* THUNK CREATORS */
// export const getAllTasks = () => dispatch => {
//   return Task.findAll()
// }

// export default reducer
