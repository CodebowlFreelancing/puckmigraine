import {useReducer} from 'react'
import {cond, T, propEq, always} from 'ramda'
import {actionTypes} from './actions'

const typeEq = propEq('type')

const onType = (type, updater) => [typeEq(type), ({payload}) => updater(payload)]

const reducer = (state, action) =>
  cond([
    onType(actionTypes.setDateIdentifier, dateIdentifier => ({...state, dateIdentifier, entriesByTimeslot: {}})),
    onType(actionTypes.setEntriesByTimeslot, entriesByTimeslot => ({...state, entriesByTimeslot})),
    onType(actionTypes.addEntryToTimeslot, ({timeslot, entry}) => ({
      ...state,
      entriesByTimeslot: {...state.entriesByTimeslot, [timeslot]: [entry]}, // Needs to preserve existing as well
    })),
    [T, always(state)], // Fallback in case of unrecognized type
  ])(action)

const initialState = {
  dateIdentifier: null,
  entriesByTimeslot: {},
}

export default () => useReducer(reducer, initialState)
