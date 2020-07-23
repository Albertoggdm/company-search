import React from 'react'

import { renderWithRouter } from '../../utils/test-utils.js'
import CompanyListItem from './CompanyListItem'

import dummyData from '../../dummy-dataABNCompanies'

test('renders the company name', () => {
  const { getByTestId } = renderWithRouter(
    <CompanyListItem company={dummyData.dummyDataByName[0]} />
  )
  const compamyItem = getByTestId('company-list-item-name')
  expect(compamyItem).toHaveTextContent(dummyData.dummyDataByName[0].Name)
})
