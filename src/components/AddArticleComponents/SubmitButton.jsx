import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    typography: {
        margin: theme.spacing.unit * 2,
    },
});

class SubmitButton extends Component {
    state = {
        anchorEl: null
    }
    render() {
        const { classes } = this.props
        const { anchorEl } = this.state
        const open = Boolean(anchorEl);
        return (
            <div>
            <Button variant="contained" size="small" color="primary"
                className={classes.button} onClick={this.handleClick}>
                Submit!
            </Button>
            <Popover
                id="simple-popper"
                open={open}
                anchorEl={anchorEl}
                onClose={this.handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>
                Submit? 
                <Button onClick={this.handleConfirm}>Confirm</Button>
                <Button onClick={this.handleClose}>Not yet!</Button>
                </Typography>
            </Popover>
            </div>
         );
    }

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    handleConfirm = () => {
        this.handleClose()
        this.props.handleSubmit()
    }


}

export default withStyles(styles)(SubmitButton)
