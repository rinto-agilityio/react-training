import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as Actions from '../../store/actions/todos'

import SideBar from '../../components/sidebar/SidebarContent'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openNewTodoDialog: Actions.openNewTodoDialog,
    },
    dispatch
  )
}

function mapStateToProps({ todoApp }) {
  return {
    folders: todoApp.folders,
    labels: todoApp.labels,
    filters: todoApp.filters,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)
)
