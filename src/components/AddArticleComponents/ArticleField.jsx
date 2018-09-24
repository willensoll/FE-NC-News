import React from 'react';
import { TextField } from '@material-ui/core';


const ArticleField = ({handleChange}) => {
    return (
        <TextField
            id="filled-multiline-flexible"
            label="ArticleBody"
            multiline
            rows="20"
            onChange={handleChange('articleBody')}
            margin="none"
            fullWidth
            variant="filled"
            placeholder="Your article here.."
            required={true}
          />
    )
}

export default ArticleField