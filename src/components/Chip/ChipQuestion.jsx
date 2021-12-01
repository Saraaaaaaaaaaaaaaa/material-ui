import React from 'react'
import PropTypes from 'prop-types'

import ReactHookFormChip from 'components/Chip/ReactHookForm/ReactHookFormChip'

const ChipQuestion = ({ config }) => {
  return (
    <ReactHookFormChip config={config} name='chip' message={{ required: 'Ovo polje je obavzno' }} />
  )
}

ChipQuestion.propTypes = {
  config: PropTypes.array
}

export default ChipQuestion
