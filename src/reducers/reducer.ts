import { RESPONSE_COMPLETE, LOADING, ERROR } from './actions'
import { AppState, Action } from '../interfaces'

const reducer = (state: AppState, action: Action): AppState => {
  if (action.type === LOADING) {
    return {
      companies: [],
      loading: true,
      error: '',
    }
  }

  if (action.type === RESPONSE_COMPLETE) {
    return {
      companies: action.payload.companies,
      loading: false,
      error: '',
    }
  }

  if (action.type === ERROR) {
    return {
      companies: [],
      loading: false,
      error: action.payload.error,
    }
  }

  return state
}

export default reducer
