import React from 'react'
import { MuiThemeProvider, Paper } from '@material-ui/core'

const TodoHeader = ({ pageLayout, mainTheme }) => {
  console.log('maintheme', mainTheme)
  return (
    <MuiThemeProvider theme={mainTheme}>
      <div className="flex flex-1">
        <Paper
          className="flex items-center w-full h-48 sm:h-56 p-16 pl-4 md:pl-16 rounded-8"
          elevation={1}
        ></Paper>
      </div>
    </MuiThemeProvider>
  )
}

export default TodoHeader
