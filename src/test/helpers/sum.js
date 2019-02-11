import { describe, Try } from 'riteway'

import { sum } from '../../helpers/sum'

describe('sum()', async assert => {
  const should = 'return the correct sum'

  assert({
    given: 'no arguments',
    should: 'return 0',
    actual: sum(),
    expected: 0
  })

  assert({
    given: 'zero',
    should,
    actual: sum(2, 0),
    expected: 2
  })

  assert({
    given: 'negative numbers',
    should,
    actual: sum(1, -4),
    expected: -3
  })

  assert({
    given: 'NaN',
    should: 'throw',
    actual: Try(sum, 1, NaN),
    expected: new TypeError('NaN')
  })
})
