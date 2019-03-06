import React, {useState, useEffect} from 'react'
import {Grid, Icon, IconButton, Typography} from '@material-ui/core'
import {applySpec} from 'ramda'
import {useStore} from 'store'
import {today, displayDate, nextDate, previousDate, getYear, getMonth, getDate} from 'common/datetime'

const createDateIdentifier = applySpec({year: getYear, month: getMonth, dayOfMonth: getDate})

const DatePicker = React.memo(() => {
  const {
    actions: {setDateIdentifier},
  } = useStore()
  const [currentDate, setCurrentDate] = useState(today)

  useEffect(() => setDateIdentifier(createDateIdentifier(currentDate)), [currentDate])

  return (
    <Grid wrap="nowrap" justify="space-between" alignItems="center" container>
      <IconButton onClick={() => setCurrentDate(previousDate(currentDate))}>
        <Icon>arrow_back</Icon>
      </IconButton>
      <Typography variant="title" color="textPrimary" align="center" inline>
        {displayDate(currentDate)}
      </Typography>
      <IconButton onClick={() => setCurrentDate(nextDate(currentDate))}>
        <Icon>arrow_forward</Icon>
      </IconButton>
    </Grid>
  )
})

export default DatePicker
