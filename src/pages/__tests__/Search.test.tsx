import { getSearchInput } from '../Search'

describe('getSearchInput', () => {
  const INPUT = 'searchInput'
  it('should return a string with sort:stars when stars passed as sort value', () => {
    expect(getSearchInput('stars', INPUT)).toEqual(`sort:stars ${INPUT}`)
  })
  it('should return the input string when defaut passed as sort value', () => {
    expect(getSearchInput('default', INPUT)).toEqual(INPUT)
  })
})
