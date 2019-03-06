import React, {useContext} from 'react'
import {map} from 'ramda'
import actions from './actions'
import useAppReducer from './useAppReducer'

const StoreContext = React.createContext({store: {}, actions: {}})

export const Store = ({children}) => {
  const [store, dispatch] = useAppReducer()
  const boundActions = map(action => action(dispatch), actions)
  return <StoreContext.Provider value={{store, actions: boundActions}}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
