import React, { memo } from 'react'
import { Typography, Toolbar, AppBar } from '@material-ui/core'

const TodoAppBar = ({ type }) => {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar className="flex w-full">
        <Typography variant="subtitle1" color="inherit">
          {type === 'new' ? 'New Todo' : 'Edit Todo'}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default memo(TodoAppBar)
