import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

// Components
import Grid from '@material-ui/core/Grid'

// Screen
const Homepage = React.lazy(() => import('./pages/Homepage'))
const Post = React.lazy(() => import('./pages/Post'))
const Author = React.lazy(() => import('./pages/Author'))

const StyledGrid = styled(Grid)({
  padding: '1rem'
})

// Router config
const AppRouter = () => (
  <StyledGrid
    container
    direction="row"
    justify="space-between"
    alignItems="flex-start"
    spacing={40}
  >
    <Switch>
      <Route path="/" exact component={props => <Homepage {...props}/>} />
      <Route path="/post/:slug" component={props => <Post {...props} />} />
      <Route path="/author/:id" component={props => <Author {...props} />} />
    </Switch>
  </StyledGrid>
)

export default AppRouter
