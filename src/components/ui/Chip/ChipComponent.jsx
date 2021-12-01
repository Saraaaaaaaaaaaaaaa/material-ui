import React from 'react'
import Chip from '@mui/material/Chip'
import PropTypes from 'prop-types'

const ChipComponent = ({ label, variant, onClick, style, onDelete, ...props }) => {
  return (
    <Chip
      label={label}
      variant={variant}
      onClick={onClick}
      onDelete={onDelete}
      style={style}
      {...props}
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
