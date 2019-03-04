import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem} from '@material-ui/core'
import {compose, join, map, range} from 'sanctuary'

// TODO refactor logic out

// Cleanup implementation

const timeslotDurationInMinutes = 15

const hours = range(0)(24)
const timeslots = range(0)(60 / timeslotDurationInMinutes)

const createTime = hour => timeslot => ({hour, minutes: timeslot * timeslotDurationInMinutes})

const toTime = hour => map(createTime(hour))(timeslots)

const times = compose(join)(map(toTime))(hours)

// Move to own file after done
const Item = ({hour, minutes}) => (
  <ListItem>
    {hour}:{minutes}
  </ListItem>
)
Item.propTypes = {
  hour: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
}

const Main = ({currentDate}) => (
  <main>
    <List>
      {times.map(time => (
        <Item key={`${time.hour}:${time.minutes}`} {...time} />
      ))}
    </List>
  </main>
)

Main.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
}

export default Main
