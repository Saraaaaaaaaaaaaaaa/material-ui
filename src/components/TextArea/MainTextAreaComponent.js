import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import colors from 'utils/global'

import TextAreaComponent from 'components/ui/TextArea/TextAreaComponent'

import './MainTextAreaComponent.css'

const MainTextAreaComponent = ({ name, message }) => {
  const { formState: { errors }, control } = useFormContext()

  return (
    <div className="textAreaContainer">
      <Controller
        name={name}
        control={control}
        rules={message}
        render={({ field }) => (
          <TextAreaComponent
            minRows={10}
            style={{ width: 500 }}
            {...field}
          />
        )}
      />
      {errors[name] && <p className="errorText" style={{ color: colors.error }}>{errors[name].message}</p>}
    </div>
  )
}

MainTextAreaComponent.propTypes = {
  name: PropTypes.string,
  message: PropTypes.object
}

export default MainTextAreaComponent
