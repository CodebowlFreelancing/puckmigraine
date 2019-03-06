import {map} from 'ramda'

const createAction = type => dispatch => payload => dispatch({type, payload})

export const actionTypes = {
  setDateIdentifier: Symbol('SET_DATE_IDENTIFIER'),
  setEntriesByTimeslot: Symbol('SET_ENTRIES_BY_TIMESLOT'),
  addEntryToTimeslot: Symbol('ADD_ENTRY_TO_TIMESLOT'),
}

export default map(createAction, actionTypes)
