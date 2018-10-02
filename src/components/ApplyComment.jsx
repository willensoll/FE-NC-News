import React, { Component } from 'react';
import propTypes from 'prop-types'
import AddComment from '@material-ui/icons/AddComment'
import AddCommentPanel from './PanelComponents/AddCommentPanel'


import {
    withStyles, 
    Button,

} from '@material-ui/core';

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
        background: 'blue',
        color: 'white',
        expansionPanelOpen: false
    },
});

class ApplyComment extends Component {
    state = {
        newComment: '',
        open: false,
        anchorEl: null,
    }
    render() {
        const { classes } = this.props
        const {anchorEl, open} = this.state
        return (
            <div>
                 {<Button size="small" onClick={this.handleClick} variant="contained" colour="secondary" className={classes.button}>Add Comment
                  <AddComment className={classes.addIcon} /></Button>}
                  {open && <AddCommentPanel handleInput={this.handleInput} anchorEl={anchorEl} handleSubmit={this.handleSubmit}/>}                
            </div>
        );
    }


    handleClick = (event) => {
        const { currentTarget } = event
        this.setState({
            anchorEl: currentTarget,
            open: !this.state.open
        })
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

ApplyComment.propTypes = {
    user: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    renderComment: propTypes.func.isRequired
}

export default withStyles(styles)(ApplyComment);