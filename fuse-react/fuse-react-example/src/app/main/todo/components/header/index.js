import React from 'react'
import { MuiThemeProvider, Paper, Icon, Input } from '@material-ui/core'

const TodoHeader = ({ searchText, mainTheme, setSearchText, pageLayout }) => {
  return (
    <MuiThemeProvider theme={mainTheme}>
      <div className="flex flex-1">
        <Paper
          className="flex items-center w-full h-48 sm:h-56 p-16 pl-4 md:pl-16 rounded-8 mt-20"
          elevation={1}
        >
          <Icon color="action">search</Icon>
          <Input
            placeholder="Search"
            className="pl-16"
            disableUnderline
            fullWidth
            value={searchText}
            inputProps={{
              'aria-label': 'Search',
            }}
            onChange={setSearchText}
          />
        </Paper>
      </div>
    </MuiThemeProvider>
  )
}

export default TodoHeader
