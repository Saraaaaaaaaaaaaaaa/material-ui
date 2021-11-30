import React from 'react'
import PropTypes from 'prop-types'

import MultipleSlider from 'components/Slider/MultipleSlider'

const MultipleSliderQuestion = ({ config }) => {
  return (
    <MultipleSlider config={config} message={{ required: 'Ovo polje je obavezno' }} />
  )
}

MultipleSliderQuestion.propTypes = {
  config: PropTypes.object
}

export default MultipleSliderQuestion
