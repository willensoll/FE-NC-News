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
    applyCom: {
        display: 'inline-block'
    }
});

class AddCommentButton extends Component {
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
            <div  className={classes.applyCom}>
                 {<Button size="small" onClick={this.handleClick} variant="contained" colour="secondary" className={classes.button}>{open ? 'Cancel' : 'Add Comment'}
                  <AddComment /></Button>}
            </div>
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

    handleSubmit = () => {
        const { id, user, renderComment } = this.props
        const newComment = {
            body: this.state.newComment,
            created_by: user
        }
        renderComment(id, newComment)
        this.setState({
            open: false
        })
    }
}

AddCommentButton.propTypes = {
    user: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    renderComment: propTypes.func.isRequired
}

export default withStyles(styles)(AddCommentButton);