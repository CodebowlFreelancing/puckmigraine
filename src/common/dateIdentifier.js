import React from 'react'
import PropTypes from 'prop-types'
import {applySpec} from 'ramda'
import {today, getYear, getMonth, getDate} from 'common/datetime'

export const createDateIdentifier = applySpec({year: getYear, month: getMonth, dayOfMonth: getDate})

const DateIdentifierContext = React.createContext(createDateIdentifier(today))

const DateIdentifierContextProvider = ({currentDate, children}) => (
  <DateIdentifierContext.Provider value={createDateIdentifier(currentDate)}>{children}</DateIdentifierContext.Provider>
)
DateIdentifierContextProvider.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
  children: PropTypes.node,
}

export {DateIdentifierContextProvider, DateIdentifierContext}
