import React, { useState } from 'react'

import TextAreaComponent from 'components/TextArea/TextAreaComponent'

import './MainTextAreaComponent.css'

const MainTextAreaComponent = () => {
  const [text, setText] = useState('')

  return (
    <div className="textAreaContainer">
      <TextAreaComponent
        minRows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: 500 }}
      />
    </div>
  )
}

export default MainTextAreaComponent
