import React from 'react'
import PropTypes from 'prop-types'
import {values} from 'ramda'
import entryTypes from './entryTypes'
import Entry from './entry'
import entryRegistry from './entryRegistry'
import {groupFirstByEntryType} from './entryService'

const entriesByEntryType = groupFirstByEntryType(entryRegistry)

const Entries = ({entries}) => (
  <>
    {entries.map(({entryType}) => (
      <Entry key={entryType} {...entriesByEntryType[entryType]} />
    ))}
  </>
)

Entries.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({entryType: PropTypes.oneOf(values(entryTypes)).isRequired}).isRequired),
}

Entries.defaultProps = {
  entries: [],
}

export default Entries
