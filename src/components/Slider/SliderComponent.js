import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import PropTypes from 'prop-types'
import colors from 'utils/global'

const SliderComponent = ({ config }) => {
  const [sliderValue, setSliderValue] = useState(0)

  const changeValue = (event, value) => {
    setSliderValue(value)
  }

  return (
    <Box sx={{ width: '70%' }}>
      <Slider
        aria-label="Slider"
        defaultValue={config.defaultValue}
        value={sliderValue}
        onChange={changeValue}
        step={config.step}
        marks={config.marks}
        min={config.min}
        max={config.max}
        valueLabelDisplay="auto"
        style={{ color: colors.pink, height: 3 }}
      />
    </Box>
  )
}

SliderComponent.propTypes = {
  config: PropTypes.object
}

export default SliderComponent
