import React from 'react'
import PropTypes from 'prop-types'
import colors from 'utils/global'

import FormControlLabelComponent from 'components/FormControlLabel/FormControlLabelComponent'

const FormControlLabels = ({ labels }) => {
  return (
    labels.map(label => <FormControlLabelComponent key={label.key} label={label} color={colors.pink} />)
  )
}

FormControlLabels.propTypes = {
  labels: PropTypes.array
}

export default FormControlLabels
