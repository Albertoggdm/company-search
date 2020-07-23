import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import reducer from '../../reducers/reducer'
import useThunkReducer from '../../reducers/useThunkReducer'
import initialState from '../../initialState'

import CompanyDetails from '../CompanyDetails/CompanyDetails'
import CompanyDetailsRouted from '../CompanyDetailsRouted/CompanyDetailsRouted'
import CompanyList from '../CompanyList/CompanyList'
import CompanySearch from '../CompanySearch/CompanySearch'

import './App.css'

function App() {
  const [state, dispatch] = useThunkReducer(reducer, initialState)
  const { companies } = state
  const showCompanyPreview = companies.length === 1

  return (
    <Router>
      <div className="app">
        <div className="app-header">
          <NavLink to="/">
            <h1 className="app-header-title">Company Search App</h1>
          </NavLink>
        </div>
        <div className="app-body">
          <div className="sidebar">
            <CompanySearch
              data-testid="app-company-search"
              dispatch={dispatch}
            />
            <CompanyList data-testid="app-company-list" companies={companies} />
          </div>
          <div className="main-container">
            <Route
              data-testid="app-company-details-routed"
              path="/companies/:id"
              component={CompanyDetailsRouted}
            />
            {showCompanyPreview && (
              <Route
                exact
                path="/"
                render={() => (
                  <CompanyDetails
                    data-testid="app-company-details"
                    company={companies[0]}
                  />
                )}
              />
            )}
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
