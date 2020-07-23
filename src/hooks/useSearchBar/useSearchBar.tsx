import React from 'react'

import { debounceFunction } from '../../utils/utils'
import { searchCompanies } from '../../reducers/actions'

export const useSearchBar = (
  dispatch: Function,
  initSearchValue: string = ''
): [any, Function] => {
  const [query, setQuery] = React.useState(initSearchValue)

  React.useEffect(() => {
    debounceFunction(() => {
      searchCompanies(query, dispatch)
    }, 500)
  }, [query, dispatch])

  return [query, setQuery]
}
