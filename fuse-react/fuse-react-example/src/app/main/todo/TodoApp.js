import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { FusePageSimple } from '@fuse'
import Header from './containers/header'

const styles = () => ({
  layoutRoot: {},
})

const TodoApp = ({ classes, getTodos, match }) => {
  useEffect(() => {
    getTodos(match)
  }, [])
  console.log('match', match)

  return (
    <FusePageSimple
      classes={{
        root: classes.layoutRoot,
      }}
      header={<Header />}
    ></FusePageSimple>
  )
}

export default withStyles(styles, { withTheme: true })(TodoApp)
