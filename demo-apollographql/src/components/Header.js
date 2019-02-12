import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

// Components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  header: {
    marginBottom: '1rem',
  },
  paper: {
    borderRadius: 0,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  link: {
    textDecoration: 'none',
  }
})

const Header = ({ classes }) => (
  <Grid container className={classes.header}>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h3">
          <Link
            to="/"
            title="React-hook demo"
            className={classes.link}
          >
            GraphQL & React
          </Link>
        </Typography>
      </Paper>
    </Grid>
  </Grid>
)

Header.defaultProps = {
  classes: {}
}

Header.propTypes = {
  className: PropTypes.object
}

export default withStyles(styles)(Header)
