import React from 'react'
import { useFormContext } from 'react-hook-form'
import PropTypes from 'prop-types'
import colors from 'utils/global'

import FormControlLabelComponent from 'components/FormControlLabel/FormControlLabelComponent'

import './FormControlLabels.css'

const FormControlLabels = ({ labels, name }) => {
  const { formState: { errors } } = useFormContext()

  return (
    <>
      {labels.map(label => <FormControlLabelComponent key={label.key} label={label} color={colors.pink} />)}
      {errors[name] && <p className="errorText" style={{ color: colors.error }}>{errors[name].message}</p>}
    </>
  )
}

FormControlLabels.propTypes = {
  labels: PropTypes.array,
  name: PropTypes.string
}

export default FormControlLabels
