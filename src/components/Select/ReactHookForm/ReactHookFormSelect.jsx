import React, { useState, useEffect } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import colors from 'utils/global'
import { makeStyles } from '@mui/styles'

import InputLabelComponent from 'components/ui/InputLabel/InputLabelComponent'
import SelectComponent from 'components/ui/Select/SelectComponent'
import ChipComponent from 'components/ui/Chip/ChipComponent'

import './ReactHookFormSelect.css'

const useStyles = makeStyles({
  line: {
    color: colors.font,
    marginBottom: 20
  }
})

const ReactHookFormSelect = ({ config, name, message }) => {
  const { formState: { errors }, control, watch, resetField } = useFormContext()
  const classes = useStyles()
  const [arrayOfSelected, setArrayOfSelected] = useState([])
  const selected = watch(name)

  useEffect(() => {
    if (!selected) {
      return
    }
    if (arrayOfSelected.includes(selected)) {
      return
    }
    setArrayOfSelected([
      ...arrayOfSelected,
      selected
    ])
  }, [selected])

  const handleDelete = (value) => {
    const arrayWithDeletedItem = arrayOfSelected.filter(item => item !== value)
    setArrayOfSelected(arrayWithDeletedItem)
    if (arrayWithDeletedItem.length === 0) {
      resetField(name)
    }
  }
  return (
    <div>
      <div className="formControlContainer">
        <Box sx={{ width: 250 }}>
          <FormControl fullWidth>
            <InputLabelComponent text={'Name'}/>
            <Controller
              control={control}
              name={name}
              rules={message}
              render={({ field }) => (
                <SelectComponent style={classes.root} label={'Name'} config={
                  config.filter(c => !arrayOfSelected.includes(c.name))
                } {...field}/>
              )}
            />
          </FormControl>
          {errors[name] && <p className="errorText" style={{ color: colors.error }}>{errors[name].message}</p>}
        </Box>
      </div>
      <div>
        <hr className={classes.line} />
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

ReactHookFormSelect.propTypes = {
  config: PropTypes.array,
  name: PropTypes.string,
  message: PropTypes.object
}

export default ReactHookFormSelect
