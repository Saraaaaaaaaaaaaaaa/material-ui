import React from 'react'
import PropTypes from 'prop-types'

import ReactHookFormSelect from 'components/Select/ReactHookForm/ReactHookFormSelect'

const SelectQuestion = ({ config }) => {
  return (
    <ReactHookFormSelect config={config} name='select' message={{ required: 'Ovo polje je obavezno' }}/>
  )
}

SelectQuestion.propTypes = {
  config: PropTypes.array
}

export default SelectQuestion
