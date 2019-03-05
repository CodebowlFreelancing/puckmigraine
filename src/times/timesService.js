import {compose, join, map, range} from 'sanctuary'
import {displayHourAndMinutes} from 'common/datetime'

const timeslotDurationInMinutes = 15

const hours = range(0)(24)

const timeslots = range(0)(60 / timeslotDurationInMinutes)

const createTime = hour => timeslot => {
  const minutes = timeslot * timeslotDurationInMinutes
  return {
    hour,
    minutes,
    display: displayHourAndMinutes(hour, minutes),
  }
}

const hourToTime = hour => map(createTime(hour))(timeslots)

export const times = compose(join)(map(hourToTime))(hours)
