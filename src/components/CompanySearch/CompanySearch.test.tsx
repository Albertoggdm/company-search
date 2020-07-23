import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithRouter } from '../../utils/test-utils.js'
import CompanySearch from './CompanySearch'

test('renders learn react link', () => {
  const { getByTestId } = renderWithRouter(
    <CompanySearch dispatch={() => {}} />
  )
  const searchElement = getByTestId('company-search')
  fireEvent.change(searchElement, { target: { value: 'A BUILDER' } })

  expect(searchElement.value).toBe('A BUILDER')
})
