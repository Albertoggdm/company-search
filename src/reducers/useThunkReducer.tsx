import React, { useReducer, Reducer } from 'react'
import { AppState, Action } from '../interfaces'

const useThunkReducer = (
  reducer: Reducer<AppState, Action>,
  initialState: AppState
): [AppState, any] => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const thunkedDispatch = React.useCallback(
    (action) => {
      if (typeof action === 'function') {
        action(dispatch)
      } else {
        dispatch(action)
      }
    },
    [dispatch]
  )

  return [state, thunkedDispatch]
}

export default useThunkReducer
