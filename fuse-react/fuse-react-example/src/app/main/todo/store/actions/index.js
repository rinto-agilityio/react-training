import axios from 'axios'

export const GET_TODOS = '[TODO APP] GET TODOS'
export const TOGGLE_COMPLETED = '[TODO APP] TOGGLE COMPLETED'
export const UPDATE_TODO = '[TODO APP] UPDATE TODO'

export function getTodos(match) {
  const request = axios.get('/api/todo-app/todos', {
    params: match.params,
  })

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_TODOS,
        routeParams: match.params,
        payload: response.data,
      })
    )
}

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
  const request = axios.post('/api/todo-app/update-todo', todo)

  return dispatch =>
    request.then(response => {
      Promise.all([
        dispatch({
          type: UPDATE_TODO,
          payload: response.data,
        }),
      ])
    })
}
