import React from 'react'
import PropTypes from 'prop-types'

import ReactHookFormMultipleSlider from 'components/Slider/MultipleSlider/ReactHookForm/ReactHookFormMultipleSlider'

const MultipleSliderQuestion = ({ config }) => {
  return (
    <ReactHookFormMultipleSlider config={config} message={{ required: 'Ovo polje je obavezno' }} />
  )
}

MultipleSliderQuestion.propTypes = {
  config: PropTypes.array
}

export default MultipleSliderQuestion
