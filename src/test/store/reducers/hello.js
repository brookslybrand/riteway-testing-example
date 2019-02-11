import { describe } from 'riteway'
import deepFreeze from 'deep-freeze'

import hello from 'store/reducers/hello'

describe('SET_MODE 2', async assert => {
  assert({
    given: 'initial state',
    should: `set { mode: 'display', subject: 'world' }`,
    actual: hello(),
    expected: {
      mode: 'display',
      subject: 'World'
    }
  })

  const setModeToEdit = () => {
    const stateBefore = {
      mode: 'display',
      subject: 'World'
    }
    const action = {
      type: 'SET_MODE',
      mode: 'edit'
    }

    deepFreeze(stateBefore)
    deepFreeze(action)

    return hello(stateBefore, action)
  }

  assert({
    given: `state with { mode: 'edit' }`,
    should: `set mode to edit mode`,
    actual: setModeToEdit(),
    expected: {
      mode: 'edit',
      subject: 'World'
    }
  })

  const setSubjectToFoo = () => {
    const stateBefore = {
      mode: 'display',
      subject: 'World'
    }
    const action = {
      type: 'SET_SUBJECT',
      subject: 'foo'
    }
    deepFreeze(stateBefore)
    deepFreeze(action)

    return hello(stateBefore, action)
  }

  assert({
    given: `state with { subject: 'foo'}`,
    should: `set mode to edit mode`,
    actual: setSubjectToFoo(),
    expected: {
      mode: 'display',
      subject: 'foo'
    }
  })
})
