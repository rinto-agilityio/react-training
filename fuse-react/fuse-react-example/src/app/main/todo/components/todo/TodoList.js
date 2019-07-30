import React, { memo } from 'react'
import { List, Typography } from '@material-ui/core'
import { FuseUtils, FuseAnimate } from '@fuse'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from '@lodash'
import TodoItemContainer from '../../containers/todo/TodoItem'

function getFilteredArray(entities, searchText) {
  const arr = Object.keys(entities).map(id => entities[id])
  if (searchText.length === 0) {
    return arr
  }
  return FuseUtils.filterArrayByString(arr, searchText)
}

const TodoList = ({ todos, searchText, orderBy, orderDescending }) => {
  const arr = _.orderBy(
    getFilteredArray(todos, searchText),
    [orderBy],
    [orderDescending ? 'desc' : 'asc']
  )

  if (arr.length === 0) {
    return (
      <FuseAnimate delay={100}>
        <div className="flex flex-1 items-center justify-center h-full">
          <Typography color="textSecondary" variant="h5">
            There are no todos!
          </Typography>
        </div>
      </FuseAnimate>
    )
  }

  return (
    <List className="p-0">
      {arr.map(todo => (
        <TodoItemContainer todo={todo} key={todo.id} />
      ))}
    </List>
  )
}

function mapStateToProps({ todoApp }) {
  return {
    todos: todoApp.todos.entities,
    searchText: todoApp.todos.searchText,
    orderBy: todoApp.todos.orderBy,
    orderDescending: todoApp.todos.orderDescending,
  }
}

export default memo(withRouter(connect(mapStateToProps)(TodoList)))
