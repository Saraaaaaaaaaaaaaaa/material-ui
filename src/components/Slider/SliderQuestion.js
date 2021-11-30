import React from 'react'
import PropTypes from 'prop-types'

import MainSliderComponent from 'components/Slider/MainSliderComponent'

const SliderQuestion = ({ config }) => {
  return (
    <MainSliderComponent config={config} name='singleSlider' message={{ required: 'Ovo polje je obavezno' }} />
  )
}

SliderQuestion.propTypes = {
  config: PropTypes.object
}

export default SliderQuestion
