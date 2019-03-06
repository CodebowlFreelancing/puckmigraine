import React, {useEffect} from 'react'
import {times, groupByTimeslot} from './timesService'
import Time from './timesTime'
import {useStore} from 'store'
import {getDateEntries} from 'api'

const Times = () => {
  const {
    store: {dateIdentifier, entriesByTimeslot},
    actions: {setEntriesByTimeslot},
  } = useStore()

  useEffect(() => {
    if (dateIdentifier) {
      return getDateEntries(dateIdentifier)
        .map(groupByTimeslot)
        .fork(console.error, setEntriesByTimeslot)
    }
  }, [dateIdentifier])

  return (
    <>
      {times.map(time => (
        <Time key={time.timeslot} entries={entriesByTimeslot[time.timeslot]} {...time} />
      ))}
    </>
  )
}

export default Times
