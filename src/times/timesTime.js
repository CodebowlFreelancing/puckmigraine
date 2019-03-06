import React from 'react'
import PropTypes from 'prop-types'
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core'
import Entry from '../entry'

const Time = ({display, timeslot, hour, minutes, entries}) => (
  <ExpansionPanel>
    <ExpansionPanelSummary>
      {display} {entries.map(({entryType}) => entryType)}
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Entry timeslot={timeslot} hour={hour} minutes={minutes} />
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

Time.propTypes = {
  display: PropTypes.string.isRequired,
  entries: PropTypes.array,
}

Time.defaultProps = {
  entries: [],
}

export default Time
