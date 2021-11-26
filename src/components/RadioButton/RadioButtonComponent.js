import React, { useState } from 'react'
import RadioGroup from '@mui/material/RadioGroup'
import PropTypes from 'prop-types'

import FormControlLabels from 'components/FormControlLabel/FormControlLabels'

import './RadioButtonComponent.css'

const RadioButtonComponent = ({ config }) => {
  const [category, setCategory] = useState('')

  return (
    <div className="radioButtonContainer">
        <RadioGroup
          aria-label="radio-group"
          name="radio-buttons-group"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabels labels={config} />
        </RadioGroup>
    </div>
  )
}

RadioButtonComponent.propTypes = {
  config: PropTypes.array
}

export default RadioButtonComponent
