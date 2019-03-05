import React from 'react'
import {Button, FormControl, Grid, Input, InputLabel, NativeSelect} from '@material-ui/core'
import {postEntry} from 'api'

const entryList = [{value: 'ATTACK_START', display: 'Kohtaus alkaa'}, {value: 'ATTACK_END', display: 'Kohtaus päättyy'}]

const entryType = 'entryType'

const saveEntry = event => {
  event.preventDefault()
  postEntry({[entryType]: event.target[entryType].value}).fork(console.error, console.info)
}

const Entry = () => (
  <form style={{width: '100%'}} onSubmit={saveEntry}>
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

export default Entry
