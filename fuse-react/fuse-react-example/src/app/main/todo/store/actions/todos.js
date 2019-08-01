import axios from 'axios'
import { getFilters } from './filters'
import { getFolders } from './folders'
import { getLabels } from './labels'
import firebaseService from '../../../../services/firebaseService'

export const GET_TODOS = '[TODO APP] GET TODOS'
export const TOGGLE_COMPLETED = '[TODO APP] TOGGLE COMPLETED'
export const UPDATE_TODO = '[TODO APP] UPDATE TODO'
export const OPEN_NEW_TODO_DIALOG = '[TODO APP] OPEN NEW TODO DIALOG'
export const CLOSE_NEW_TODO_DIALOG = '[TODO APP] CLOSE NEW TODO DIALOG'
export const OPEN_EDIT_TODO_DIALOG = '[TODO APP] OPEN EDIT TODO DIALOG'
export const CLOSE_EDIT_TODO_DIALOG = '[TODO APP] CLOSE EDIT TODO DIALOG'
export const ADD_TODO = '[TODO APP] ADD TODO'
export const UPDATE_TODOS = '[TODO APP] UPDATE TODOS'

export function getData(match) {
  return dispatch => {
    Promise.all([
      dispatch(getFilters()),
      dispatch(getLabels()),
      dispatch(getFolders()),
    ]).then(() => dispatch(getTodos(match)))
  }
}

// export function getTodos(match) {
//   const request = axios.get('/api/todo-app/todos', {
//     params: match.params,
//   })

//   return dispatch =>
//     request.then(response =>
//       dispatch({
//         type: GET_TODOS,
//         routeParams: match.params,
//         payload: response.data,
//       })
//     )
// }

export const getTodos = () => dispatch =>
  firebaseService.getTodosData().then(data =>
    dispatch({
      type: GET_TODOS,
      payload: data,
    })
  )

export function toggleCompleted(todo) {
  const newTodo = {
    ...todo,
    completed: !todo.completed,
  }
  return dispatch =>
    Promise.all([dispatch({ type: TOGGLE_COMPLETED })]).then(() =>
      dispatch(updateTodo(newTodo))
    )
}

export function updateTodo(todo) {
  const request = firebaseService.updateTodoItemData(todo)

  return dispatch =>
    request.then(response => {
      Promise.all([
        dispatch({
          type: UPDATE_TODO,
          payload: response,
        }),
      ])
    })
}

export function openNewTodoDialog() {
  return {
    type: OPEN_NEW_TODO_DIALOG,
  }
}

export function closeNewTodoDialog() {
  return {
    type: CLOSE_NEW_TODO_DIALOG,
  }
}

export function openEditTodoDialog(data) {
  return {
    type: OPEN_EDIT_TODO_DIALOG,
    data,
  }
}

export function closeEditTodoDialog() {
  return {
    type: CLOSE_EDIT_TODO_DIALOG,
  }
}

export function updateTodos() {
  return (dispatch, getState) => {
    const { routeParams } = getState().todoApp.todos

    const request = axios.get('/api/todo-app/todos', {
      params: routeParams,
    })

    return request.then(response =>
      dispatch({
        type: UPDATE_TODOS,
        payload: response.data,
      })
    )
  }
}

export function addTodo(todo) {
  const request = firebaseService.addNewTodoData(todo)

  return dispatch =>
    request.then(response => {
      return Promise.all([
        dispatch({
          type: ADD_TODO,
          payload: response,
        }),
      ])
    })
}
