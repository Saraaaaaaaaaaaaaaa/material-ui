import React from 'react'
import PropTypes from 'prop-types'

import RadioButtonComponent from 'components/RadioButton/RadioButtonComponent'

const RadioButtonQuestion = ({ config }) => {
  return (
    <RadioButtonComponent name='choose' message={{ required: 'Ovo polje je obavezno' }} config={config}/>
  )
}

RadioButtonQuestion.propTypes = {
  config: PropTypes.array
}

export default RadioButtonQuestion
