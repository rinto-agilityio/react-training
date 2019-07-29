import _ from '@lodash'
import * as Actions from '../actions'

const initialState = {
  entities: [],
  searchText: '',
  orderBy: '',
  orderDescending: false,
  routeParams: {},
  todoDialog: {
    type: 'new',
    props: {
      open: false,
    },
    data: null,
  },
}

const todosReducer = function(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_TODOS: {
      return {
        ...state,
        entities: _.keyBy(action.payload, 'id'),
        searchText: '',
        routeParams: action.routeParams,
      }
    }
    default:
      return state
  }
}

export default todosReducer
