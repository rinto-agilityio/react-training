import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
// import * as Actions from '../../store/actions/todos'

import TodoList from '../../components/todo/TodoList'

function mapStateToProps({ todoApp }) {
  return {
    searchText: todoApp.todos.searchText,
    orderBy: todoApp.todos.orderBy,
    orderDescending: todoApp.todos.orderDescending,
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       toggleCompleted: Actions.toggleCompleted,
//     },
//     dispatch
//   )
// }

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(TodoList)
)
