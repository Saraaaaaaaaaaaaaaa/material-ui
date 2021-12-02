import React from 'react'
import PropTypes from 'prop-types'

import ReactHookFormRadioButton from 'components/RadioButton/ReactHookForm/ReactHookFormRadioButton'

const RadioButtonQuestion = ({ config }) => {
  return (
    <ReactHookFormRadioButton name='choose' message={{ required: 'Ovo polje je obavezno' }} config={config}/>
  )
}

RadioButtonQuestion.propTypes = {
  config: PropTypes.array
}

export default RadioButtonQuestion
