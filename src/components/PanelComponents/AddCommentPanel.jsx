import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import {
    withStyles, TextField
} from '@material-ui/core';


const styles = (theme) => ({
    textField: {
        width: '50vw',
        marginTop: '2rem'
    }
})

const AddCommentPanel = ({ handleInput, handleSubmit, classes }) => {
    return (
            <TextField
                id="filled-multiline-flexible"
                label="Your comment here.."
                multiline
                rows="5"
                onChange={handleInput}
                margin="none"
                fullWidth
                variant="filled"
                placeholder="Your article here.."
                required={true}
                className={classes.textField}
            />
    )
}
export default withStyles(styles)(AddCommentPanel);