import React from 'react';
import { Comments } from "./index"
import Vote from './Vote'
import propTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Divider, Avatar } from '@material-ui/core'

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    avatr: {
        margin: 10
    }
  });



const ArticlePage = ({classes, title, body, created_at, created_by, avatar, comments,
voteCount, id, user}) => {
    return (
        <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {title}
        </Typography>
        <Typography>{created_at}{created_by}<Avatar src={avatar} alt={`${created_by}'s avatar`} className={classes.avatar}></Avatar></Typography>
        <Typography component="p">
          {body}
        </Typography>
        <Divider />
        <Vote voteCount={voteCount} id={id} origin={"article"}/>
      </Paper>
      <Paper>
      <Comments article={id} user={user} />
      </Paper>
    </div>
    )
}

/* 
<h4>{title}</h4>
<div>{}</div><br />
<div></div>
<div></div>
<div>{body} </div> <br />
<div>Comments: {comments}</div>

<h2>Comments</h2>
 */

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