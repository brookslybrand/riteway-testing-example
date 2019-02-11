import React from 'react'

const Hello = ({ helloClass, subject = 'World', actions: { setMode } }) => {
  return (
    <p className={helloClass} onClick={() => setMode('edit')}>
      Hello, {subject}!
    </p>
  )
}

export default Hello
