import React from 'react'

import dummyData from '../../dummy-dataABNCompanies'
import { renderWithRouter } from '../../utils/test-utils.js'

import CompanyList from './CompanyList'

test('renders the list of company names', () => {
  const { getAllByTestId } = renderWithRouter(
    <CompanyList companies={dummyData.dummyDataByName} />
  )

  const companyNames = getAllByTestId('company-list-item').map(
    (li: HTMLElement) => li.textContent
  )
  const mockCompanyNames = dummyData.dummyDataByName.map((c) => c.Name)

  companyNames.forEach((companyName: string, i: number) => {
    expect(companyName?.includes(mockCompanyNames[i])).toBe(true)
  })
})
