import React, { useState } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import PropTypes from 'prop-types'
import colors from 'utils/global'

import InputLabelComponent from 'components/InputLabel/InputLabelComponent'
import SelectComponent from 'components/Select/SelectComponent'
import ChipComponent from 'components/Chip/ChipComponent'

import './MainSelectComponent.css'

const MainSelectComponent = ({ config }) => {
  const [selected, setSelected] = useState('')
  const [arrayOfSelected, setArrayOfSelected] = useState([])

  const handleChange = (event) => {
    setSelected(event.target.value)
    setArrayOfSelected([
      ...arrayOfSelected,
      event.target.value
    ])
  }

  const handleDelete = (value) => {
    const arrayWithDeletedItem = arrayOfSelected.filter(item => item !== value)
    setArrayOfSelected(arrayWithDeletedItem)
  }

  return (
    <div>
      <div className="formControlContainer">
        <Box sx={{ width: 250 }}>
          <FormControl fullWidth>
            <InputLabelComponent text={'Name'}/>
            <SelectComponent value={selected} label={'Name'} onChange={handleChange} config={config}/>
          </FormControl>
        </Box>
      </div>
      <div>
        <hr style={{ color: colors.font, marginBottom: 20 }} />
      </div>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, marginBottom: 5 }}>
        {arrayOfSelected.map((value) => (
          <ChipComponent
            key={value}
            label={value}
            onDelete={() => handleDelete(value)}
            style={{ background: colors.pink, color: colors.white }}
          />
        ))}
      </Box>
    </div>
  )
}

MainSelectComponent.propTypes = {
  config: PropTypes.array
}

export default MainSelectComponent
