import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchField } from '../SearchField'

describe('SearchField', () => {
  it('should focus input on initial render', () => {
    const { getByLabelText } = render(<SearchField />)

    const searchInput = getByLabelText(/search/i)
    expect(document.activeElement === searchInput).toBeTruthy()
  })

  it('should accept user input', () => {
    const { getByLabelText } = render(<SearchField />)
    const INPUT_VALUE = 'testing 123'
    const searchInput = getByLabelText(/search/i)
    userEvent.type(searchInput, INPUT_VALUE)
    expect(searchInput).toHaveValue(INPUT_VALUE)
  })
})
