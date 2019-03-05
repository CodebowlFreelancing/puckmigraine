import React from 'react'
import {times} from './timesService'
import Time from './timesTime'

const Times = () => (
  <>
    {times.map(time => (
      <Time key={time.display} {...time} />
    ))}
  </>
)

export default Times
