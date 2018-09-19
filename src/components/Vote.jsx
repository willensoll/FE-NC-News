import React, { Component } from 'react';

class Vote extends Component {
    
    state = { 
        vote: 0
     }
    render() { 
        const { id, voteCount, origin } = this.props
        return ( 
            <label>Votes: {voteCount}
            <button onClick={() => {this.voteOnArticle(id, 'up', origin)}}>Up</button>
            <button onClick={() => {this.voteOnArticle(id, 'down', origin)}}>Down</button>
            </label> 
         );
    }

    voteOnArticle = (id, direction, origin) => {
        if (origin === article) {
            api.voteOnArticle(articleId, direction)
            this.setState({

            })
        } else {
            api.voteOnComment(commentId, direction)
            this.setState({
                
            })
        }


    }
}
 
export {Vote};