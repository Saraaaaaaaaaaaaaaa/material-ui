import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ text, style }) => {
  return (
    <div style={style}>{text}</div>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object
}

export default Text
