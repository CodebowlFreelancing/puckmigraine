import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Icon, IconButton, Typography} from '@material-ui/core'
import {displayDate} from 'common/datetime'

const Header = ({currentDate, previousDate, nextDate}) => (
  <Grid wrap="nowrap" justify="space-between" alignItems="center" container>
    <IconButton onClick={previousDate}>
      <Icon>arrow_back</Icon>
    </IconButton>
    <Typography variant="title" color="textPrimary" align="center" inline>
      {displayDate(currentDate)}
    </Typography>
    <IconButton onClick={nextDate}>
      <Icon>arrow_forward</Icon>
    </IconButton>
  </Grid>
)

Header.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
  previousDate: PropTypes.func.isRequired,
  nextDate: PropTypes.func.isRequired,
}

export default Header
