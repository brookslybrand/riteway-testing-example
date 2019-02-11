import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { describe } from 'riteway'
import dom from 'cheerio'

import Title from 'components/Title'

const render = ReactDOMServer.renderToStaticMarkup

describe('Title component', async assert => {
  const titleText = 'Hello!'
  const props = {
    title: titleText,
    titleClass: 'title'
  }
  const re = new RegExp(titleText, 'g')

  const el = <Title {...props} />
  const $ = dom.load(render(el))
  const output = $('.title').html()

  assert({
    given: 'titleText prop',
    should: 'output the correct title text',
    expected: true,
    actual: re.test(output)
  })
})
