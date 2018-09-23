import React from 'react';
import propTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles, IconButton } from '@material-ui/core'

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      marginLeft:"1.9rem",
      '&:hover': {
          color: 'red'
      }
    },
    input: {
      display: 'none',
    },
  });

const RemoveComment = ({id, deleteComment, classes}) => {
    return (
        <IconButton className={classes.button} onClick={() => deleteComment(id)}><DeleteIcon /></IconButton>
    )
}
  
RemoveComment.propTypes = {
    deleteComment: propTypes.func.isRequired,
    id: propTypes.string.isRequired
} 

export default withStyles(styles)(RemoveComment)

