import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import colors from 'utils/global'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'

import TextFieldComponent from 'components/ui/TextField/TextFieldComponent'

import './ReactHookFormTextField.css'

const useStyles = makeStyles({
  root: {
    '& .MuiFilledInput-root': {
      background: colors.white
    },
    '& label.Mui-focused': {
      color: colors.pink
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colors.pink
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: colors.pink
      }
    }
  }
})

const ReactHookFormTextField = ({ config }) => {
  const classes = useStyles()
  const { formState: { errors }, control } = useFormContext()
  console.log(errors[name], 'errors[name]')
  return (
    <div className="textFieldContainer">
      {
        config.map(c => <>
          <Controller
            name={c.name}
            control={control}
            rules={c.message}
            render={({ field }) => (
              <TextFieldComponent className={classes.root} label={c.label} variant='outlined' style={{ marginBottom: 15 }} {...field} />
            )}
          />
          {errors[c.name] && <p style={{ marginTop: -10, fontSize: 13, color: colors.error }}>{errors[c.name].message}</p>}
        </>
        )
      }
    </div>
  )
}

ReactHookFormTextField.propTypes = {
  config: PropTypes.array
}

export default ReactHookFormTextField