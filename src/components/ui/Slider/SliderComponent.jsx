import React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import PropTypes from 'prop-types'

const SliderComponent = ({ config, value, onChange, style }) => {
  return (
    <Box sx={{ width: '70%' }}>
      <Slider
        aria-label="Slider"
        defaultValue={config.defaultValue}
        value={value ?? ' '}
        onChange={onChange}
        step={config.step}
        marks={config.marks}
        min={config.min}
        max={config.max}
        valueLabelDisplay="auto"
        style={style}
      />
    </Box>
  )
}

SliderComponent.propTypes = {
  config: PropTypes.object,
  value: PropTypes.number,
  onChange: PropTypes.func,
  style: PropTypes.object
}

export default SliderComponent
