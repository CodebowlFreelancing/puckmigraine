import React from 'react'
import PropTypes from 'prop-types'
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core'
import Entry from '../entry'

const Time = ({display, hour, minutes}) => (
  <ExpansionPanel>
    <ExpansionPanelSummary>{display}</ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Entry hour={hour} minutes={minutes} />
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

Time.propTypes = {
  display: PropTypes.string.isRequired,
}

export default Time
