import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'

const TextFieldComponent = ({ className, label, variant, style, ...props }) => {
  return (
    <TextField
      className={className}
      label={label}
      variant={variant}
      style={style}
      {...props}
    />
  )
}

TextFieldComponent.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  style: PropTypes.object
}

export default TextFieldComponent
