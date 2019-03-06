import React from 'react'
import {Button, FormControl, Grid, Input, InputLabel, NativeSelect} from '@material-ui/core'
import {useStore} from 'store'
import {postEntry} from 'api'

const entryList = [{value: 'ATTACK_START', display: 'Kohtaus alkaa'}, {value: 'ATTACK_END', display: 'Kohtaus päättyy'}]

const entryType = 'entryType'

const Entry = ({timeslot, hour, minutes}) => {
  const {
    store: {dateIdentifier},
    actions: {addEntryToTimeslot},
  } = useStore()

  const saveEntry = (dateIdentifier, hour, minutes) => event => {
    event.preventDefault()
    postEntry({...dateIdentifier, hour, minutes, [entryType]: event.target[entryType].value}).fork(
      console.error,
      entry => addEntryToTimeslot({timeslot, entry})
    )
  }

  return (
    <form style={{width: '100%'}} onSubmit={saveEntry(dateIdentifier, hour, minutes)}>
      <Grid wrap="nowrap" justify="space-between" container>
        <FormControl>
          <InputLabel htmlFor={entryType}>Merkintä</InputLabel>
          <NativeSelect input={<Input name={entryType} id={entryType} />}>
            {entryList.map(entry => (
              <option key={entry.value} value={entry.value}>
                {entry.display}
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

export default Entry
