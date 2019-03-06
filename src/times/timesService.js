import {compose, flatten, map, range, groupBy} from 'ramda'
import {displayHourAndMinutes} from 'common/datetime'

const timeslotDurationInMinutes = 15

const hours = range(0)(24)

const timeslots = range(0)(60 / timeslotDurationInMinutes)

const createTimeslotIdentifier = ({hour, minutes}) => `${hour}|${minutes}`

const createTime = hour => timeslot => {
  const minutes = timeslot * timeslotDurationInMinutes
  return {
    hour,
    minutes,
    timeslot: createTimeslotIdentifier({hour, minutes}),
    display: displayHourAndMinutes(hour, minutes),
  }
}

const hourToTime = hour => map(createTime(hour), timeslots)

export const times = compose(
  flatten,
  map(hourToTime)
)(hours)

export const groupByTimeslot = groupBy(createTimeslotIdentifier)
