import React from 'react'

import MainTextAreaComponent from 'components/TextArea/MainTextAreaComponent'

const TextAreaQuestion = () => {
  return (
    <MainTextAreaComponent name='textArea' message={{ required: 'Ovo polje je obavezno' }}/>
  )
}

export default TextAreaQuestion
