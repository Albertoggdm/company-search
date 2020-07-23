import React from 'react'
import { render } from '@testing-library/react'
import CompanyDetails from './CompanyDetails'

import dummyData from '../../dummy-dataABNCompanies'

const mockCompany = dummyData.dummyDataByName[0]

test('renders CompanyDetails title', () => {
  const { getByText } = render(<CompanyDetails company={mockCompany} />)
  const titleElement = getByText(/CompanyDetails/i)

  expect(titleElement).toBeInTheDocument()
})

test('renders CompanyDetails data', () => {
  const { getByTestId } = render(<CompanyDetails company={mockCompany} />)
  const nameElement = getByTestId('company-details-name')

  expect(nameElement.textContent?.includes(mockCompany.Name)).toBe(true)
})
