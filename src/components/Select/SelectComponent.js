import React from 'react'
import PropTypes from 'prop-types'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const SelectComponent = ({ value, label, onChange, config }) => {
  return (
    <Select
      value={value}
      label={label}
      onChange={onChange}
    >
      {
        config?.map(c => <MenuItem key={c.key} value={c.name}>{c.name}</MenuItem>)
      }
    </Select>
  )
}

SelectComponent.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  config: PropTypes.array
}

export default SelectComponent
