import React from 'react'
import {AppBar, CssBaseline, Paper} from '@material-ui/core'
import Datepicker from '../datepicker'
import Times from '../times'
import {Store} from 'store'

const App = () => (
  <>
    <CssBaseline />
    <Store>
      <header>
        <AppBar color="default">
          <Datepicker />
        </AppBar>
      </header>
      <main style={{marginTop: '3em'}}>
        <Paper>
          <Times />
        </Paper>
      </main>
    </Store>
  </>
)

export default App
