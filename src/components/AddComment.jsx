import React, { Component } from 'react';
import * as api from '../api/api';

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
        const { id, user } = this.props
        console.log(this.props)
        event.preventDefault()
        const newComment = {
            body: this.state.newComment,
            created_by: user
        }
        api.postCommentToArticle(id, newComment)
    }
}
 
export {AddComment} ;