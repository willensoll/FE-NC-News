import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });



class AddArticle extends Component {
    state = {
        title: 'Your title here...',
        age: '',
        multiline: 'Your article here.. ',
        currency: 'EUR',
      };

    render() { 
        const { classes } = this.props;
        return ( 
            <div>
                <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="filled-title"
          label="Title"
          className={classes.textField}
          value={this.state.title}
          onChange={this.handleChange('title')}
          margin="normal"
          variant="filled"
        />
         <TextField
          id="filled-multiline-flexible"
          label="Article body"
          multiline
          rowsMax="10"
          
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        </form>

            </div>

         );
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
}
 
export default withStyles(styles)(AddArticle);