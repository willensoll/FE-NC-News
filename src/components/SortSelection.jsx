import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';

const styles = {
    label: {
        margin: '1rem 1rem 0 0.5rem',
    },
    group: {
        justifyContent: "flex-end",
        backgroundColor: '#ecf0f1'
    }
};

class SortSelection extends Component {
    state = {
        value: 'date',

    };
    render() {
        const { classes } = this.props
        return (
            <FormControl fullWidth={true} component="fieldset" className={classes.formControl}>
                <RadioGroup
                    aria-label="Filter Articles by:"
                    name="filters"
                    className={classes.group}
                    value={this.props.value}
                    onChange={this.handleChange}
                    row={true}
                >
                    <FormLabel className={classes.label} component="legend">Sort Articles by:</FormLabel>
                    <FormControlLabel value="new" control={<Radio />} label="New" />
                    <FormControlLabel value="old" control={<Radio />} label="Old" />
                    <FormControlLabel value="hot" control={<Radio />} label="Most voted" />
                    <FormControlLabel value="not" control={<Radio />} label="Least voted" />
                </RadioGroup>
            </FormControl>
        )
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
        this.props.handleSort(event.target.value);
    };
}

export default withStyles(styles)(SortSelection);

SortSelection.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSort: PropTypes.func
};