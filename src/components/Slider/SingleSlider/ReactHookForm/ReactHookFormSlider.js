import React, { useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import colors from 'utils/global'

import SliderComponent from 'components/ui/Slider/SliderComponent'

import './ReactHookFormSlider.css'

const ReactHookFormSlider = ({ config, name, message }) => {
  const { formState: { errors }, control } = useFormContext()

  const [sliderValue, setSliderValue] = useState(0)

  const changeValue = (event, value) => {
    setSliderValue(value)
  }

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={message}
        render={({ field }) => (
          <SliderComponent config={config} value={sliderValue} onChange={changeValue} style={{ color: colors.pink, height: 3, marginLeft: 40 }} {...field} />
        )}
      />
      {errors[name] && <p className="sliderErrorText" style={{ color: colors.error }}>{errors[name].message}</p>}
    </>
  )
}

ReactHookFormSlider.propTypes = {
  config: PropTypes.object,
  name: PropTypes.string,
  message: PropTypes.object
}

export default ReactHookFormSlider
