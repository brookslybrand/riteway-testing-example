import React from 'react'
import { describe, renderComponent as render } from 'riteway'

import Title from 'components/Title'

describe('Title component', async assert => {
  const titleText = 'Hello!'
  const props = {
    title: titleText,
    titleClass: 'title'
  }
  const re = new RegExp(titleText, 'g')

  const $ = render(<Title {...props} />)
  const output = $('.title').html()

  assert({
    given: 'titleText prop',
    should: 'output the correct title text',
    expected: true,
    actual: re.test(output)
  })
})
