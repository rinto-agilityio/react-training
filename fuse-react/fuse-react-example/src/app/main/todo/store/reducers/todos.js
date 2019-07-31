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
    case Actions.OPEN_NEW_TODO_DIALOG: {
      return {
        ...state,
        todoDialog: {
          type: 'new',
          props: {
            open: true,
          },
          data: null,
        },
      }
    }
    case Actions.CLOSE_NEW_TODO_DIALOG: {
      return {
        ...state,
        todoDialog: {
          type: "new",
          props: {
            open: false
          },
          data: null
        }
      };
    }
    case Actions.OPEN_EDIT_TODO_DIALOG: {
      return {
        ...state,
        todoDialog: {
          type: "edit",
          props: {
            open: true
          },
          data: action.data
        }
      };
    }
    case Actions.CLOSE_EDIT_TODO_DIALOG: {
      return {
        ...state,
        todoDialog: {
          type: "edit",
          props: {
            open: false
          },
          data: null
        }
      };
    }
    // case Actions.ADD_TODO: {
    //   const todoAdd = _.keyBy([action.payload], 'id')

    //   return {
    //     ...state,
    //     entities: Object.assign(state.entities, todoAdd)
    //   }
    // }
    case Actions.UPDATE_TODOS: {
      return {
        ...state,
        entities: _.keyBy(action.payload, "id")
      };
    }
    default:
      return state
  }
}

export default todosReducer
