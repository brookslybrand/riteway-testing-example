import React from 'react'
import PropTypes from 'prop-types'

const { string, shape, func } = PropTypes

const Hello = ({
  helloClass,
  subject,
  mode,
  actions: { setMode, setSubject }
}) => {
  return mode === 'edit' ? (
    <p>
      Hello,{' '}
      <input
        className={helloClass}
        type="text"
        value={subject}
        onChange={e => setSubject(e.target.value)}
        onBlur={() => setMode('display')}
      />
      !
    </p>
  ) : (
    <p className={helloClass} onClick={() => setMode('edit')}>
      Hello, {subject}!
    </p>
  )
}

Hello.defaultProps = {
  subject: 'World'
}

Hello.propTypes = {
  helloClass: string.isRequired,
  subject: string,
  mode: string,
  actions: shape({
    setMode: func.isRequired,
    setSubject: func.isRequired
  })
}

export default Hello
