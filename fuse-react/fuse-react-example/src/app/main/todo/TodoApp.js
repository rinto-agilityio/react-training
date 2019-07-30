import React, { useEffect, memo } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { FusePageSimple } from '@fuse'
import Header from './containers/header'
import TodoList from './components/todo/TodoList'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import SidebarContent from './components/sidebar/SidebarContent'

const styles = () => ({
  layoutRoot: {},
})

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React)
}

const TodoApp = ({ classes, getData, match, entities }) => {
  useEffect(() => {
    getData(match)
  }, [])

  return (
    <FusePageSimple
      classes={{
        root: classes.layoutRoot,
      }}
      header={<Header />}
      content={<TodoList />}
      leftSidebarContent={<SidebarContent />}
    ></FusePageSimple>
  )
}

TodoApp.whyDidYouRender = true

export default memo(withStyles(styles, { withTheme: true })(TodoApp))
