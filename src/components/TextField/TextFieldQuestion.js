import React from 'react'
import PropTypes from 'prop-types'

import ReactHookFormTextField from 'components/TextField/ReactHookForm/ReactHookFormTextField'

const TextFieldQuestion = ({ config }) => {
  return (
    <ReactHookFormTextField config={config} />
  )
}

TextFieldQuestion.propTypes = {
  config: PropTypes.array
}

export default TextFieldQuestion
