import React from 'react'
import PropTypes from 'prop-types'

import ReactHookFormSlider from 'components/Slider/SingleSlider/ReactHookForm/ReactHookFormSlider'

const SliderQuestion = ({ config }) => {
  return (
    <ReactHookFormSlider config={config} name='singleSlider' message={{ required: 'Ovo polje je obavezno' }} />
  )
}

SliderQuestion.propTypes = {
  config: PropTypes.object
}

export default SliderQuestion
