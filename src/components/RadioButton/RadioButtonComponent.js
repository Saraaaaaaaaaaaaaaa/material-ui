import React from 'react'
import RadioGroup from '@mui/material/RadioGroup'
import PropTypes from 'prop-types'
import { useFormContext, Controller } from 'react-hook-form'

import FormControlLabels from 'components/FormControlLabel/FormControlLabels'

import './RadioButtonComponent.css'

const RadioButtonComponent = ({ config, name, message }) => {
  const { control } = useFormContext()

  return (
    <div className="radioButtonContainer">
      <Controller
        name={name}
        control={control}
        rules={message}
        render={({ field }) => (
          <RadioGroup
            aria-label="radio-group"
            name="radio-buttons-group"
            {...field}
          >
            <FormControlLabels labels={config} name={name}/>
          </RadioGroup>
        )}
      />
    </div>
  )
}

RadioButtonComponent.propTypes = {
  config: PropTypes.array,
  name: PropTypes.string,
  message: PropTypes.object
}

export default RadioButtonComponent
