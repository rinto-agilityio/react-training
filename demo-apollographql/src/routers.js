import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

// Components
import Grid from '@material-ui/core/Grid'

// Screen
const Homepage = React.lazy(() => import('./router/Homepage'))
const Post = React.lazy(() => import('./router/Post'))
const Author = React.lazy(() => import('./router/Author'))

const styles = theme => ({
  mainContainer: {
    padding: '1rem'
  }
})

// Router config
const AppRouter = ({ classes }) => (
  <Grid container className={classes.mainContainer}>
    <Switch>
      <Route path="/" exact component={props => <Homepage {...props}/>} />
      <Route path="/post/:slug" component={props => <Post {...props} />} />
      <Route path="/author/:id" component={props => <Author {...props} />} />
    </Switch>
  </Grid>
)

export default withStyles(styles)(AppRouter)
