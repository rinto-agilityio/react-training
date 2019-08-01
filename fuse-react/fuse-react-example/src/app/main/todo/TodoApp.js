import React, { useEffect, memo } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { FusePageSimple } from '@fuse'
import Header from './containers/header'
import TodoListContainer from './containers/todo/TodoList'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import SidebarContentContainer from './containers/sidebar'
import TodoDialogContainer from './containers/dialog'

const styles = () => ({
  layoutRoot: {},
})

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React)
}

const TodoApp = ({ classes, getData, match, todos }) => {
  useEffect(() => {
    getData(match)
  }, [])

  return (
    <>
      <FusePageSimple
        classes={{
          root: classes.layoutRoot,
        }}
        header={<Header />}
        content={<TodoListContainer todos={todos} />}
        leftSidebarContent={<SidebarContentContainer />}
      ></FusePageSimple>
      <TodoDialogContainer />
    </>
  )
}

TodoApp.whyDidYouRender = true

export default memo(withStyles(styles, { withTheme: true })(TodoApp))
