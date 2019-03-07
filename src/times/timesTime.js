import React, {useRef, useLayoutEffect} from 'react'
import PropTypes from 'prop-types'
import {ListItem, ListItemText} from '@material-ui/core'
import {AddEntry, Entries} from '../entry'

const Time = ({display, timeslot, hour, minutes, entries, selected, select}) => {
  const listItemRef = useRef(null)

  useLayoutEffect(() => {
    if (selected) {
      listItemRef.current.scrollIntoView({block: 'center'})
    }
  }, [selected, listItemRef])

  return (
    <div ref={listItemRef}>
      <ListItem button selected={selected} onClick={() => select(timeslot)}>
        <>
          <ListItemText primary={display} />
          <Entries entries={entries} />
        </>
      </ListItem>
      {selected && (
        <ListItem>
          <AddEntry timeslot={timeslot} hour={hour} minutes={minutes} />
        </ListItem>
      )}
    </div>
  )
}

Time.propTypes = {
  display: PropTypes.string.isRequired,
  entries: PropTypes.array,
  selected: PropTypes.bool,
  select: PropTypes.func.isRequired,
}

Time.defaultProps = {
  entries: [],
  selected: false,
}

export default Time
