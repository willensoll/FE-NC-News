import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import {
    withStyles, TextField, Popper, Paper
} from '@material-ui/core';


const styles = (theme) => ({
    textField: {
        width: '50vw',
        marginTop: '2rem',
        display: 'inline-block'
    }
})

const AddCommentPanel = ({ handleInput, handleSubmit, classes }) => {
    return (
        <div>
            <TextField
                id="filled-multiline-flexible"
                label="Your comment here.."
                multiline
                rows="5"
                onChange={handleInput}
                margin="none"
                fullWidth
                variant="filled"
                required={true}
                className={classes.textField}
            />
        </div>
    )
}
export default withStyles(styles)(AddCommentPanel);