import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as Actions from '../../store/actions/todos'

import TodoItem from '../../components/todo/TodoItem'

const mapStateToProps = ({ todoApp }) => {
  return {
    labels: todoApp.labels,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleCompleted: Actions.toggleCompleted,
      // toggleImportant: Actions.toggleImportant,
      // toggleStarred: Actions.toggleStarred,
      // openEditTodoDialog: Actions.openEditTodoDialog
    },
    dispatch
  )
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoItem)
)
