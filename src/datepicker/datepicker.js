import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Grid, Icon, IconButton, Typography} from '@material-ui/core'
import {displayDate} from 'common/datetime'
import currentDateContext from 'common/currentDateContext'

const Header = ({previousDate, nextDate}) => {
  const currentDate = useContext(currentDateContext)
  return (
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
}

Header.propTypes = {
  previousDate: PropTypes.func.isRequired,
  nextDate: PropTypes.func.isRequired,
}

export default Header
