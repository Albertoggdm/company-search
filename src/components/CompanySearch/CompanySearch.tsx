import React from 'react'
import styled from 'styled-components'

import { useSearchBar } from '../../hooks/useSearchBar/useSearchBar'

import './CompanySearch.css'

interface CompanySearchProps {
  dispatch: Function
}

const CompanySearchWrapper = styled.section`
  background-color: #99aebc;
  width: 300px;
`

const CompanySearchInput = styled.input`
  padding: 10px;
  display: block;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
  font-size: inherit;
`

const CompanySearch: React.FC<CompanySearchProps> = ({ dispatch }) => {
  const [query, setQuery] = useSearchBar(dispatch)

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value)

  return (
    <CompanySearchWrapper>
      <h1 className="component-descriptor">CompanySearch</h1>
      <CompanySearchInput
        data-testid="company-search"
        onChange={onChangeHandler}
        placeholder="Search Company By Name or ABN"
        type="search"
        value={query}
      />
    </CompanySearchWrapper>
  )
}

export default CompanySearch
