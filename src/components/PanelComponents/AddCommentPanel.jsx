import React from 'react';
import propTypes from 'prop-types';
import SubmitButton from '../AddArticleComponents/SubmitButton';

import {
    withStyles, TextField
} from '@material-ui/core';


const styles = () => ({
    textField: {
        width: '40vw',
        marginTop: '1.5rem',
    },
})

const AddCommentPanel = ({ handleInput, handleSubmit, classes }) => {
    return (
        <React.Fragment>
              <TextField
                id="filled-multiline-flexible"
                label="Your comment here.."
                multiline
                rows="5"
                onChange={handleInput}
                margin="none"
                variant="filled"
                required={true}
                className={classes.textField}
            />
            <SubmitButton handleSubmit={handleSubmit} />
            </React.Fragment>         
    )
}
export default withStyles(styles)(AddCommentPanel);

AddCommentPanel.propTypes = {
    handleInput: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired
}