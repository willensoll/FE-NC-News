import React from 'react';
import propTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
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

