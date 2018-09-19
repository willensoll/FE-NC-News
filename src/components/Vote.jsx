import React, { Component } from 'react';

class Vote extends Component {
    state = {  }
    render() { 
        return ( 
            <label>Votes: {this.props.voteCount}
            <button>Up</button>
            <button>Down</button>
            </label>
            
         );
    }
}
 
export {Vote};