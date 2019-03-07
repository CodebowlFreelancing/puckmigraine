import {compose, flatten, find, map, range, groupBy} from 'ramda'
import {displayHourAndMinutes, getHours, getMinutes} from 'common/datetime'

const timeslotDurationInMinutes = 60

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

// Make these better

const isDatetimeWithinTimeslot = datetime => ({hour, minutes}) => {
  const datetimeHours = getHours(datetime)
  const datetimeMinutes = getMinutes(datetime)

  const minuteDifference = datetimeMinutes - minutes

  return datetimeHours === hour && minuteDifference < timeslotDurationInMinutes && minuteDifference >= 0
}

export const findFirstTimeslotWithinDatetime = (datetime, times) => {
  const result = find(isDatetimeWithinTimeslot(datetime))(times)
  return result.timeslot
}
