import React, {useEffect, useState} from 'react'
import {List} from '@material-ui/core'
import {useStore} from 'store'
import {getDateEntries} from 'api'
import {now} from 'common/datetime'
import {times, groupByTimeslot, findFirstTimeslotWithinDatetime} from './timesService'
import Time from './timesTime'

const Times = () => {
  const {
    store: {dateIdentifier, entriesByTimeslot},
    actions: {setEntriesByTimeslot},
  } = useStore()

  const [selectedTimeslot, setSelectedTimeslot] = useState()

  useEffect(() => {
    if (dateIdentifier) {
      return getDateEntries(dateIdentifier)
        .map(groupByTimeslot)
        .fork(console.error, setEntriesByTimeslot)
    }
  }, [dateIdentifier])

  useEffect(() => {
    if (dateIdentifier) {
      const currentDatetime = now()
      const timeslot = findFirstTimeslotWithinDatetime(currentDatetime, times)
      setSelectedTimeslot(timeslot)
    }
  }, [dateIdentifier])

  return (
    <List>
      {times.map(time => (
        <Time
          id={time.timeslot}
          key={time.timeslot}
          selected={selectedTimeslot === time.timeslot}
          select={setSelectedTimeslot}
          entries={entriesByTimeslot[time.timeslot]}
          {...time}
        />
      ))}
    </List>
  )
}

export default Times
