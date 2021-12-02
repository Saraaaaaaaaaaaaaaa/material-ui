import React from 'react'
import PropTypes from 'prop-types'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const SelectComponent = ({ label, config, style, value, ...props }) => {
  return (
    <Select
      className={style}
      label={label}
      value={value ?? ''}
      {...props}
    >
      {
        config?.map(c => <MenuItem key={c.key} value={c.name}>{c.name}</MenuItem>)
      }
    </Select>
  )
}

SelectComponent.propTypes = {
  label: PropTypes.string,
  config: PropTypes.array,
  value: PropTypes.string,
  style: PropTypes.object
}

export default SelectComponent
