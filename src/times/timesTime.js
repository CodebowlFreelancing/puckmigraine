import React from 'react'
import PropTypes from 'prop-types'
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core'
import Entry from '../entry'

const Time = ({display}) => (
  <ExpansionPanel>
    <ExpansionPanelSummary>{display}</ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Entry />
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

Time.propTypes = {
  display: PropTypes.string.isRequired,
}

export default Time
