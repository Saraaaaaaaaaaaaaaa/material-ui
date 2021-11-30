import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import PropTypes from 'prop-types'

const TextAreaComponent = ({ minRows, style, ...props }) => {
  console.log(props, 'props')
  return (
    <TextareaAutosize
      minRows={minRows}
      style={style}
      {...props}
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
