import React from 'react'
import { describe, renderComponent as render } from 'riteway'

import Hello from 'components/hello'
import createActions from 'test-fixtures/components/hello/create-actions'

describe('Hello component', async assert => {
  const noProps = () => {
    const props = {
      helloClass: 'hello',
      actions: createActions()
    }

    const text = `<p class="${props.helloClass}">Hello, World!</p>`
    const re = new RegExp(text, 'g')

    const $ = render(<Hello {...props} />)
    const output = $.html()

    return re.test(output)
  }

  assert({
    given: 'no parameters',
    should: 'render our hello greeting!',
    expected: true,
    actual: noProps()
  })

  const withProps = () => {
    const props = {
      helloClass: 'hello',
      subject: 'React',
      actions: createActions()
    }

    const text = `<p class="${props.helloClass}">Hello, React!</p>`
    const re = new RegExp(text, 'g')

    const $ = render(<Hello {...props} />)

    const output = $.html()

    return re.test(output)
  }

  assert({
    given: 'a subject',
    should: 'render greeting with correct subject!',
    expected: true,
    actual: withProps()
  })

  const getEditField = () => {
    const props = {
      helloClass: 'hello',
      mode: 'edit',
      actions: createActions()
    }

    const $ = render(<Hello {...props} />)
    return $('p').html()
  }

  assert({
    given: 'edit mode',
    should: 'have an input with the correct text',
    expected: 'Hello, <input type="text" class="hello" value="World">!',
    actual: getEditField()
  })
})
