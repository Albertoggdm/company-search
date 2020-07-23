import { useSearchBar } from './useSearchBar'
import { act, renderHook } from '@testing-library/react-hooks'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

test('useSearchBar hook returns state and setter [query, setQuery] for searching', async () => {
  const { result } = renderHook(useSearchBar)

  const [quey, setQuery] = result.current
  expect(quey).toBe('')

  act(() => {
    setQuery('company1')
  })

  const [newQuey] = result.current
  expect(newQuey).toBe('company1')
})
