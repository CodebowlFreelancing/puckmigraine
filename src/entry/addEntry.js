import React from 'react'
import PropTypes from 'prop-types'
import {Button, FormControl, Grid, Input, InputLabel, NativeSelect} from '@material-ui/core'
import {useStore} from 'store'
import {postEntry} from 'api'
import entryRegistry from './entryRegistry'

const entryTypeField = 'entryType'

const AddEntry = ({timeslot, hour, minutes}) => {
  const {
    store: {dateIdentifier},
    actions: {addEntryToTimeslot},
  } = useStore()

  const saveEntry = (dateIdentifier, hour, minutes) => event => {
    event.preventDefault()
    postEntry({
      ...dateIdentifier,
      hour,
      minutes,
      timestamp: new Date(dateIdentifier.year, dateIdentifier.month, dateIdentifier.dayOfMonth, hour, minutes),
      [entryTypeField]: event.target[entryTypeField].value,
    }).fork(console.error, entry => addEntryToTimeslot({timeslot, entry}))
  }

  return (
    <form style={{width: '100%'}} onSubmit={saveEntry(dateIdentifier, hour, minutes)}>
      <Grid wrap="nowrap" justify="space-between" container>
        <FormControl>
          <InputLabel htmlFor={entryTypeField}>Merkintä</InputLabel>
          <NativeSelect input={<Input name={entryTypeField} id={entryTypeField} />}>
            {entryRegistry.map(({entryType, display}) => (
              <option key={entryType} value={entryType}>
                {display}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Tallenna
        </Button>
      </Grid>
    </form>
  )
}

AddEntry.propTypes = {
  timeslot: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
}

export default AddEntry
