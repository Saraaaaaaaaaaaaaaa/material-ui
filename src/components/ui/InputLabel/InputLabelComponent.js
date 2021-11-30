import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import PropTypes from 'prop-types'

const InputLabelComponent = ({ text }) => {
  return (
    <InputLabel>{text}</InputLabel>
  )
}

InputLabelComponent.propTypes = {
  text: PropTypes.string
}

export default InputLabelComponent
