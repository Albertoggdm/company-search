import axiosMock from 'axios'
import React from 'react'
import { cleanup, waitForElement } from '@testing-library/react'

import { renderWithRouter } from '../../utils/test-utils.js'
import CompanyDetailsRouted from './CompanyDetailsRouted'
import { mockCompany } from '../../mockCompany'

axiosMock.get.mockResolvedValueOnce({
  data: mockCompany,
})

afterEach(cleanup)

test('renders fetch mocking company data', async () => {
  const route = '/companies/76121670752'
  const { getByText, getByTestId } = renderWithRouter(
    <CompanyDetailsRouted />,
    { route }
  )

  const titleElement = getByText(/-CompanyDetailsRouted-/i)
  expect(titleElement).toBeInTheDocument()

  // loading info
  const loadingElement = getByTestId('loading')
  expect(loadingElement).toHaveTextContent('LOADING')

  // company data
  const resolvedElement = await waitForElement(() =>
    getByTestId('company-details-routed')
  )

  expect(resolvedElement).toBeInTheDocument()
  expect(resolvedElement).toHaveTextContent('CompanyDetails')
  expect(axiosMock.get).toHaveBeenCalledTimes(1)
})
