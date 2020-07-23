import endpoint from '../endpoint'

export const LOADING = 'LOADING'
export const RESPONSE_COMPLETE = 'RESPONSE_COMPLETE'
export const ERROR = 'ERROR'

export const searchCompanies = (query: string, dispatch: Function) => {
  dispatch({ type: LOADING })

  if (query) {
    fetch(`${endpoint}/companies/?q=${query}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: RESPONSE_COMPLETE,
          payload: {
            companies: response,
          },
        })
      })
      .catch((error) => dispatch({ type: ERROR, payload: { error } }))
  } else {
    dispatch({
      type: RESPONSE_COMPLETE,
      payload: {
        companies: [],
      },
    })
  }
}
