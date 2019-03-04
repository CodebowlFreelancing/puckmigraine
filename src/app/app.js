import React, {useState} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {Header, Main} from 'ui'
import {today, previousDate, nextDate} from 'common/datetime'

const App = () => {
  const [currentDate, setCurrentDate] = useState(today)
  return (
    <>
      <CssBaseline />
      <Header
        currentDate={currentDate}
        previousDate={() => setCurrentDate(previousDate(currentDate))}
        nextDate={() => setCurrentDate(nextDate(currentDate))}
      />
      <Main currentDate={currentDate} />
    </>
  )
}

export default App
