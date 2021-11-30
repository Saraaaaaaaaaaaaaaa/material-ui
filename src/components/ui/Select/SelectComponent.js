import React from 'react'
import PropTypes from 'prop-types'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const SelectComponent = ({ value, label, onChange, config, style }) => {
  return (
    <Select
      className={style}
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
  config: PropTypes.array,
  style: PropTypes.object
}

export default SelectComponent
