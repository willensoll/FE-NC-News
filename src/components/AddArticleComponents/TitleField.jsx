import React from 'react';
import { TextField } from '@material-ui/core';


const TitleField = ({ handleChange }) => {
    return (
        <TextField
            id="filled-title"
            label="Title"
            onChange={handleChange('title')}
            margin="normal"
            variant="filled"
            placeholder="Your title here"
                    />
    )
}


export default TitleField