import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { CompanyInterface } from '../../interfaces'

import './CompanyListItem.css'

interface CompanyListItemProps {
  company: CompanyInterface
}

const CompanyListItemWrapper = styled.section`
  background-color: #e5f7f8;
  padding: 0 10px;
`

const CompanyListItem: React.FC<CompanyListItemProps> = ({ company }) => {
  const { Name, Abn } = company

  return (
    <CompanyListItemWrapper>
      <NavLink to={`/companies/${Abn}`}>
        <h1 className="component-descriptor">CompanyListItem</h1>
        <div className="link-item" data-testid="company-list-item-name">
          {Name}
        </div>
      </NavLink>
    </CompanyListItemWrapper>
  )
}

export default CompanyListItem
