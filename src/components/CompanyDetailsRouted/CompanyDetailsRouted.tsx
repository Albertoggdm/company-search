import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import CompanyDetails from '../CompanyDetails/CompanyDetails'

import { CompanyInterface } from '../../interfaces'
import endpoint from '../../endpoint'

import './CompanyDetailsRouted.css'

const CompanyDetailsRoutedWrapper = styled.section`
  background-color: #99aebc;
`

const Title = styled.h1`
  background-color: #305979;
  color: white;
  height: 50px;
  padding: 10px;
`

const CompanyDetailsRouted: React.FC = () => {
  const [company, setCompany] = useState<CompanyInterface | undefined>(
    undefined
  )
  let { id } = useParams()

  useEffect(() => {
    const loadData = async () => {
      const response: any = await axios.get(`${endpoint}/companies/${id}`)
      setCompany(response.data)
    }
    loadData()
  }, [id])

  return (
    <CompanyDetailsRoutedWrapper>
      <Title>-CompanyDetailsRouted-</Title>
      {company ? (
        <div data-testid="company-details-routed">
          <CompanyDetails company={company} />
        </div>
      ) : (
        <div data-testid="loading">LOADING</div>
      )}
    </CompanyDetailsRoutedWrapper>
  )
}

export default CompanyDetailsRouted
