import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const TopicSelect = ({handleChange, selected}) => {
    return (
        <FormControl>
        <Select
          value={selected}
          onChange={handleChange('topic')}
          displayEmpty
        >
        <MenuItem value={''} disabled>Choose Topic</MenuItem>
          <MenuItem value={'coding'}>Coding</MenuItem>
          <MenuItem value={'cooking'}>Cooking</MenuItem>
          <MenuItem value={'football'}>Football</MenuItem>
        </Select>
      </FormControl>
    )
}

export default TopicSelect