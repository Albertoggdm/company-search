import axiosMock from 'axios'
import React from 'react'
import { cleanup, fireEvent, waitForElement } from '@testing-library/react'

import { mockCompany } from '../../mockCompany'
import { renderWithRouter } from '../../utils/test-utils.js'

import App from './App'

axiosMock.get.mockResolvedValueOnce({
  data: mockCompany,
})

afterEach(cleanup)

test('renders the App header element', async () => {
  const { getByText } = renderWithRouter(<App />)

  const linkElement = getByText(/Company Search App/i)

  expect(linkElement).toBeInTheDocument()
})

test('renders a list of elements based on searching', async () => {
  const { getAllByTestId, getByTestId } = renderWithRouter(<App />)

  const searchElement = getByTestId('company-search')
  expect(searchElement).toBeInTheDocument()
  fireEvent.change(searchElement, { target: { value: 'couriers' } })

  const listElement = await waitForElement(() =>
    getAllByTestId('company-list-item')
  )
  expect(listElement.length).toEqual(2)
})

test('renders a list of one element when searching unique value', async () => {
  const { getAllByTestId, getByTestId } = renderWithRouter(<App />)

  const searchElement = getByTestId('company-search')
  fireEvent.change(searchElement, { target: { value: 'A BUILDER' } })

  const listElement = await waitForElement(() =>
    getAllByTestId('company-list-item')
  )
  expect(listElement.length).toEqual(1)
})

test('renders a company preview when searching specific ABN', async () => {
  const { getByTestId } = renderWithRouter(<App />)

  const searchElement = getByTestId('company-search')
  fireEvent.change(searchElement, { target: { value: '76121670752' } })
  const previewElement = await waitForElement(() =>
    getByTestId('company-details-name')
  )

  expect(previewElement).toBeInTheDocument()
  expect(previewElement).toHaveTextContent('A BUILDER')
})

test('redirects to the detailed route view when clicking on the list company', async () => {
  const { getByTestId } = renderWithRouter(<App />)

  const searchElement = getByTestId('company-search')
  fireEvent.change(searchElement, { target: { value: 'A BUILDER' } })

  const linkElement = await waitForElement(() =>
    getByTestId('company-list-item-name')
  )
  fireEvent.click(linkElement)

  const loadingoadingElement = getByTestId('loading')
  expect(loadingoadingElement).toBeInTheDocument()
  expect(loadingoadingElement).toHaveTextContent('LOADING')

  const resolvedElement = await waitForElement(() =>
    getByTestId('company-details-name')
  )
  expect(resolvedElement).toBeInTheDocument()
  expect(resolvedElement).toHaveTextContent(mockCompany.Name)
})
