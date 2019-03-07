import {compose, flatten, find, map, range, groupBy} from 'ramda'
import {displayHourAndMinutes, getHours, getMinutes} from 'common/datetime'

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

const isDatetimeWithinTimeslot = datetime => ({hour, minutes}) => {
  const datetimeHours = getHours(datetime)
  const datetimeMinutes = getMinutes(datetime)

  // 47 - 45 = 2
  // 47 - 15 = 32
  // 17 - 30 = -13 NOTOK
  // 15 - 15 = 0
  // 30 - 15 = 15 NOTOK; 30 - 30 = 0 OK

  const minuteDifference = datetimeMinutes - minutes

  const retVal = datetimeHours === hour && minuteDifference < timeslotDurationInMinutes && minuteDifference >= 0
  // console.log(`${datetimeHours}:${datetimeMinutes} vs ${hour}:${minutes}`, retVal)

  return retVal
}

export const findFirstTimeslotWithinDatetime = (datetime, times) => {
  const result = find(isDatetimeWithinTimeslot(datetime))(times)
  return result.timeslot
}
