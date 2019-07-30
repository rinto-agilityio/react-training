import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { FusePageSimple } from '@fuse'
import Header from './containers/header'
import TodoList from './components/todo/TodoList'

const styles = () => ({
  layoutRoot: {},
})

const TodoApp = ({ classes, getTodos, match, entities }) => {
  useEffect(() => {
    getTodos(match)
  }, [])
  console.log('entities', entities)

  return (
    <FusePageSimple
      classes={{
        root: classes.layoutRoot,
      }}
      header={<Header />}
      content={<TodoList />}
    ></FusePageSimple>
  )
}

export default withStyles(styles, { withTheme: true })(TodoApp)
