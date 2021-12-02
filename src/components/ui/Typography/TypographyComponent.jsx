import React from 'react'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

const TypographyComponent = ({ text, style }) => {
  return (
    <Typography style={style}>
      {text}
    </Typography>
  )
}

TypographyComponent.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object
}

export default TypographyComponent
