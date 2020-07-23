import React from 'react'
import styled from 'styled-components'

import CompanyListItem from '../CompanyListItem/CompanyListItem'
import { CompanyInterface } from '../../interfaces'

import './CompanyList.css'

interface CompanyListProps {
  companies: CompanyInterface[]
}

const CompanyListWrapper = styled.section`
  background-color: #a8dadc;
  width: 300px;
`

const CompanyList: React.FC<CompanyListProps> = ({ companies = [] }) => {
  return (
    <CompanyListWrapper>
      <h1 className="component-descriptor">CompanyList</h1>
      <ul className="list">
        {companies.map((company) => (
          <li key={company.Abn} data-testid="company-list-item">
            <CompanyListItem company={company} />
          </li>
        ))}
      </ul>
    </CompanyListWrapper>
  )
}

export default CompanyList
