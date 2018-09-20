import React from 'react';
import propTypes from 'prop-types'


export const RemoveComment = ({id, deleteComment}) => {
    return (
        <button onClick={() => deleteComment(id)}>Delete Comment</button>
    )
}
  
RemoveComment.propTypes = {
    deleteComment: propTypes.func.isRequired,
    id: propTypes.string.isRequired
} 


