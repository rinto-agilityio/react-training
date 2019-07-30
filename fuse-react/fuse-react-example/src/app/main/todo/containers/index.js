import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoApp from '../TodoApp'
import { withRouter } from 'react-router-dom'
import reducer from '../store/reducers'
import * as Actions from '../store/actions'
import withReducer from 'app/store/withReducer'

function mapStateToProps({ todoApp }) {
  return {
    entities: todoApp.todos.entities,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTodos: Actions.getTodos,
    },
    dispatch
  )
}

export default withReducer('todoApp', reducer)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(TodoApp)
  )
)
