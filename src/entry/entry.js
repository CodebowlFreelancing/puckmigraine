import React from 'react'
import PropTypes from 'prop-types'
import {Chip} from '@material-ui/core'

const Entry = ({stringIcon, display, color}) => <Chip icon={<div>{stringIcon}</div>} label={display} color={color} />

Entry.propTypes = {
  stringIcon: PropTypes.string,
  display: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Entry.defaultProps = {
  color: 'secondary',
}

export default Entry
