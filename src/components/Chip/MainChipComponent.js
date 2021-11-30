import React, { useState } from 'react'
import PropTypes from 'prop-types'
import colors from 'utils/global'

import ChipComponent from 'components/ui/Chip/ChipComponent'

import './MainChipComponent.css'

const MainChipComponent = ({ config }) => {
  const [chipArray, setChipArray] = useState(config)

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
          return <ChipComponent
            key={chip.key}
            label={chip.label}
            variant={'outlined'}
            onClick={() => handleClick(chip.key)}
            style={{ background: chip.selected ? colors.pink : null, borderColor: colors.pink, color: chip.selected ? colors.white : colors.pink, marginBottom: 10, marginRight: 10 }}/>
        })
      }
    </div>
  )
}

MainChipComponent.propTypes = {
  config: PropTypes.array
}

export default MainChipComponent
