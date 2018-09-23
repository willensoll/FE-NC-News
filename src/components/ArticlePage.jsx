import React from 'react';
import Comments from "./Comments"
import Vote from './Vote'
import propTypes from 'prop-types';
import { Divider, Typography, Paper, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const ArticlePage = ({ classes, title, body, created_at, created_by, voteCount, id, user }) => {
  return (
    <section>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {title}
        </Typography>
        <Typography>{created_at}{created_by}</Typography>
        <Typography component="p">
          {body}
        </Typography>
        <Divider />
        <Vote voteCount={voteCount} id={id} origin={"article"} />
      </Paper>
      <Paper>
        <Comments article={id} user={user} />
      </Paper>
    </section>
  )
}

ArticlePage.propTypes = {
  title: propTypes.string,
  created_at: propTypes.string,
  created_by: propTypes.string,
  avatar: propTypes.string,
  body: propTypes.string,
  comments: propTypes.number,
  voteCount: propTypes.number,
  id: propTypes.string,
  user: propTypes.string,
  classes: propTypes.object
}

export default withStyles(styles)(ArticlePage);