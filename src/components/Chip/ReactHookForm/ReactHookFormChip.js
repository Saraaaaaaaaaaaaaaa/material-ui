import React, { useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import colors from 'utils/global'

import ChipComponent from 'components/ui/Chip/ChipComponent'

import './ReactHookFormChip.css'

const ReactHookFormChip = ({ config, name, message }) => {
  const [chipArray, setChipArray] = useState(config)
  const { formState: { errors }, control } = useFormContext()

  const handleClick = key => {
    const countOfSelectedItems = chipArray.filter(chip => chip.selected).length
    const updatedChipArray = chipArray.map(chip => {
      if (chip.key === key && countOfSelectedItems < 3) {
        return {
          ...chip,
          selected: !chip.selected
        }
      } else if (chip.key === key && countOfSelectedItems >= 3) {
        return {
          ...chip,
          selected: false
        }
      }
      return chip
    })
    setChipArray(updatedChipArray)
  }

  return (
    <div className="chipContainer">
      {
        chipArray?.map(chip => {
          return <>
           <Controller
            key={chip.key}
            name={name}
            control={control}
            rules={message}
            render={({ field }) => (
              <ChipComponent
                label={chip.label}
                variant={'outlined'}
                onClick={() => handleClick(chip.key)}
                style={{ background: chip.selected ? colors.pink : null, borderColor: colors.pink, color: chip.selected ? colors.white : colors.pink, marginBottom: 10, marginRight: 10 }}
                {...field}
              />
            )}
            />
          </>
        })
      }
      {errors[name] && <p className="errorText" style={{ color: colors.error }}>{errors[name].message}</p>}
    </div>
  )
}

ReactHookFormChip.propTypes = {
  config: PropTypes.array,
  name: PropTypes.string,
  message: PropTypes.object
}

export default ReactHookFormChip
