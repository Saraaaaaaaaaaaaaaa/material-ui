import React from 'react'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

import SliderComponent from 'components/Slider/SliderComponent'
import TypographyComponent from 'components/Typography/TypographyComponent'

import './MultipleSlider.css'

const MultipleSlider = ({ config }) => {
  return (
    <div className="multipleSliderContainer">
      <Box sx={{ width: '100%' }}>
        {
          config.map(c => (
            <div key={c.key}>
              <TypographyComponent text={c.title} style={{ fontWeight: 'bold', marginLeft: 35, marginBottom: 20 }}/>
              <SliderComponent config={c}/>
            </div>
          ))
        }
      </Box>
    </div>
  )
}

MultipleSlider.propTypes = {
  config: PropTypes.array
}

export default MultipleSlider
