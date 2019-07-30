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
    case Actions.UPDATE_TODO: {
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: { ...action.payload },
        },
      }
    }
    default:
      return state
  }
}

export default todosReducer
