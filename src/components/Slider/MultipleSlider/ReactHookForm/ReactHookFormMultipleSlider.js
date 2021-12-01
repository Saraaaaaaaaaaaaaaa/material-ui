import React, { useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import colors from 'utils/global'

import SliderComponent from 'components/ui/Slider/SliderComponent'
import TypographyComponent from 'components/ui/Typography/TypographyComponent'

import './ReactHookFormMultipleSlider.css'

const ReactHookFormMultipleSlider = ({ config, message }) => {
  const { formState: { errors }, control } = useFormContext()

  const [sliderValue, setSliderValue] = useState(0)

  const changeValue = (event, value) => {
    setSliderValue(value)
  }

  return (
    <div className="multipleSliderContainer">
      <Box sx={{ width: '100%' }}>
        {
          config.map(c => (
            <div key={c.key}>
              <TypographyComponent text={c.title} style={{ fontWeight: 'bold', marginLeft: 35, marginBottom: 20 }}/>
              <Controller
                name={c.name}
                control={control}
                rules={message}
                render={({ field }) => (
                  <SliderComponent config={c} value={sliderValue} onChange={changeValue} style={{ color: colors.pink, height: 3, marginLeft: 40 }} {...field} />
                )}
              />
              {errors[c.name] && <p className="sliderErrorText" style={{ color: colors.error }}>{errors[c.name].message}</p>}
            </div>
          ))
        }
      </Box>
    </div>
  )
}

ReactHookFormMultipleSlider.propTypes = {
  config: PropTypes.array,
  message: PropTypes.object
}

export default ReactHookFormMultipleSlider
