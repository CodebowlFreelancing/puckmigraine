import React, {useContext} from 'react'
import {Button, FormControl, Grid, Input, InputLabel, NativeSelect} from '@material-ui/core'
import currentDateContext from 'common/currentDateContext'
import {setTime} from 'common/datetime'
import {postEntry} from 'api'

const entryList = [{value: 'ATTACK_START', display: 'Kohtaus alkaa'}, {value: 'ATTACK_END', display: 'Kohtaus päättyy'}]

const entryType = 'entryType'

const saveEntry = (currentDate, hour, minutes) => event => {
  event.preventDefault()
  const datetime = setTime(currentDate)(hour)(minutes)
  postEntry({datetime, [entryType]: event.target[entryType].value}).fork(console.error, console.info)
}

const Entry = ({hour, minutes}) => {
  const currentDate = useContext(currentDateContext)
  return (
    <form style={{width: '100%'}} onSubmit={saveEntry(currentDate, hour, minutes)}>
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
