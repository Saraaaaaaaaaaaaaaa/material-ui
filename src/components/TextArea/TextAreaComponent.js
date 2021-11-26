import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import PropTypes from 'prop-types'

const TextAreaComponent = ({ minRows, value, onChange, style }) => {
  return (
    <TextareaAutosize
      minRows={minRows}
      value={value}
      onChange={onChange}
      style={style}
    />
  )
}

TextAreaComponent.propTypes = {
  minRows: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object
}

export default TextAreaComponent
