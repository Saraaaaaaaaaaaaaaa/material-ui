import React from 'react'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

import SliderComponent from 'components/Slider/SliderComponent'
import TypographyComponent from 'components/Typography/TypographyComponent'

const MultipleSlider = ({ config }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 30, marginBottom: 50, marginLeft: 40 }}>
      <Box sx={{ width: '70%' }}>
        {
          config.map(c => (
            <div key={c.key}>
              <TypographyComponent text={c.title} style={{ fontWeight: 'bold', marginLeft: -10, marginBottom: 20 }}/>
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