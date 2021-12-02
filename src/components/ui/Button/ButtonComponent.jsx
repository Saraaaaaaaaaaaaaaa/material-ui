import React from 'react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'

const ButtonComponent = ({ text, type, variant, style }) => {
  return (
    <Button variant={variant} type={type} style={style}>
      {text}
    </Button>
  )
}

ButtonComponent.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  style: PropTypes.object
}

export default ButtonComponent
