import React from 'react'
import Chip from '@mui/material/Chip'
import PropTypes from 'prop-types'

const ChipComponent = ({ label, variant, onClick, style, onDelete }) => {
  return (
    <Chip
      label={label}
      variant={variant}
      onClick={onClick}
      onDelete={onDelete}
      style={style}
    />
  )
}

ChipComponent.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  onDelete: PropTypes.func
}

export default ChipComponent
