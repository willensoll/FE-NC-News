import React, { Component } from 'react';
import propTypes from 'prop-types'
import {Button, withStyles} from '@material-ui/core'
import AddComment from '@material-ui/icons/AddComment'

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      background: 'blue',
      color: 'white'
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    iconSmall: {
      fontSize: 20,
    },
  });
  

class ApplyComment extends Component {
    state = { 
        newComment: '',
     }
    render() { 
        const {classes} = this.props
        return ( 
            <div>
                {/* <textarea name="comment" form="commentfield" placeholder="Add Comment.." onChange={this.handleInput}/>
                <form id="commentfield"><button onClick={this.handleSubmit}>Submit</button></form> */}
                <Button variant="contained" colour="secondary" className={classes.button}>Add Comment<AddComment className={classes.addIcon}/></Button>
            </div>
         );
    }

    handleInput = (event) => {
        this.setState({
            newComment: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        const { id, user, renderComment } = this.props
        event.preventDefault()
        const newComment = {
            body: this.state.newComment,
            created_by: user
        }
        renderComment(id, newComment)
    }
}

AddComment.propTypes = {
    user: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    renderComment: propTypes.func.isRequired
}
 
export default withStyles(styles)(ApplyComment);