import React from 'react'
import {AppBar, CssBaseline} from '@material-ui/core'
import Datepicker from '../datepicker'
import Times from '../times'
import {Store} from 'store'

const App = () => (
  <>
    <CssBaseline />
    <Store>
      <header>
        <AppBar position="sticky">
          <Datepicker />
        </AppBar>
      </header>
      <main>
        <Times />
      </main>
    </Store>
  </>
)

export default App
