import {pipe, groupBy, prop, map, head} from 'ramda'

const propEntryType = prop('entryType')

export const groupFirstByEntryType = pipe(
  groupBy(propEntryType),
  map(head)
)
