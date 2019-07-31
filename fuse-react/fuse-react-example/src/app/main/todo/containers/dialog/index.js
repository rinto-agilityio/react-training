import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../store/actions/todos'


import TodoDialog from '../../components/dialog/TodoDialog'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeEditTodoDialog: Actions.closeEditTodoDialog,
      closeNewTodoDialog: Actions.closeNewTodoDialog,
      addTodo: Actions.addTodo,
      // updateTodo: Actions.updateTodo,
      // removeTodo: Actions.removeTodo
    },
    dispatch
  );
}

function mapStateToProps({ todoApp }) {
  return {
    todoDialog: todoApp.todos.todoDialog,
    labels: todoApp.labels
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDialog)
