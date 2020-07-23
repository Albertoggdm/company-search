import React from 'react'
import styled from 'styled-components'

import { CompanyInterface } from '../../interfaces'

import './CompanyDetails.css'

interface CompanyDetailsProps {
  company: CompanyInterface
}

const CompanyDetailsWrapper = styled.section`
  border: 1px solid #99aebc;
  margin: 10px;
  text-align: start;
  padding: 10px;
  background-color: #fff;
`

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ company }) => {
  const {
    Abn,
    AbnStatus,
    IsCurrent,
    Name,
    NameType,
    Postcode,
    Score,
    State,
  } = company

  return (
    <CompanyDetailsWrapper>
      <h1 className="component-descriptor">CompanyDetails</h1>

      <div data-testid="company-details-name">
        <b>Name:</b> {Name}
      </div>
      <br />
      <div>
        <b>Abn:</b> {Abn}
      </div>
      <div>
        <b>AbnStatus:</b> {AbnStatus}
      </div>
      <div>
        <b>IsCurrent:</b> {IsCurrent}
      </div>
      <div>
        <b>NameType:</b> {NameType}
      </div>
      <div>
        <b>Postcode:</b> {Postcode}
      </div>
      <div>
        <b>Score:</b> {Score}
      </div>
      <div>
        <b>State:</b> {State}
      </div>
    </CompanyDetailsWrapper>
  )
}

export default CompanyDetails
