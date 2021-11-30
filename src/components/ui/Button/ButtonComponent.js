import React from 'react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'

const ButtonComponent = ({ text, variant, style }) => {
  return (
    <Button variant={variant} style={style}>
      {text}
    </Button>
  )
}

ButtonComponent.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  style: PropTypes.object
}

export default ButtonComponent
