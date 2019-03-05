import React, {useState} from 'react'
import {AppBar, CssBaseline} from '@material-ui/core'
import {today, previousDate, nextDate} from 'common/datetime'
import currentDateContext from 'common/currentDateContext'
import Datepicker from '../datepicker'
import Times from '../times'

const App = () => {
  const [currentDate, setCurrentDate] = useState(today)
  return (
    <>
      <CssBaseline />
      <currentDateContext.Provider value={currentDate}>
        <header>
          <AppBar position="sticky">
            <Datepicker
              previousDate={() => setCurrentDate(previousDate(currentDate))}
              nextDate={() => setCurrentDate(nextDate(currentDate))}
            />
          </AppBar>
        </header>
        <main>
          <Times />
        </main>
      </currentDateContext.Provider>
    </>
  )
}

export default App
