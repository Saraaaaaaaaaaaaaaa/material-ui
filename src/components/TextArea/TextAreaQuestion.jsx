import React from 'react'

import ReactHookFormTextArea from 'components/TextArea/ReactHookForm/ReactHookFormTextArea'

const TextAreaQuestion = () => {
  return (
    <ReactHookFormTextArea name='textArea' message={{ required: 'Ovo polje je obavezno' }}/>
  )
}

export default TextAreaQuestion
