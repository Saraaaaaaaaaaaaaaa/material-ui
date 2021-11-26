import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import PropTypes from 'prop-types'

const FormControlLabelComponent = ({ label, color }) => {
  return (
    <FormControlLabel value={label.space} control={<Radio sx={{
      '&.Mui-checked': {
        color: color
      }
    }} />} label={label.space} />
  )
}

FormControlLabelComponent.propTypes = {
  label: PropTypes.object,
  color: PropTypes.string
}

export default FormControlLabelComponent
