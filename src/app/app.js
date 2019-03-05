import React, {useState} from 'react'
import {AppBar, CssBaseline} from '@material-ui/core'
import {today, previousDate, nextDate} from 'common/datetime'
import Datepicker from '../datepicker'
import Times from '../times'

const App = () => {
  const [currentDate, setCurrentDate] = useState(today)
  return (
    <>
      <CssBaseline />
      <header>
        <AppBar position="sticky">
          <Datepicker
            currentDate={currentDate}
            previousDate={() => setCurrentDate(previousDate(currentDate))}
            nextDate={() => setCurrentDate(nextDate(currentDate))}
          />
        </AppBar>
      </header>
      <main>
        <Times />
      </main>
    </>
  )
}

export default App
