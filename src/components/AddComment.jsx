import React, { Component } from 'react';
import propTypes from 'prop-types'

class AddComment extends Component {
    state = { 
        newComment: '',
     }
    render() { 
        return ( 
            <div>
                <textarea name="comment" form="commentfield" placeholder="Add Comment.." onChange={this.handleInput}/>
                <form id="commentfield"><button onClick={this.handleSubmit}>Submit</button></form>
                
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
 
export {AddComment} ;